import Markdoc from "@markdoc/markdoc";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import { FullWidth, Grid, Left, Right, Subgrid } from "../src/components/grid";
import { PageFooter } from "../src/components/page/PageFooter";
import { PageHeader } from "../src/components/page/PageHeader";
import { PageTitle } from "../src/components/page/PageTitle";
import { components } from "../src/markdoc/components/index";
import Note from "../src/markdoc/components/note/note";
import { BlogPost } from "../src/models/blog-post";

export const BlogPostLayout = ({
  prev,
  post,
}: {
  prev: BlogPost | null;
  post: BlogPost;
}) => {
  if (!post.renderableTree) {
    throw new Error("");
  }
  const content = Markdoc.renderers.react(post.renderableTree, React, {
    components,
  });

  return (
    <>
      <Head>
        <title>{post.metadata.title} - jameslittle.me</title>
      </Head>
      <PageHeader />
      <PageTitle
        title={post.metadata.title}
        subtitle={post.formattedDate()}
        topSpace={true}
      />

      <Grid>
        <FullWidth>
          {post.metadata.outdated ? (
            <Note title={"This post is outdated!"}>
              {post.metadata.outdated}
            </Note>
          ) : null}
        </FullWidth>
        <Subgrid weight={"right"}>
          <Right>{content}</Right>
          <Left className="blog-post-aside-container">
            {prev ? (
              <div className="blog-post-aside">
                <b>Previous:</b>{" "}
                <Link href={prev.href()}>{prev.metadata.title}</Link>
              </div>
            ) : null}
            <div className="blog-post-aside">
              <p>
                I&apos;m James Little, a software engineer and design enthusiast
                based in Cambridge, MA. I work at Stripe on the Docs team, and I
                build a web search tool called <a href="https://stork-search.net">Stork Search</a>.
              </p>
            </div>
          </Left>
        </Subgrid>
      </Grid>

      <PageFooter />
    </>
  );
};
