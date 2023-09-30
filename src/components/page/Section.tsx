import { Background, FullWidth, Grid } from "../PageGrid";

export const Section = ({
  background,
  children,
}: {
  background?: Background;
  children: React.ReactNode;
}) => (
  <Grid background={background}>
    <FullWidth>{children}</FullWidth>
  </Grid>
);
