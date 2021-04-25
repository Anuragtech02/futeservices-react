import React, { useEffect, useRef, useState } from "react";
import style from "./Home.module.css";
import cat1 from "../../Assets/projects/cat1.webp";
import cat2 from "../../Assets/projects/cat2.webp";
import cat4 from "../../Assets/projects/cat4.webp";
import cat5 from "../../Assets/projects/cat5.webp";
import MultipleSlider from "../MultipleSlider/MultipleSlider";

import BgVideo from "../../Assets/video/fute-video-bg.webm";
import bgVideo from "../../Assets/video/fute-video.mp4";
import bgHome from "../../Assets/video/fute-home.mp4";
import { withRouter } from "react-router";
import HomeSlider from "../HomeSlider/HomeSlider";
import TeamSlider from "../TeamSlider/TeamSlider";
import CategoriesSlider from "../CategoriesSlider/CategoriesSlider";
import CompareSlider from "../CompareSlider/CompareSlider";
import Counters from "../Counters/Counters";
import ScrollTrigger from "react-scroll-trigger";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Grid, IconButton } from "@material-ui/core";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

export const Home = ({ history }) => {
  const [enableCounter, setEnableCounter] = useState(false);
  const [enableAutoPlay, setEnableAutoPlay] = useState(false);

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
          content={"https://tech.feedbox.co.in/logo.png"}
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
      </Helmet>
      <section className={style.largeVideoBg}>
        <video muted autoPlay loop={true}>
          <source src={bgHome} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className={style.heading}>
          {/* <h1>We bring visionary places, spaces and ideas to life.</h1> */}
        </div>
      </section>
      <section className={style.homeSliderContainer}>
        <HomeSlider />
        <div className={style.aboutContainer}>
          <Grid container spacing={4}>
            <Grid item xl={6} lg={6} md={12} sm={12} xs={12}>
              <div className={style.aboutLeft}>
                <h1>
                  We create your dream <br /> <span> visualisation</span>
                </h1>
                <p>
                  Ever since our inception, Fute Services has been proactive in
                  delivering a mesmerizingly cinematic experience to our
                  audiences, creating breathtaking architectural imagery
                  perfected to the minutest of details. This philosophy helps us
                  not just enhance the viewing experience but engross audiences
                  while they actually feel physically present at the location
                  themselves.
                </p>
                <p>
                  Our customized solutions approach ensures your project is the
                  star of the show. We listen to your specific needs, your
                  precise requirements, and your idea behind the
                  conceptualization of your dream project. There onwards we
                  masterfully use the technology and creative power in our hands
                  to create and develop a show-stopping solutions for your
                  brand, catering to and designed to your specific requirements
                  and mimicking your dream in the most fascinating way possible.
                </p>
              </div>
            </Grid>
            <Grid item lg={6} md={12} sm={12} xs={12}>
              <div className={style.aboutRight}>
                <img src={cat5} alt="fute-services" />
                {/* <CompareSlider /> */}
              </div>
            </Grid>
          </Grid>
        </div>
      </section>

      <ScrollTrigger onEnter={() => setEnableAutoPlay(true)}>
        <CategoriesSlider history={history} autoPlay={enableAutoPlay} />
      </ScrollTrigger>
      <ScrollTrigger onEnter={() => setEnableCounter(true)}>
        <div className={style.countersContainer}>
          <Counters start={enableCounter} />
        </div>
      </ScrollTrigger>
      <section className={style.teamSlide}>
        <div className={style.teamHeading}>
          <h1 className={style.fadeTeamText}>team</h1>
          <h1>
            Our <span> Team</span>
          </h1>
        </div>
        <TeamSlider />
      </section>
      <section className={style.clients} style={{ background: "white" }}>
        <div className={style.experience}>
          <div className={style.textParallax}>
            <div className={style.parallaxContent}>12</div>
          </div>
          <h3>
            <span>Years of successfull work</span>
            <br /> in the market
          </h3>
        </div>
        <h2 className={style.fadeTitle}>clients</h2>
        <div className={style.clientsContainer}>
          <h3>
            Our <span> Clients</span>
          </h3>
        </div>
        <MultipleSlider />
      </section>
    </div>
  );
};
export default withRouter(Home);

const CategoriesGallery = ({ history }) => {
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
    {
      title: "Photomontage",
      image: cat5,
    },
  ];

  const settings = {
    fade: true,
    className: "center",
    infinite: true,
    // centerPadding: "60px",
    // accessibility: true,
    // lazyload: true,
    slidesToShow: 2,
    swipeToSlide: true,
    dots: false,
    autoplay: true,
    // autoplaySpeed: 5000,
    speed: 2000,
    ease: "ease-in",
  };

  const slider = useRef(null);

  const gotoPrev = () => {
    slider.current.slickPrev();
  };

  const gotoNext = () => {
    slider.current.slickNext();
  };

  return (
    <div id="portfolio" className={style.categoriesContainer}>
      <IconButton onClick={() => gotoPrev()} className={style.arrowLeft}>
        <ArrowBackIosIcon fontSize="large" />
      </IconButton>

      <Slider ref={slider} {...settings} className={style.slider}>
        {data.map((item) => (
          <>
            <div
              style={{ width: "50px", height: "50px", background: "red" }}
            ></div>
            {/* <div className={style.cardParent}>
            <img src={item.image} alt={item.title} />
            <div
              // style={{ backgroundImage: `url(${item.image})` }}
              className={style.categoryCard}
              onClick={() => history.push(`/portfolio/${item.title}`)}
            >
              <Link to={`/portfolio/${item.title}`} />
              <div className={style.categoryCardTitle}>
                <h2>Project - {item.title}</h2>
                <div className={style.categoryCardCat}>
                  <p>{item.title}</p>
                </div>
              </div>
            </div>
          </div> */}
          </>
        ))}
      </Slider>
      <IconButton onClick={() => gotoNext()} className={style.arrowRight}>
        <ArrowForwardIosIcon fontSize="large" />
      </IconButton>
      {/* <Grid container spacing={0}>
        {data.map((item) => (
          <Grid item xl={3} lg={3} md={4} sm={6} xs={12}>
            <div className={style.cardParent}>
              <img src={item.image} alt={item.title} />
              <div
                // style={{ backgroundImage: `url(${item.image})` }}
                className={style.categoryCard}
                onClick={() => history.push(`/portfolio/${item.title}`)}
              >
                <Link to={`/portfolio/${item.title}`} />
                <div className={style.categoryCardTitle}>
                  <h2>Project - {item.title}</h2>
                  <div className={style.categoryCardCat}>
                    <p>{item.title}</p>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
        ))}
      </Grid> */}
    </div>
  );
};
