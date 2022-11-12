import Markdoc from "@markdoc/markdoc";
import React from "react";
import { Grid, Left, Right, Subgrid } from "../src/components/grid";
import { PageFooter } from "../src/components/page/PageFooter";
import { PageHeader } from "../src/components/page/PageHeader";
import { PageTitle } from "../src/components/page/PageTitle";

export const BlogPostLayout = ({ title, markdoc }: { markdoc: any; title: string }) => {
  const content = Markdoc.renderers.react(markdoc, React);

  return (
    <>
      <PageHeader />
      <PageTitle title={title} topSpace={true} />

      <Grid>
        <Subgrid weight={"right"}>
          <Left style={{ alignSelf: "end" }}>
            <div className="blog-post-aside">
              <p>
                I'm James Little, a software engineer and design enthusiast based in Boston, MA. I
                work at Stripe, on Stripe Terminal, and I build a search web tool called Stork
                Search.
              </p>
            </div>
          </Left>
          <Right>{content}</Right>
        </Subgrid>
      </Grid>

      <PageFooter />
    </>
  );
};
