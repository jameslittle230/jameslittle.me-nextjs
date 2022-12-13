import Link from "next/link";
import { useRouter } from "next/router";
import { FullWidth, Grid, Gutter } from "../grid";
import Search from "../../icons/search.svg";
import classnames from "classnames";
import { Icon } from "../icon";
import { useState } from "react";
import Head from "next/head";
import { useTheme } from "../Theme";
import { RacingStripe } from "../RacingStripe";

const NavListItem = ({ href, children }: any) => {
  const router = useRouter();
  const active = router.pathname === href;
  return (
    <li className={classnames("page-header-list-item", { "page-header-list-item-active": active })}>
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
      <NavListItem href="/talks">Talks</NavListItem>
      <li>•</li>
      <NavListItem href="/now">Now</NavListItem>
      <NavListItem href="/uses">Uses</NavListItem>
      <NavListItem href="/read">Read</NavListItem>
      <li>•</li>
      <NavListItem href="/guestbook">Guestbook</NavListItem>
    </ul>
  </nav>
);

const SearchBar = () => <p>search bar</p>;

export const PageHeader = () => {
  const router = useRouter();
  const [searchVisible, setSearchVisible] = useState(false);
  return (
    <>
      <RacingStripe level={60} />
      <Grid background="color" padding="none">
        <Gutter side="left" style={{ display: "flex", flexDirection: "column-reverse" }}>
          {/* <button
            onClick={() => {
              setSearchVisible(!searchVisible);
            }}
          >
            <Icon style={{ fill: "white", opacity: "0.4" }}>
              <Search />
            </Icon>
          </button> */}
        </Gutter>
        <FullWidth style={{ paddingTop: "2.5rem" }}>
          {router.pathname !== "/" ? (
            <div className="nameplate">
              <Link href="/">jameslittle.me</Link>
            </div>
          ) : null}
          {searchVisible ? <SearchBar /> : <NavBar />}
        </FullWidth>
      </Grid>
    </>
  );
};
