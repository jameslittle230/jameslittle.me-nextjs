import Head from "next/head";
import Link from "next/link";
import { HomeIntro } from "../src/components/home/HomeIntro";
import { PageFooter } from "../src/components/page/PageFooter";
import { PageHeader } from "../src/components/page/PageHeader";
import { PageTitle } from "../src/components/page/PageTitle";
import { Section } from "../src/components/page/Section";
import { useTheme } from "../src/hooks/ThemeProvider";

const md = (string: TemplateStringsArray) => <>{string}</>;

type BlogPost = {
  id: string;
  date: string;
};

type Project = {
  id: string;
  name: string;
};

const blogposts: BlogPost[] = [
  {
    id: "asdf",
    date: "2022-11-08"
  },
  {
    id: "foo",
    date: "2022-11-08"
  }
];

const projects: Project[] = [
  {
    id: "stork",
    name: "Stork Search"
  }
];

const SeeMoreLink = ({ href }: { href: string }) => (
  <div>
    <Link href={href}>See more →</Link>
  </div>
);

const BlogPostListItem = ({ post }: { post: BlogPost }) => <li>{post.id}</li>;
const ProjectListItem = ({ project }: { project: Project }) => <li>{project.name}</li>;

export default () => {
  const { setTheme } = useTheme();
  setTheme("green");
  return (
    <>
      <PageHeader />
      <PageTitle title="Hi, I'm James!" topSpace={false} />
      <HomeIntro />
      <Section background="offset" title="Blog">
        <ul>
          {blogposts.map((post) => (
            <BlogPostListItem post={post} key={post.id} />
          ))}
        </ul>
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
};
