import React from "react";
import styles from "./About.module.css";
import backImg from "../../Assets/about-bg.jpg";
import Banner from "../Banner/Banner";

const About = () => {
  return (
    <div className={styles.container}>
      {/* <div
        style={{ backgroundImage: `url(${backImg})` }}
        className={styles.bgImage}
      >
        <h1>About Us</h1>
      </div> */}
      <Banner image={backImg} title="About Us" />
      <section className={styles.about}>
        <h2>
          we turn ideas into works of art <span>.</span>
        </h2>
        <p>
          For each project we establish relationships with partners who we know
          will help us create added value for your project. As well as bringing
          together the public and private sectors, we make sector-overarching
          links to gather knowledge and to learn from each other. The way we
          undertake projects is based on permanently applying values that
          reinforce each other: socio-cultural value, experiental value,
          building-technical value and economical value. This way of working
          allows us to raise your project to a higher level.
        </p>
      </section>
      <section className={styles.vision}>
        <h1 className={styles.fadeText}>vision</h1>
        <h3>
          Our <span>Vision</span>
        </h3>
        <p>
          Our vision is to provide one-of-a-kind Turnkey Solutions for all your
          marketing needs, customizable to your specific requirements. We strive
          to be the best solutions- oriented company that is renowned for
          providing the most relevant solutions for all your precise and unique
          needs.
        </p>
      </section>
      <section className={styles.mission}>
        <h1 className={styles.fadeText}>mission</h1>
        <h3>
          Our <span>Mission</span>
        </h3>
        <p>
          Our mission is to evolve into the greatest architectural visualization
          company that redefines brilliance with its ultra modern approach to
          photorealism and bringing the touch of perfection to every project
          that we undertake.
        </p>
      </section>
    </div>
  );
};

export default About;
