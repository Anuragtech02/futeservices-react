import React, { useState, useRef } from "react";
import Slider from "react-slick";
import styles from "./TeamSlider.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { teamData } from "../../Static/AboutData";
import { motion } from "framer-motion";
import classNames from "classnames";
import { IconButton } from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

const TeamSlider = () => {
  const [showAction, setShowAction] = useState(true);

  //   React.useEffect(() => {
  //     setTimeout(() => setShowAction(false), 4000);
  //   }, [showAction]);

  const settings = {
    fade: true,
    className: "center",
    infinite: true,
    centerPadding: "60px",
    // accessibility: true,
    // lazyload: true,
    slidesToShow: 1,
    swipeToSlide: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 2000,
    ease: "ease-in",
    beforeChange: (current, next) => setShowAction(false),
    afterChange: (current, next) => setShowAction(true),
  };

  const slider = useRef(null);

  const gotoPrev = () => {
    slider.current.slickPrev();
  };

  const gotoNext = () => {
    slider.current.slickNext();
  };

  return (
    <div className={styles.container}>
      <IconButton onClick={() => gotoPrev()} className={styles.arrowLeft}>
        <ArrowBackIosIcon fontSize="large" />
      </IconButton>

      <Slider ref={slider} {...settings} className={styles.slider}>
        {teamData.map((item) => (
          <div className={classNames(styles.flexRow, styles.about)}>
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: showAction ? 0 : -30, opacity: showAction ? 1 : 0 }}
              transition={{
                // type: "keyframes",
                duration: 0.5,
                ease: [0.49, 1.13, 0.48, 0.74],
              }}
              className={styles.title}
            >
              <h1>{item.name}</h1>
              <p>{item.position}</p>
            </motion.div>
            {/* <img id="img" alt="portrait" src={portrait1} /> */}
            <motion.div className={styles.distortion}>
              {/* <div
                    style={{ backgroundImage: `url(${member2})` }}
                    className={style.bgContainer}
                ></div> */}
              <img src={item.image} alt="fute" />
            </motion.div>
            <motion.div
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: showAction ? 0 : 30, opacity: showAction ? 1 : 0 }}
              transition={{
                // type: "spring",
                duration: 0.5,
                ease: [0.49, 1.13, 0.48, 0.74],
              }}
              className={classNames(styles.title, styles.otherName)}
            >
              {/* <h1>{item.name}</h1> */}
              <p>{item.location}</p>
            </motion.div>
          </div>
        ))}
      </Slider>
      <IconButton onClick={() => gotoNext()} className={styles.arrowRight}>
        <ArrowForwardIosIcon fontSize="large" />
      </IconButton>
    </div>
  );
};

export default TeamSlider;
