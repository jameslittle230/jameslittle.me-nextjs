import Link from "next/link";
import { PageLayout } from "../layouts/PageLayout";
import { FullWidth, Grid } from "../src/components/PageGrid";

export default function Pages() {
  return (
    <PageLayout title="All Pages">
      <Grid>
        <FullWidth>
          <article>
            <ul>
              <li>
                <Link href="/blog">/blog</Link>
              </li>
              <li>
                <Link href="/projects">/projects</Link>
              </li>
              <li>
                <Link href="/photos">/photos</Link>
              </li>
              <li>
                <Link href="/talks">/talks</Link>
              </li>
              <li>
                <Link href="/read">/read</Link>
              </li>
              <li>
                <Link href="/guestbook">/guestbook</Link>
              </li>
              <li>
                <Link href="/classes">/classes</Link>
              </li>
              <li>
                <Link href="/timeline">/timeline</Link>
              </li>
              <li>
                <Link href="/feed.xml">/feed.xml</Link>
              </li>
              <li>
                <Link href="/404">/404</Link>
              </li>
            </ul>
          </article>
        </FullWidth>
      </Grid>
    </PageLayout>
  );
}
