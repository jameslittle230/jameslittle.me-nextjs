import { PageLayout } from "../../layouts/PageLayout";
import { BlogPostPreview } from "../../src/components/BlogPostPreview";
import { FullWidth, Grid } from "../../src/components/grid";
import Theme from "../../src/components/Theme";
import { fileService } from "../../src/markdoc/fetch-files";
import { BlogPost, DehydratedBlogPost } from "../../src/models/blog-post";

export async function getStaticProps(_context: any) {
  const posts = [
    ...(await fileService.listFiles(BlogPost.directory)),
  ] as BlogPost[];
  return {
    props: {
      posts: posts.map((p) => {
        const s = p.serialize();
        delete s.ast;
        delete s.renderableTree;
        return s;
      }),
    },
  };
}

export default function Home({ posts }: { posts: DehydratedBlogPost[] }) {
  return (
    <PageLayout title="Blog">
      <Theme theme="blue" />
      <Grid>
        <FullWidth>
          {posts.map((p) => {
            const post = BlogPost.hydrate(p);
            return (
              <BlogPostPreview
                key={`${post.formattedDate()}-${post.slug()}`}
                post={post}
              />
            );
          })}
        </FullWidth>
      </Grid>
    </PageLayout>
  );
}
