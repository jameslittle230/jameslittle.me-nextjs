import { PageLayout } from "../../layouts/PageLayout";
import { ContentFile, fileService } from "../../src/markdoc/fetch-files";

export async function getStaticProps(_context: any) {
  const posts = await fileService.fetch("content/blog");
  return {
    props: { posts }
  };
}

export default function Home({ posts }: { posts: ContentFile }) {
  return (
    <PageLayout title="Blog">
      <pre>{JSON.stringify(posts, null, 2)}</pre>
    </PageLayout>
  );
}
