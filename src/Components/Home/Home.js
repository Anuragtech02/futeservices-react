import React, { useEffect, useRef, useState } from "react";
import style from "./Home.module.css";
import cat5 from "../../Assets/projects/cat5.webp";
import MultipleSlider from "../MultipleSlider/MultipleSlider";

import bgHome from "../../Assets/video/fute-home.mp4";
import { withRouter } from "react-router";
import HomeSlider from "../HomeSlider/HomeSlider";
import TeamSlider from "../TeamSlider/TeamSlider";
import CategoriesSlider from "../CategoriesSlider/CategoriesSlider";
import Counters from "../Counters/Counters";
import ScrollTrigger from "react-scroll-trigger";
import { Grid } from "@material-ui/core";
import MetaTags from "../MetaTags/MetaTags";
import Loading from "../Loading/Loading";
import videoPoster from "../../Assets/video-poster.jpg";

export const Home = ({ history }) => {
  const [enableCounter, setEnableCounter] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (loading) {
      document.getElementById("root").style.overflowY = "hidden";
    } else {
      document.getElementById("root").style.overflowY = "auto";
    }
  }, [loading]);

  return (
    <div id="container" className={style.container}>
      <Loading loading={loading} />
      <MetaTags title="Home" type="other" />
      <section className={style.largeVideoBg}>
        <video
          onLoadedData={() => setLoading(false)}
          muted
          autoPlay
          loop={true}
          poster={videoPoster}
          playsInline
        >
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
      {/* <LazyLoadComponent> */}
      <CategoriesSlider history={history} autoPlay={true} />
      {/* </LazyLoadComponent> */}
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
