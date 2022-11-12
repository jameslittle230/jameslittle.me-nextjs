import { Background, FullWidth, Grid } from "../grid";

export const Section = ({
  background,
  title,
  children
}: {
  background?: Background;
  title: string;
  children: React.ReactNode;
}) => (
  <Grid background={background}>
    <FullWidth>{children}</FullWidth>
  </Grid>
);
