import { BlogPostLayout } from "../../../layouts/BlogPostLayout";
import { fileService } from "../../../src/markdoc/fetch-files";

export async function getStaticPaths() {
  const blogFiles = await fileService.fetch("content/blog");

  const paths = blogFiles.map(({ frontmatter }) => {
    return {
      params: { year: new Date(frontmatter.date).getFullYear().toString(), slug: frontmatter.slug }
    };
  });

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps(context: any) {
  const blogFiles = await fileService.fetch("content/blog");

  const pageData = blogFiles.filter((file) => file.frontmatter.slug === context.params.slug)[0];

  console.log(pageData);

  return {
    props: { title: pageData.frontmatter.title, content: JSON.stringify(pageData.renderableTree) }
  };
}

export default function Post({ title, content }: any) {
  return <BlogPostLayout title={title} markdoc={JSON.parse(content)} />;
}
