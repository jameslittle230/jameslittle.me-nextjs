import { PageLayout } from "../layouts/PageLayout";
import { FullWidth, Grid } from "../src/components/Grid";
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
          <article>
            <h2>Other things I&apos;ve made</h2>
            <ul>
              <li>
                <a href="https://jil.im">A link shortening service</a> (Late
                2022)
              </li>
              <li>This blog! (Early 2023)</li>
              <li>
                <a href="https://rothrotterlaster.com">
                  The website for my mom&apos;s pediatric practice
                </a>{" "}
                (2019-present)
              </li>
              <li>
                A Bowdoin Directory with live search and more information
                displayed. (Fall 2018–Fall 2021)
              </li>
              <li>
                <a href="https://files.jameslittle.me/projects/ait-graphics-final/index.html">
                  A Marble Blast Gold clone built with WebGL
                </a>{" "}
                (Spring 2018)
              </li>
              <li>
                <a href="https://bowdoinorient.com/2017/04/07/housing/">
                  An interactive Bowdoin campus map to visualize the likelihood
                  of housing lottery outcomes
                </a>{" "}
                (Spring 2017)
              </li>
            </ul>
          </article>
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
