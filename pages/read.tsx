import Airtable from "airtable";
import { PageLayout } from "../layouts/PageLayout";
import { Grid, Left, Right, Subgrid } from "../src/components/grid";

type Book = {
  title: string;
  author: string;
  completed: string;
  year: number;
};

export async function getStaticProps(_context: any) {
  Airtable.configure({
    endpointUrl: "https://api.airtable.com",
    apiKey: process.env.AIRTABLE_KEY,
  });

  const booksBaseKey = "appktTl97d89xOZQa";
  var base = Airtable.base(booksBaseKey);

  const getAirtableEntries = () =>
    new Promise<Book[]>((resolve, reject) => {
      var books: Book[] = [];

      base("Reading List")
        .select()
        .eachPage(
          (records, fetchNextPage) => {
            // called for each page of records (100 records/page)

            try {
              for (const record of records) {
                if (!record.get("Completion Date")) {
                  break;
                }
                const completed = new Date(
                  record.get("Completion Date") as string
                );
                const year = completed.getUTCFullYear();
                const datum = {
                  title: record.get("Title") as string,
                  author: record.get("Author") as string,
                  completed: completed.toISOString(),
                  year,
                };
                books.push(datum);
              }

              fetchNextPage();
            } catch (e) {
              console.error(e);
            }
          },
          (err) => {
            if (err) reject(err);
            else {
              resolve(books);
            }
          }
        );
    });

  const data = await getAirtableEntries();

  const yearListings = Object.entries(
    data.reduce<Record<number, Book[]>>((acc, book) => {
      if (acc[book.year]) {
        acc[book.year].push(book);
      } else {
        acc[book.year] = [book];
      }
      return acc;
    }, {})
  );

  yearListings.reverse();
  yearListings.forEach(([_, books]) => {
    books.sort(
      (a, b) =>
        new Date(a.completed).getTime() - new Date(b.completed).getTime()
    );
    books.reverse();
  });

  return {
    props: { data, yearListings },
  };
}

export default function Read({
  data,
  yearListings,
}: {
  data: Book[];
  yearListings: [string, Book[]][];
}) {
  return (
    <PageLayout title="Reading List">
      <Grid>
        <Subgrid weight="right">
          <Right>
            <article>
              <p>All {data.length} books I&apos;ve read since January 2014.</p>
              {yearListings.map(([a, b]) => (
                <>
                  <h2 key={a}>{a}</h2>
                  <ul>
                    {b.map((book) => (
                      <li key={book.title}>
                        {book.title} <em>by</em> {book.author}
                      </li>
                    ))}
                  </ul>
                </>
              ))}
            </article>
          </Right>
        </Subgrid>
      </Grid>
    </PageLayout>
  );
}
