import Link from "next/link";
import { useRouter } from "next/router";
import { FullWidth, Grid } from "../PageGrid";
import classnames from "classnames";
import { RacingStripe } from "../RacingStripe";

const NavListItem = ({ href, children }: any) => {
  const router = useRouter();
  const active = router.pathname.startsWith(href);
  return (
    <li
      className={classnames("page-header-list-item", {
        "page-header-list-item-active": active,
      })}
    >
      <Link href={href}>{children}</Link>
    </li>
  );
};

const NavBar = () => (
  <nav>
    <ul className="page-header-nav">
      <NavListItem href="/blog">Blog</NavListItem>
      <NavListItem href="/projects">Projects</NavListItem>
      <NavListItem href="/photos">Photos</NavListItem>
      <NavListItem href="/read">Read</NavListItem>
      <NavListItem href="/guestbook">Guestbook</NavListItem>
    </ul>
  </nav>
);

const SearchBar = () => <p>search bar</p>;

export const PageHeader = () => {
  const router = useRouter();
  return (
    <>
      <RacingStripe level={60} style={{ position: "fixed", zIndex: 100 }} />
      <Grid background="color" padding="none">
        <FullWidth style={{ paddingTop: "2.5rem" }}>
          {router.pathname !== "/" ? (
            <div className="nameplate">
              <Link href="/">jameslittle.me</Link>
            </div>
          ) : null}
          <NavBar />
        </FullWidth>
      </Grid>
    </>
  );
};
