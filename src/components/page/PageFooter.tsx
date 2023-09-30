import React from "react";
import { FullWidth, Grid, Left, Right, Subgrid } from "../Grid";
import { RacingStripe } from "../RacingStripe";

export const PageFooter = () => {
  const links = [
    [
      {
        href: "https://mastodon.social/@jil",
        rel: "me",
        name: "Mastodon",
      },
      {
        href: "https://instagram.com/jameslittle230",
        name: "Instagram",
      },
      {
        href: "https://github.com/jameslittle230",
        name: "GitHub",
      },
      {
        href: "https://www.linkedin.com/in/james-little-230/",
        name: "LinkedIn",
      },
      {
        href: "https://twitch.tv/jameslittle230",
        name: "Twitch",
      },
    ],
    [
      {
        href: "https://files.jameslittle.me/resume/JamesLittleFall2018.pdf",
        name: "Résumé (PDF)",
      },
      {
        href: "/pages",
        name: "Site Map",
      },
      {
        href: "/feed.xml",
        name: "RSS Feed",
      },
    ],
  ];

  return (
    <div className="footer reverse-text-color" style={{ marginTop: "3rem" }}>
      <RacingStripe level={30} />
      <RacingStripe level={50} />
      <Grid background="dark-color">
        <FullWidth style={{ padding: "3rem 0" }}>
          <Subgrid weight="left" className="footer-top-content">
            <Left>
              <p>I&apos;d love to chat with you.</p>
              <p>
                Send me an email—hello@jameslittle.me—or find me elsewhere on
                the internet below.
              </p>
            </Left>
          </Subgrid>
          <Subgrid weight="center" className="footer-bottom-content">
            <Left>
              {links
                .map((set) =>
                  set
                    .map((link) => (
                      <a href={link.href} rel={link.rel} key={link.href}>
                        {link.name}
                      </a>
                    ))
                    // @ts-expect-error
                    .reduce((acc, curr) => [acc, ", ", curr])
                )
                // @ts-expect-error
                .reduce((acc, curr) => [acc, <br key={0} />, curr])}
            </Left>
            <Right className="footer-colophon">
              Made in Brunswick, SF, and Cambridge
              <br />
              between 2016 and {new Date().getFullYear()}.
            </Right>
          </Subgrid>
        </FullWidth>
      </Grid>
    </div>
  );
};
