import classnames from "classnames";
import { FullWidth, Grid } from "../PageGrid";

export const PageTitle = ({
  title,
  subtitle,
  topSpace,
}: {
  title: string;
  subtitle?: string;
  topSpace: boolean;
}) => (
  <Grid background="color" padding="less">
    <FullWidth>
      <div className="page-title-flex-container">
        <h1
          className={classnames("page-title", {
            "page-title-top-space": topSpace,
            long: title.length > 20,
          })}
        >
          {title}
        </h1>
        {subtitle && <p className="page-title-subtitle">{subtitle}</p>}
      </div>
    </FullWidth>
  </Grid>
);
