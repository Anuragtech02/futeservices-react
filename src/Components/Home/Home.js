import React, { useRef, useEffect } from "react";
import style from "./Home.module.css";
import { motion } from "framer-motion";
import introImage from "../../Assets/pexels-daniel-absi-952670.jpg";
import introImage2 from "../../Assets/pexels-caleb-oquendo-2918590.jpg";
import bgImage2 from "../../Assets/josh-rose-trYl7JYATH0-unsplash.jpg";
import { introData, teamData, timelineData, timeline } from "../../Static";
import { Carousel, HrSlider, Testimonial } from "../index";
import Slider from "react-slick";
import CustomStepper from "../CustomStepper/CustomStepper";
import MultipleSlider from "../MultipleSlider/MultipleSlider";
import img1 from "../../Assets/1.png";
import portrait1 from "../../Assets/portrait1.png";
import portrait2 from "../../Assets/portrait2.png";
import displacement from "../../Assets/displacement.png";
import { Parallax, Background } from "react-parallax";
import bg1 from "../../Assets/pexels-artem-beliaikin-1319795.jpg";
import bg2 from "../../Assets/pexels-bich-tran-669996.jpg";
import bg3 from "../../Assets/pexels-caleb-oquendo-2918590.jpg";
import bg4 from "../../Assets/pexels-debasish-sahoo-140221.jpg";
import classNames from "classnames";
import hoverEffect from "hover-effect";
import BgVideo from "../../Assets/video/fute-video-bg.mp4";

export const Home = () => {
  const cursor = useRef(null);

  useEffect(() => {
    const mouseCursor = document.getElementById("cursor");
    const img = distortion.current;
    img.addEventListener("mouseover", () => {
      mouseCursor.style.transition = "0.15s ease-out";
      mouseCursor.style.height = "4rem";
      mouseCursor.style.width = "4rem";
      mouseCursor.style.backgroundColor = "transparent";
      mouseCursor.style.backdropFilter = "blur";
    });
    img.addEventListener("mouseleave", () => {
      mouseCursor.style.transition = "0.12s ease-out";
      mouseCursor.style.transitionProperty =
        "width, height, opacity, background";
      mouseCursor.style.height = "2rem";
      mouseCursor.style.width = "2rem";
      mouseCursor.style.backgroundColor = "transparent";
    });
  }, []);

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
      {/* <div id="cursor" className={style.customCursor}></div> */}
      {/* <Carousel className={style.carousel} /> */}
      <section className={style.largeVideoBg}>
        <video autoPlay loop>
          <source src={BgVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className={style.heading}>
          <h1>
            We bring visionary places,
            <br /> spaces and ideas to life.
          </h1>
        </div>
      </section>
      <section
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
      </section>

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
      <CategoriesGallery />
      <section
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
      </section>
      <div className={classNames(style.flexRow, style.about)}>
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: showAction ? 0 : -30, opacity: showAction ? 1 : 0 }}
          transition={{
            type: "tween",
            duration: 0.5,
          }}
          className={style.title}
        >
          <h1>Michael Brown</h1>
          <p>Co-Founder and head of the company.</p>
        </motion.div>
        {/* <img id="img" alt="portrait" src={portrait1} /> */}
        <motion.div ref={distortion} className={style.distortion}></motion.div>
        <motion.div
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: showAction ? 0 : 30, opacity: showAction ? 1 : 0 }}
          transition={{
            type: "tween",
            duration: 0.5,
          }}
          className={classNames(style.title, style.otherName)}
        >
          <h1>Michael Brown</h1>
          <p>New Delhi, India</p>
        </motion.div>
      </div>
      <div style={{ background: "white" }}>
        <MultipleSlider />
      </div>
    </div>
  );
};
export default Home;

const CategoriesGallery = () => {
  const data = [
    {
      title: "Residential",
      image: bg1,
    },
    {
      title: "Interiar Visualisation",
      image: bg2,
    },
    {
      title: "Exterior Visualisation",
      image: bg3,
    },
    {
      title: "Productt Visualisation",
      image: bg4,
    },
    {
      title: "Animation Visualisation",
      image: bg1,
    },
  ];
  return (
    <div className={style.categoriesContainer}>
      {data.map((item) => (
        <div
          style={{ backgroundImage: `url(${item.image})` }}
          className={style.categoryCard}
        >
          <div className={style.categoryCardTitle}>
            <h2>{item.title}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};
