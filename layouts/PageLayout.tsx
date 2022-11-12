import React from "react";
import { PageFooter } from "../src/components/page/PageFooter";
import { PageHeader } from "../src/components/page/PageHeader";
import { PageTitle } from "../src/components/page/PageTitle";

export const PageLayout = ({ title, children }: { children: any; title: string }) => {
  return (
    <>
      <PageHeader />
      <PageTitle title={title} topSpace={false} />

      {children}

      <PageFooter />
    </>
  );
};
