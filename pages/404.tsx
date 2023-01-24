import Link from "next/link";
import { PageLayout } from "../layouts/PageLayout";
import { FullWidth, Grid } from "../src/components/grid";

export default function Pages() {
  return (
    <PageLayout title="404">
      <Grid>
        <FullWidth>Page not found!!</FullWidth>
      </Grid>
    </PageLayout>
  );
}
