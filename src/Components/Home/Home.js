import React, { useRef, useEffect, useState } from "react";
import style from "./Home.module.css";
import cat1 from "../../Assets/projects/category1.webp";
import cat2 from "../../Assets/projects/category2.webp";
import cat3 from "../../Assets/projects/category3.webp";
import cat4 from "../../Assets/projects/category4.webp";
import cat5 from "../../Assets/projects/category5.webp";
import MultipleSlider from "../MultipleSlider/MultipleSlider";
import portrait1 from "../../Assets/portrait1.png";
import portrait2 from "../../Assets/portrait2.png";
import displacement from "../../Assets/displacement.png";
import hoverEffect from "hover-effect";
import BgVideo from "../../Assets/video/fute-video-bg.webm";
import { withRouter } from "react-router";
import HomeSlider from "../HomeSlider/HomeSlider";
// import member2 from "../../Assets/team/member2.png";
import TeamSlider from "../TeamSlider/TeamSlider";
import Counters from "../Counters/Counters";

export const Home = ({ history }) => {
  const cursor = useRef(null);
  const [enableCounter, setEnableCounter] = useState(false);

  // useEffect(() => {
  //   const mouseCursor = document.getElementById("cursor");
  //   const img = distortion.current;
  //   img.addEventListener("mouseover", () => {
  //     mouseCursor.style.transition = "0.15s ease-out";
  //     mouseCursor.style.height = "4rem";
  //     mouseCursor.style.width = "4rem";
  //     mouseCursor.style.backgroundColor = "transparent";
  //     mouseCursor.style.backdropFilter = "blur";
  //   });
  //   img.addEventListener("mouseleave", () => {
  //     mouseCursor.style.transition = "0.12s ease-out";
  //     mouseCursor.style.transitionProperty =
  //       "width, height, opacity, background";
  //     mouseCursor.style.height = "2rem";
  //     mouseCursor.style.width = "2rem";
  //     mouseCursor.style.backgroundColor = "transparent";
  //   });
  // }, []);

  const distortion = useRef();

  useEffect(() => {
    const imageDistortion = new hoverEffect({
      parent: distortion.current,
      intensity: 0.3,
      image1: portrait2,
      image2: portrait1,
      angle2: Math.PI / 2,
      displacementImage: displacement,
      // imagesRatio: 9 / 16,
    });
    // imageDistortion();
    window.scrollTo(0, 0);
  }, []);

  const [showAction, setShowAction] = React.useState(false);
  const [lastY, setLastY] = React.useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const yPos = window.scrollY;
      const isScrollingDown = lastY < yPos;

      setShowAction(isScrollingDown);
      setLastY(yPos);
    };
    window.addEventListener("scroll", handleScroll, false);
    return () => window.removeEventListener("scroll", handleScroll, false);
  }, [lastY]);

  return (
    <div id="container" className={style.container}>
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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel minima
            mollitia ratione nisi vero doloremque deserunt voluptatum saepe
            porro assumenda voluptate laudantium expedita doloribus qui, neque
            exercitationem, obcaecati totam necessitatibus!, neque
            exercitationem, obcaecati totam necessitatibus!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel minima
            mollitia ratione nisi vero doloremque deserunt voluptatum saepe
            porro assumenda voluptate laudantium expedita doloribus qui, neque
            exercitationem, obcaecati totam necessitatibus!, neque
            exercitationem, obcaecati totam necessitatibus!
          </p>
        </div>
      </section>
      {/* <section
        className={style.section}
        style={{ backgroundImage: `url(${introImage})` }}
      >
        <div className={style.intro}>
          <div className={style.alignLeft}>
            <img width="50%" src={introImage2} alt="" />
          </div>
          <div className={style.alignRight}>
            <motion.h6 className={style.heading}>{introData.heading}</motion.h6>
            <motion.p className={style.para}>{introData.para}</motion.p>
            <motion.button
              style={{ opacity: 1, marginTop: 30 }}
              className={style.btnLight}
            >
              {introData.buttonTxt}
            </motion.button>
          </div>
        </div>
      </section> */}

      {/* <section className={style.section} style={{ backgroundColor: "#111" }}>
        <HrSlider className={style.hrSlider} />
      </section> */}
      {/* <div className={style.Parallax}>
        <Parallax bgImage={bg1} strength={200}>
          <div style={{ height: "100vh", width: "100%" }}>
            <div className={style.insideStyles}>
              Lorem ipsum dolor sit amet, consectetur adipiscing .
            </div>
          </div>
        </Parallax>
        <Parallax bgImage={bg2} strength={200}>
          <div style={{ height: "100vh", width: "100%" }}>
            <div className={style.insideStyles}>
              Lorem ipsum dolor sit amet, consectetur adipiscing.
            </div>
          </div>
        </Parallax>
        <Parallax bgImage={bg3} strength={200}>
          <div style={{ height: "100vh", width: "100%" }}>
            <div className={style.insideStyles}>
              Lorem ipsum dolor sit amet, consectetur adipiscing.
            </div>
          </div>
        </Parallax>
        <Parallax bgImage={bg4} strength={200}>
          <div style={{ height: "100vh", width: "100%" }}>
            <div className={style.insideStyles}>
              Lorem ipsum dolor sit amet, consectetur adipiscing.
            </div>
          </div>
        </Parallax>
      </div> */}
      <CategoriesGallery history={history} />
      {/* <section
        className={style.thirdSection}
        style={{ backgroundImage: `url(${bgImage2})` }}
      >
        <section
          className={style.section}
          style={{ backgroundColor: "rgba(0, 0, 0, 0.93" }}
        >
          <div className={style.team}>
            <div className={style.alignTop}>
              <motion.h6 className={style.heading}>
                {teamData.heading}
              </motion.h6>
              <motion.p className={style.para}>{teamData.para}</motion.p>
            </div>
            <div className={style.alignBottom}>
              {teamData.imgData.map((imgData, index) => {
                return (
                  <motion.div
                    key={index}
                    id={`imgContainer${index}`}
                    className={style.imgContainer}
                  >
                    <motion.img
                      className={style.img}
                      src={imgData.img}
                      alt=""
                    />
                    <motion.h6 className={style.name}>{imgData.name}</motion.h6>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
        <section
          id="test"
          style={{
            width: "100vw",
            height: "50vh",
            backgroundColor: "rgba(0, 0, 0, 0.93",
          }}
        >
          <Testimonial theme="dark" />
        </section>
        <section style={{ backgroundColor: "rgba(0, 0, 0, 0.93" }}>
          <CustomStepper steps={timeline} content={timelineData} theme="dark" />
        </section>
      </section> */}
      <div
        onClick={() => setEnableCounter(true)}
        className={style.countersContainer}
      >
        <Counters start={enableCounter} />
      </div>
      <TeamSlider />
      <div style={{ background: "white" }}>
        <MultipleSlider />
      </div>
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
    {
      title: "Animation",
      image: cat3,
    },
    {
      title: "VR",
      image: cat4,
    },
    {
      title: "Photomontage",
      image: cat5,
    },
  ];
  return (
    <div id="portfolio" className={style.categoriesContainer}>
      {data.map((item) => (
        <div
          style={{ backgroundImage: `url(${item.image})` }}
          className={style.categoryCard}
          onClick={() => history.push(`/portfolio/${item.title}`)}
        >
          <div className={style.categoryCardTitle}>
            <h2>{item.title}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};
