import { BlogPostLayout } from "../../../layouts/BlogPostLayout";
import { fileService } from "../../../src/markdoc/fetch-files";
import { BlogPost, DehydratedBlogPost } from "../../../src/models/blog-post";

export async function getStaticPaths() {
  const blogPost = await fileService.listFiles(BlogPost.directory);

  const paths = blogPost.map((b) => {
    return {
      params: b.staticPath()
    };
  });

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps(
  context: any
): Promise<{ props: { prev: DehydratedBlogPost | null; post: DehydratedBlogPost } }> {
  const blogPosts = await fileService.listFiles(BlogPost.directory);

  const {
    params: { year, slug }
  } = context;

  const postIndex = blogPosts.findIndex((b) => b.matches(year, slug));

  if (postIndex === -1) {
    throw new Error("Post not found");
  }

  if (postIndex === 0) {
    return {
      props: {
        prev: null,
        post: blogPosts[postIndex].serialize()
      }
    };
  } else {
    return {
      props: {
        prev: blogPosts[postIndex - 1].serialize(),
        post: blogPosts[postIndex].serialize()
      }
    };
  }
}

export default function Post({
  prev,
  post
}: {
  prev: DehydratedBlogPost | null;
  post: DehydratedBlogPost;
}) {
  const blogPost = BlogPost.hydrate(post);
  const prevBlogPost = prev ? BlogPost.hydrate(prev) : null;
  return <BlogPostLayout prev={prevBlogPost} post={blogPost} />;
}
