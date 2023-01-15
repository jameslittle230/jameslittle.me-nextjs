import Link from "next/link";
import { PageLayout } from "../layouts/PageLayout";
import { FullWidth, Grid } from "../src/components/grid";
import format from "date-fns/format";

export async function getStaticProps(_context: any) {
  return {
    props: {
      timeline: [
        { date: "1996-11-23", content: "Born in Boston, MA" },
        {
          date: "2006-10-01",
          content:
            "Published my first website, a page outlining my fourth grade class's recycling&nbsp;program",
        },
        {
          date: "2015-06-01",
          content:
            'Graduated from <a href="https://milton.edu">Milton Academy</a>',
        },
        {
          date: "2017-07-01",
          content:
            "Met Maddie while spending the summer in San Francisco interning at Okta",
        },
        {
          date: "2018-01-01",
          content: "Spent a semester living in Budapest, Hungary",
        },
        {
          date: "2019-05-01",
          content:
            'Graduated from <a href="https://bowdoin.edu">Bowdoin College</a>',
        },
        { date: "2019-07-01", content: "Moved to San Francisco" },
        {
          date: "2019-08-05",
          content: 'Started work at <a href="https://stripe.com">Stripe</a>',
        },
        {
          date: "2020-03-01",
          content: 'Launched <a href="https://stork-search.net">Stork</a>',
        },
        {
          date: "2021-07-01",
          content: "Moved from San Francisco to Cambridge, MA",
        },
        {
          date: "2022-06-01",
          content: "Switched from Stripe Terminal to Stripe Docs Product team",
        },
        {
          date: "2022-11-23",
          content: "Got engaged to Maddie",
        },
      ],
    },
  };
}

export default function Pages({
  timeline,
}: {
  timeline: [{ date: string; content: string }];
}) {
  return (
    <PageLayout title="All Pages">
      <Grid>
        <FullWidth>
          <article>
            <ul>
              {timeline.map((item) => (
                <li key={item.date}>
                  {format(new Date(item.date), "MMM yyyy")} -{" "}
                  <span dangerouslySetInnerHTML={{ __html: item.content }} />
                </li>
              ))}
            </ul>
          </article>
        </FullWidth>
      </Grid>
    </PageLayout>
  );
}
