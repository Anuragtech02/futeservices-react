import React, { useContext, useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styles from "./MultipleSlider.module.css";
import { Logos } from "../../Static";
import { IconButton } from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { WebpContextProvider } from "../../App";
import { LazyLoadImage } from "react-lazy-load-image-component";

export const MultipleSlider = () => {
  const { isWebpSupported } = useContext(WebpContextProvider);

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

      <Slider
        ref={slider}
        className={styles.slider}
        dots={false}
        slidesToShow={4}
        slidesToScroll={1}
        lazyLoad={true}
        autoplay={true}
        autoplaySpeed={2000}
        responsive={[
          {
            breakpoint: 1700,
            settings: {
              slidesToShow: 5,
            },
          },
          {
            breakpoint: 1350,
            settings: {
              slidesToShow: 4,
            },
          },
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 700,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 1,
            },
          },
        ]}
      >
        {Logos.map((logo) => (
          <div key={logo.key} className={styles.imgContainer}>
            <LazyLoadImage
              src={isWebpSupported ? logo.img : logo.fallbackImg}
              alt="logo"
            />
          </div>
        ))}
      </Slider>
      <IconButton onClick={() => gotoNext()} className={styles.arrowRight}>
        <ArrowForwardIosIcon fontSize="large" />
      </IconButton>
    </div>
  );
};
export default MultipleSlider;
