import Link from "next/link";
import { useEffect } from "react";
import { HomeIntro } from "../src/components/home/HomeIntro";
import { PageFooter } from "../src/components/page/PageFooter";
import { PageHeader } from "../src/components/page/PageHeader";
import { PageTitle } from "../src/components/page/PageTitle";
import { Section } from "../src/components/page/Section";
import { fileService } from "../src/markdoc/fetch-files";
import { BlogPost, DehydratedBlogPost } from "../src/models/blog-post";
import { BlogPostPreview } from "./blog";

type Project = {
  id: string;
  name: string;
};

const projects: Project[] = [
  {
    id: "stork",
    name: "Stork Search",
  },
];

const SeeMoreLink = ({ href }: { href: string }) => (
  <div className="read-more-link">
    <Link href={href}>Read more →</Link>
  </div>
);

const ProjectListItem = ({ project }: { project: Project }) => (
  <li>{project.name}</li>
);

export async function getStaticProps(_context: any) {
  let blogPosts = [...(await fileService.listFiles(BlogPost.directory))];
  blogPosts = blogPosts.reverse().splice(0, 5);
  const posts = blogPosts.map((p) => {
    let s = p.serialize();
    delete s.ast;
    delete s.renderableTree;
    return s;
  });
  return {
    props: { posts },
  };
}

export default function Home({ posts }: { posts: DehydratedBlogPost[] }) {
  const blogPosts: BlogPost[] = posts.map((p: any) => BlogPost.hydrate(p));
  return (
    <>
      <PageHeader />
      <PageTitle title="Hi, I'm James!" topSpace={false} />

      <HomeIntro />

      <Section background="offset" title="Blog">
        <h2 className={"section-title"}>Blog</h2>
        {blogPosts.map((post) => (
          <BlogPostPreview key={JSON.stringify(post.staticPath)} post={post} />
        ))}
        <SeeMoreLink href="/blog" />
      </Section>

      <Section title="Projects">
        <ul>
          {projects.map((project) => (
            <ProjectListItem project={project} key={project.id} />
          ))}
        </ul>
        <SeeMoreLink href="/projects" />
      </Section>

      <PageFooter />
    </>
  );
}
