import React from "react";
import { FullWidth, Grid, Left, Right, Subgrid } from "../grid";
import { RacingStripe } from "../RacingStripe";

export const PageFooter = () => (
  <div className="footer reverse-text-color" style={{ marginTop: "3rem" }}>
    <RacingStripe level={30} />
    <RacingStripe level={50} />
    <Grid background="dark-color">
      <FullWidth style={{ padding: "3rem 0" }}>
        <Subgrid weight="left" className="footer-top-content">
          <Left>
            <p>I&apos;d love to chat with you.</p>
            <p>Send me an email—hello@jameslittle.me—or find me elsewhere on the internet below.</p>
          </Left>
        </Subgrid>
        <Subgrid weight="center" className="footer-bottom-content">
          <Left>
            <a rel="me" href="https://mastodon.social/@jil">
              Mastodon
            </a>
            ,<a href="https://instagram.com/jameslittle230">Instagram</a>,
            <a href="https://github.com/jameslittle230">Github</a>,
            <a href="https://www.linkedin.com/in/james-little-230/">LinkedIn</a>,
            <a href="https://twitch.tv/jameslittle230">Twitch</a>
            <br />
            <a href="https://mastodon.social/@jil">Résumé</a>,
            <a href="https://instagram.com/jameslittle230">RSS feed</a>
          </Left>
          <Right className="footer-colophon">
            Made in Brunswick, SF, and Cambridge
            <br />
            between 2016 and 2022.
          </Right>
        </Subgrid>
      </FullWidth>
    </Grid>
  </div>
);
