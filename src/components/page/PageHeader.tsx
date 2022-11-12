import Link from "next/link";
import { useRouter } from "next/router";
import { FullWidth, Grid } from "../grid";
import classnames from "classnames";

const NavListItem = ({ href, children }: any) => {
  const router = useRouter();
  const active = router.pathname === href;
  return (
    <li className={classnames("page-header-list-item", { "page-header-list-item-active": active })}>
      <Link href={href}>{children}</Link>
    </li>
  );
};

export const PageHeader = () => {
  const router = useRouter();
  return (
    <>
      <div
        className="racing-stripe"
        style={{
          backgroundColor: "hsla(var(--theme-hue), 41%, 21%)",
          height: "1em"
        }}
      />
      <Grid background="color" noPadding={true}>
        <FullWidth style={{ paddingTop: "2.5rem" }}>
          {router.pathname !== "/" ? (
            <div className="nameplate">
              <Link href="/">jameslittle.me</Link>
            </div>
          ) : null}
          <nav>
            <ul className="page-header-nav">
              <NavListItem href="/blog">Blog</NavListItem>
              <NavListItem href="/projects">Projects</NavListItem>
              <NavListItem href="/projects">Photos</NavListItem>
              <NavListItem href="/projects">Talks</NavListItem>
              <li>•</li>
              <NavListItem href="/projects">Now</NavListItem>
              <NavListItem href="/projects">Uses</NavListItem>
              <NavListItem href="/projects">Read</NavListItem>
              <li>•</li>
              <NavListItem href="/projects">Guestbook</NavListItem>
            </ul>
          </nav>
        </FullWidth>
      </Grid>
    </>
  );
};
