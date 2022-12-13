import Link from "next/link";
import { PageLayout } from "../../layouts/PageLayout";
import { Grid, Left, Right, Subgrid } from "../../src/components/grid";
import Theme from "../../src/components/Theme";
import { ContentFile, fileService } from "../../src/markdoc/fetch-files";
import { BlogPost, DehydratedBlogPost } from "../../src/models/blog-post";

export async function getStaticProps(_context: any) {
  const posts = [...(await fileService.listFiles(BlogPost.directory))];
  posts.reverse();
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

export const BlogPostPreview = ({ post }: { post: BlogPost }) => {
  const { date, slug, title } = post.metadata;
  const year = new Date(date).getFullYear().toString();
  return (
    <Subgrid weight="right" className="blog-post-preview">
      <Left>
        <p className="blog-post-preview-date">{post.formattedDate()}</p>
      </Left>
      <Right>
        <p className="blog-post-preview-title">
          <Link href={`/blog/${year}/${slug}`}>{title}</Link>
        </p>
        <p>{post.metadata.blurb}</p>
      </Right>
    </Subgrid>
  );
};

export default function Home({ posts }: { posts: DehydratedBlogPost[] }) {
  return (
    <PageLayout title="Blog">
      <Theme theme="blue" />
      <Grid>
        {posts.map((p) => {
          const post = BlogPost.hydrate(p);
          return (
            <BlogPostPreview
              key={`${post.formattedDate()}-${post.metadata.slug}`}
              post={post}
            />
          );
        })}
      </Grid>
    </PageLayout>
  );
}
