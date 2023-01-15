import { PageLayout } from "../../layouts/PageLayout";
import { FullWidth, Grid } from "../../src/components/grid";

export async function getStaticProps(_context: any) {
  return {
    props: {},
  };
}

export default function Photos() {
  return (
    <PageLayout title="Talks">
      <Grid>
        <FullWidth>
          <p>Coming soon...</p>
        </FullWidth>
      </Grid>
    </PageLayout>
  );
}
