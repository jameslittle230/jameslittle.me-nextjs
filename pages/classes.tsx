import Link from "next/link";
import { PageLayout } from "../layouts/PageLayout";
import { FullWidth, Grid } from "../src/components/grid";

export default function Pages() {
  return (
    <PageLayout title="All Pages">
      <Grid>
        <FullWidth>
          <article>
            <h2>Fall 2015</h2>

            <ul>
              <li>After Kafka</li>
              <li>Data Structures</li>
              <li>Introduction to Art History</li>
              <li>Principles of Microeconomics</li>
            </ul>

            <h2>Spring 2016</h2>

            <ul>
              <li>Algorithms</li>
              <li>Intro to the Study of Religion</li>
              <li>Introduction to Systems</li>
              <li>The Great American Novel</li>
            </ul>

            <h2>Fall 2016</h2>

            <ul>
              <li>Introductory Physics I</li>
              <li>Mobile Computing</li>
              <li>Robotics</li>
              <li>Russia&apos;s Twentieth Century</li>
            </ul>

            <h2>Spring 2017</h2>

            <ul>
              <li>Illuminated Manuscripts</li>
              <li>Intro to Comparative Government</li>
              <li>Advanced Integral Calculus</li>
              <li>
                <em>Robotic Behavior Independent Study</em>
              </li>
            </ul>

            <h2>Fall 2017</h2>

            <ul>
              <li>Art of the Italian Renaissance</li>
              <li>Bad Teachers and Dangerous Minds</li>
              <li>GIS Algorithms and Data Structures</li>
              <li>Principles of Programming Languages</li>
            </ul>

            <h2>Spring 2018 (Budapest)</h2>

            <ul>
              <li>Applied Cryptography</li>
              <li>Computer Vision: Applications in Digital Cinema</li>
              <li>Computer Graphics and Image Processing</li>
              <li>Scalable Systems and Development Processes</li>
              <li>Data Mining</li>
              <li>Budapest Studies</li>
            </ul>

            <h2>Fall 2018</h2>

            <ul>
              <li>Computer Networks</li>
              <li>Modern Architecture 1750-2000</li>
              <li>Modernism/Modernity</li>
            </ul>

            <h2>Spring 2019</h2>

            <ul>
              <li>Distributed Systems</li>
              <li>Premodern Gender, Sex, and Race</li>
              <li>Watergate and American Politics</li>
            </ul>
          </article>
        </FullWidth>
      </Grid>
    </PageLayout>
  );
}
