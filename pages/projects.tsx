import Airtable from "airtable";
import { PageLayout } from "../layouts/PageLayout";
import { FullWidth, Grid, Left, Right, Subgrid } from "../src/components/grid";
import { ProjectPreview } from "../src/components/ProjectPreview";
import Theme from "../src/components/Theme";
import { fileService } from "../src/markdoc/fetch-files";
import { Project } from "../src/models/project";

type Book = {
  title: string;
  author: string;
  completed: string;
  year: number;
};

export async function getStaticProps(_context: any) {
  let projects = [
    ...(await fileService.listFiles(Project.directory)),
  ] as Project[];

  projects = projects.splice(0, 5);
  const displayProjects = projects.map((p) => {
    let s = p.serialize();
    delete s.ast;
    delete s.renderableTree;
    return s;
  });

  return {
    props: { displayProjects },
  };
}

export default function Read({
  displayProjects,
}: {
  displayProjects: Project[];
}) {
  return (
    <PageLayout title="Projects">
      <Theme theme="orange" />
      <Grid>
        <FullWidth>
          <div className="projects-grid">
            {displayProjects.map((project) => (
              <ProjectPreview project={project} key={project.metadata.slug} />
            ))}
          </div>
          <ul>
            <li>Other</li>
            <li>stuff</li>
            <li>goes</li>
            <li>here</li>
          </ul>
        </FullWidth>
      </Grid>

      {/* {Object.entries(yearListings).map(([year, books]) => {
        <h2>{year}</h2>;
        <ul>
          {books.map((book) => (
            <li key={book.title}>{book.title}</li>
          ))}
        </ul>;
      })} */}
    </PageLayout>
  );
}
