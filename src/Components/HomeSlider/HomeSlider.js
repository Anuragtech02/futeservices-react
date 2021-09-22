import React, { useState, createRef, useContext } from "react";
import styles from "./HomeSlider.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IconButton } from "@material-ui/core";
import classNames from "classnames";
import img1 from "../../Assets/homeSlider/img1.webp";
import img1fallback from "../../Assets/homeSlider/img1.jpg";
import img2 from "../../Assets/homeSlider/img2.webp";
import img2fallback from "../../Assets/homeSlider/img2.jpg";
import img3 from "../../Assets/homeSlider/img3.webp";
import img3fallback from "../../Assets/homeSlider/img3.jpg";
import img4 from "../../Assets/homeSlider/img4.webp";
import img4fallback from "../../Assets/homeSlider/img4.jpg";
import img5 from "../../Assets/homeSlider/img5.webp";
import img5fallback from "../../Assets/homeSlider/img5.jpg";
import img6 from "../../Assets/homeSlider/img6.webp";
import img6fallback from "../../Assets/homeSlider/img6.jpg";
import img8 from "../../Assets/homeSlider/img8.jpg";

import runwalcentral from "../../Assets/homeSlider/img7.webp";
import fallbackrunwalcentral from "../../Assets/homeSlider/img7.jpg";

import embassyTechVillage from "../../Assets/projects/walkthroughNew/1.jpg";

import hilton1 from "../../Assets/projects/commercial/hilton/1.webp";

import hiltonFallback1 from "../../Assets/projects/commercial/hilton/1.jpg";

import logo from "../../Assets/logo.png";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { WebpContextProvider } from "../../App";

function HomeSlider() {
  const slider = createRef();

  const { isWebpSupported } = useContext(WebpContextProvider);

  const gotoPrev = () => {
    slider.current.slickPrev();
  };

  const gotoNext = () => {
    slider.current.slickNext();
  };

  const [currentSlide, setCurrentSlide] = useState(1);

  const slideData = [
    {
      slide: 1,
      url: img8,
      title: "Godrej Properties | Godrej City @Mumbai",
      fallbackImg: img8,
    },
    {
      slide: 2,
      url: embassyTechVillage,
      title: "Embassy Group | Embassy Tech Village @Bangalore",
      fallbackImg: embassyTechVillage,
    },
    {
      slide: 3,
      url: hilton1,
      title: "Embassy Group | Hilton Hotel @Bangalore",
      fallbackImg: hiltonFallback1,
    },
    {
      slide: 4,
      url: img4,
      title: " L&T Realty | Raintree Boulevard @Bengaluru",
      fallbackImg: img4fallback,
    },
    {
      slide: 5,
      url: img5,
      title: "LULU GROUP | Y Tower @Dubai",
      fallbackImg: img5fallback,
    },
    {
      slide: 6,
      url: img6,
      title: "Runwal Group | Runwal Eirene @Mumbai",
      fallbackImg: img6fallback,
    },
  ];

  const settings = {
    className: "center",
    // centerPadding: "60px",
    // accessibility: true,
    // dots: true,
    // lazyload: true,
    slidesToShow: 1,
    // centerMode: true,
    infinite: true,
    swipeToSlide: true,
    afterChange: (curr) => setCurrentSlide(parseInt((curr + 1) % 6)),
    responsive: [
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  //   useEffect(() => {
  //     console.log({ currentSlide });
  //   }, [currentSlide]);

  return (
    <div className={styles.container}>
      <IconButton onClick={() => gotoPrev()} className={styles.arrowLeft}>
        <ArrowBackIosIcon fontSize="large" />
      </IconButton>
      <Slider ref={slider} {...settings} className={styles.sliderContainer}>
        {slideData.map((slide, index) => {
          return (
            <div
              id={`vdo_slide_${index}`}
              className={classNames(
                styles.imgContainer
                // currentSlide === index ? styles.activeSlide : ""
              )}
              key={index}
              //animate={current==index ? "focus" : "other"}
            >
              <LazyLoadImage
                className={styles.mainImage}
                src={isWebpSupported ? slide.url : slide.fallbackImg}
                // srcSet={slide.fallbackImg}
                alt="slider-fute"
              />
              <div className={styles.slideTitle}>
                {/* <img src={logo} alt="logo-fute" /> */}
                <h4>{slide.title}</h4>
              </div>
            </div>
          );
        })}
      </Slider>
      <IconButton onClick={() => gotoNext()} className={styles.arrowRight}>
        <ArrowForwardIosIcon fontSize="large" />
      </IconButton>
    </div>
  );
}

export default HomeSlider;
