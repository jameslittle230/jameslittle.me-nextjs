import Image from "next/image";
import { Grid, Subgrid, Left, Right } from "../grid";
export const HomeIntro = () => (
  <>
    <Grid background="color" style={{ paddingTop: "3rem" }}>
      <Subgrid weight="center">
        <Left style={{ fontSize: "1.3em" }}>
          <p>I'm a software engineer and design enthusiast.</p>
          <p>
            I'm interested in how people interact with technology. I want to make software that
            makes the digital world friendly and intuitive.
          </p>
        </Left>
        <Right
          style={{
            height: 0,
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center"
          }}
        >
          <Image
            src="https://files.jameslittle.me/images/headshot.jpg"
            width="400"
            height="600"
            alt="my dumb mug"
            style={{
              zIndex: 20,
              borderRadius: "12px",
              width: "70%",
              height: "auto",
              marginRight: "2em"
            }}
          ></Image>
        </Right>
      </Subgrid>
    </Grid>
    <div
      className="racing-stripe"
      style={{
        backgroundColor: "hsla(var(--theme-hue), 41%, 41%)"
      }}
    />
    <div
      className="racing-stripe"
      style={{
        backgroundColor: "hsla(var(--theme-hue), 41%, 61%)"
      }}
    />
    <Grid>
      <Subgrid weight="center">
        <Left style={{ fontSize: "1.1em" }}>
          <p>
            I work at Stripe on the Docs team, where I do web platform engineering and web design.
            Previously, I built in-person payment experiences for Stripe Terminal and worked on the
            Stripe Dashboard iOS app.
          </p>
          <p>
            I started at Stripe after graduating from Bowdoin College in Brunswick, Maine, where I
            majored in Computer Science, built a website for the student newspaper, and made robots
            play soccer.
          </p>
          <p>Today, I live in Boston, Massachusetts.</p>
        </Left>
      </Subgrid>
    </Grid>
    <div style={{ clear: "both" }}></div>
  </>
);
