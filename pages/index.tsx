import Link from "next/link";
import { BlogPostPreview } from "../src/components/BlogPostPreview";
import { HomeIntro } from "../src/components/home/HomeIntro";
import { PageFooter } from "../src/components/page/PageFooter";
import { PageHeader } from "../src/components/page/PageHeader";
import { PageTitle } from "../src/components/page/PageTitle";
import { Section } from "../src/components/page/Section";
import { ProjectPreview } from "../src/components/ProjectPreview";
import { fileService } from "../src/markdoc/fetch-files";
import { BlogPost, DehydratedBlogPost } from "../src/models/blog-post";
import { DehydratedProject, Project } from "../src/models/project";
import { generateRssFeed } from "../src/scripts/gen-rss";

const SeeMoreLink = ({ href, verb }: { href: string; verb?: string }) => (
  <div className="read-more-link">
    <Link href={href}>{verb || "Read"} more →</Link>
  </div>
);

export async function getStaticProps(_context: any) {
  // Random scripts that need to run at some point during build time
  generateRssFeed();

  // Get props for this page
  let blogPosts = [
    ...(await fileService.listFiles(BlogPost.directory)),
  ] as BlogPost[];

  blogPosts.reverse();
  blogPosts = blogPosts.splice(0, 5);
  const posts = blogPosts.map((p) => {
    let s = p.serialize();
    delete s.ast;
    delete s.renderableTree;
    return s;
  });

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
    props: { posts, displayProjects },
  };
}

export default function Home({
  posts,
  displayProjects,
}: {
  posts: DehydratedBlogPost[];
  displayProjects: DehydratedProject[];
}) {
  const blogPosts: BlogPost[] = posts.map((p: any) => BlogPost.hydrate(p));
  return (
    <>
      <PageHeader />
      <PageTitle title="Hi, I'm James!" topSpace={false} />

      <HomeIntro />

      <Section background="offset">
        <h2 className={"section-title"}>Blog</h2>
        {blogPosts.map((post) => (
          <BlogPostPreview
            key={JSON.stringify(post.staticPath())}
            post={post}
          />
        ))}
        <SeeMoreLink href="/blog" />
      </Section>

      <Section>
        <h2 className={"section-title"}>Projects</h2>
        <div className="projects-grid">
          {displayProjects.map((project) => (
            <ProjectPreview key={project.metadata.slug} project={project} />
          ))}
        </div>
        <SeeMoreLink href="/projects" verb="See" />
      </Section>

      <PageFooter />
    </>
  );
}
