import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const useTheme = () => ({ setTheme: (color: "green") => {} });

const PageHeader = ({ showNameplate }: { showNameplate: boolean }) => <></>;

const PageTitle = ({ title, topSpace }: { title: string; topSpace: boolean }) => <div>{title}</div>;

const PageFooter = () => <>copyright 2022 james</>;

const HomeIntro = ({
  top,
  bottom,
  side
}: {
  top: React.ReactNode;
  bottom: React.ReactNode;
  side: React.ReactNode;
}) => (
  <>
    <div>{top}</div>
    <div>{bottom}</div>
    <div>{side}</div>
  </>
);

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

const Section = ({
  background,
  title,
  children
}: {
  background: "offset" | "none";
  title: string;
  children: React.ReactNode;
}) => <div>{children}</div>;

const SeeMoreLink = ({ href }: { href: string }) => (
  <div>
    <Link href={href}>See more →</Link>
  </div>
);

const BlogPostListItem = ({ post }: { post: BlogPost }) => <li>{post.id}</li>;
const ProjectListItem = ({ project }: { project: Project }) => <li>{project.name}</li>;
export default function Home() {
  const { setTheme } = useTheme();
  setTheme("green");
  return (
    <div>
      <PageHeader showNameplate={true} />
      <PageTitle title="Hi, I'm James!" topSpace={false} />
      <HomeIntro
        top={md`
I'm a software engineer and design enthusiast.

I'm interested in how people interact with technology. I want to make software that makes the digital world friendly and intuitive.
        `}
        bottom={md`
I work at Stripe on the Docs team, where I do web platform engineering and web design. Previously, I built in-person payment experiences for Stripe Terminal and worked on the Stripe Dashboard iOS app.

I started at Stripe after graduating from Bowdoin College in Brunswick, Maine, where I majored in Computer Science, built a website for the student newspaper, and made robots play soccer.

Today, I live in Boston, Massachusetts.
        `}
        side={
          <Image
            src="https://files.jameslittle.me/images/headshot.jpg"
            width="400"
            height="600"
            alt="my dumb mug"
          ></Image>
        }
      />
      <Section background="offset" title="Blog">
        <ul>
          {blogposts.map((post) => (
            <BlogPostListItem post={post} key={post.id} />
          ))}
        </ul>
        <SeeMoreLink href="/blog" />
      </Section>

      <Section background="none" title="Projects">
        <ul>
          {projects.map((project) => (
            <ProjectListItem project={project} key={project.id} />
          ))}
        </ul>
        <SeeMoreLink href="/projects" />
      </Section>

      <PageFooter />
    </div>
  );
}
