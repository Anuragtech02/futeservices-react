import React, { useEffect, useState, useRef } from "react";
import style from "./Home.module.css";
import cat1 from "../../Assets/projects/cat1.webp";
import cat2 from "../../Assets/projects/cat2.webp";
import cat4 from "../../Assets/projects/cat4.webp";
import MultipleSlider from "../MultipleSlider/MultipleSlider";

import BgVideo from "../../Assets/video/fute-video-bg.webm";
import { withRouter } from "react-router";
import HomeSlider from "../HomeSlider/HomeSlider";
import TeamSlider from "../TeamSlider/TeamSlider";
import Counters from "../Counters/Counters";
import ScrollTrigger from "react-scroll-trigger";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

export const Home = ({ history }) => {
  const [enableCounter, setEnableCounter] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="container" className={style.container}>
      <Helmet>
        <title>Home | FuteServices</title>
        <meta
          name="description"
          content="Ever since our inception, Fute Services has been proactive in delivering a
            mesmerizingly cinematic experience to our audiences, creating breathtaking
            architectural imagery perfected to the minutest of details. This philosophy helps us not
            just enhance the viewing experience but engross audiences while they actually feel
            physically present at the location themselves."
        />
        <meta name="name" content="FuteServices" />
        <meta property="og:title" content="Home | FuteServices" />
        <meta
          property="og:description"
          content="Ever since our inception, Fute Services has been proactive in delivering a
            mesmerizingly cinematic experience to our audiences, creating breathtaking
            architectural imagery perfected to the minutest of details. This philosophy helps us not
            just enhance the viewing experience but engross audiences while they actually feel
            physically present at the location themselves."
        />
        <meta
          property="og:image"
          content={window.location.href + "/logo.png"}
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
      </Helmet>
      <section className={style.largeVideoBg}>
        <video muted autoPlay loop={true}>
          <source src={BgVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className={style.heading}>
          {/* <h1>We bring visionary places, spaces and ideas to life.</h1> */}
        </div>
      </section>
      <section className={style.homeSliderContainer}>
        <HomeSlider />
        <div className={style.aboutContainer}>
          <p>
            Ever since our inception, Fute Services has been proactive in
            delivering a mesmerizingly cinematic experience to our audiences,
            creating breathtaking architectural imagery perfected to the
            minutest of details. This philosophy helps us not just enhance the
            viewing experience but engross audiences while they actually feel
            physically present at the location themselves.
          </p>
          <p>
            Our customized solutions approach ensures your project is the star
            of the show. We listen to your specific needs, your precise
            requirements, and your idea behind the conceptualization of your
            dream project. There onwards we masterfully use the technology and
            creative power in our hands to create and develop a show-stopping
            solutions for your brand, catering to and designed to your specific
            requirements and mimicking your dream in the most fascinating way
            possible.
          </p>
        </div>
      </section>
      <CategoriesGallery history={history} />
      <ScrollTrigger onEnter={() => setEnableCounter(true)}>
        <div className={style.countersContainer}>
          <Counters start={enableCounter} />
        </div>
      </ScrollTrigger>
      <TeamSlider />
      <div style={{ background: "white" }}>
        <MultipleSlider />
      </div>
    </div>
  );
};
export default withRouter(Home);

const CategoriesGallery = ({ history }) => {
  const aLink = useRef(null);

  const data = [
    {
      title: "Residential",
      image: cat1,
    },
    {
      title: "Product",
      image: cat2,
    },
    // {
    //   title: "Animation",
    //   image: cat3,
    // },
    {
      title: "VR",
      image: cat4,
    },
    // {
    //   title: "Photomontage",
    //   image: cat5,
    // },
  ];
  return (
    <div id="portfolio" className={style.categoriesContainer}>
      {data.map((item) => (
        <div
          style={{ backgroundImage: `url(${item.image})` }}
          className={style.categoryCard}
          onClick={() => aLink.current.click()}
        >
          <Link ref={aLink} to={`/portfolio/${item.title}`} />
          <div className={style.categoryCardTitle}>
            <h2>{item.title}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};
