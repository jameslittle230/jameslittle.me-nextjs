import classnames from "classnames";
import { FullWidth, Grid } from "../grid";

export const PageTitle = ({ title, topSpace }: { title: string; topSpace: boolean }) => (
  <Grid background="color" noPadding={false}>
    <FullWidth>
      <h1 className={classnames("page-title", { "page-title-top-space": topSpace })}>{title}</h1>
    </FullWidth>
  </Grid>
);
