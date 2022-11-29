import classnames from "classnames";
import { FullWidth, Grid } from "../grid";

export const PageTitle = ({
  title,
  subtitle,
  topSpace
}: {
  title: string;
  subtitle?: string;
  topSpace: boolean;
}) => (
  <Grid background="color" padding="less">
    <FullWidth>
      <h1 className={classnames("page-title", { "page-title-top-space": topSpace })}>{title}</h1>
      {subtitle && <p className="page-title-subtitle">{subtitle}</p>}
    </FullWidth>
  </Grid>
);
