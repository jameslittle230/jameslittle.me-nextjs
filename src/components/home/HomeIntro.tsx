import Image from "next/image";
import { Grid, Subgrid, Left, Right } from "../Grid";
import { RacingStripe } from "../RacingStripe";
export const HomeIntro = () => (
  <>
    <Grid background="color" style={{ paddingTop: "3rem" }}>
      <Subgrid weight="center">
        <Left style={{ fontSize: "1.3em" }}>
          <p>I&apos;m a software engineer and design enthusiast.</p>
          <p>
            I&apos;m interested in how people interact with technology. I want
            to make software that makes the digital world friendly and
            intuitive.
          </p>
        </Left>
        <Right className="home-intro-right-col">
          <Image
            src="https://files.jameslittle.me/images/headshot.jpg"
            width="400"
            height="600"
            alt="my dumb mug"
            priority
            className="home-intro-image"
          ></Image>
        </Right>
      </Subgrid>
    </Grid>
    <RacingStripe level={40} />
    <RacingStripe level={20} />
    <Grid>
      <Subgrid weight="center">
        <Left style={{ fontSize: "1.1em" }}>
          <p>
            I work at <a href="https://stripe.com">Stripe</a> on the{" "}
            <a href="https://stripe.com/docs">Docs Product</a> team, where I do
            web platform engineering and web design.
          </p>
          <p>
            I started at Stripe after graduating from{" "}
            <a href="https://bowdoin.edu">Bowdoin College</a> in Brunswick,
            Maine, where I majored in Computer Science, built a website for the{" "}
            <a href="https://bowdoinorient.com/">student newspaper</a>, and{" "}
            <a href="https://www.youtube.com/watch?v=r7XT98HchBs">
              made robots play soccer
            </a>
            .
          </p>
          <p>Today, I live in Cambridge, Massachusetts.</p>
        </Left>
      </Subgrid>
    </Grid>
    <div style={{ clear: "both" }}></div>
  </>
);
