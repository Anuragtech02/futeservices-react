import React, { useState, useEffect, createRef } from "react";
import styles from "./HomeSlider.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IconButton } from "@material-ui/core";
import classNames from "classnames";
import img1 from "../../Assets/homeSlider/img1.jpg";
import img2 from "../../Assets/homeSlider/img2.jpg";
import img3 from "../../Assets/homeSlider/img3.jpg";
import img4 from "../../Assets/homeSlider/img4.jpeg";
import img5 from "../../Assets/homeSlider/img5.jpg";
import img6 from "../../Assets/homeSlider/img6.jpg";
import logo from "../../Assets/logo.png";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

function HomeSlider() {
  const slider = createRef();

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
      url: img1,
      title: "Title",
    },
    {
      slide: 2,
      url: img2,
      title: "Title",
    },
    {
      slide: 3,
      url: img3,
      title: "Title",
    },
    {
      slide: 4,
      url: img4,
      title: "Title",
    },
    {
      slide: 5,
      url: img5,
      title: "Title",
    },
    {
      slide: 6,
      url: img6,
      title: "Title",
    },
  ];

  const settings = {
    className: "center",
    // centerPadding: "60px",
    // accessibility: true,
    // dots: true,
    lazyload: true,
    slidesToShow: 2,
    // centerMode: true,
    infinite: true,
    swipeToSlide: true,
    afterChange: (curr) => setCurrentSlide(parseInt((curr + 1) % 6)),
    responsive: [
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1200,
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
                styles.imgContainer,
                currentSlide === index ? styles.activeSlide : ""
              )}
              key={index}
              //animate={current==index ? "focus" : "other"}
            >
              <img
                className={styles.mainImage}
                src={slide.url}
                alt="slider-fute"
              />
              <div className={styles.slideTitle}>
                <img src={logo} alt="logo-fute" />
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
