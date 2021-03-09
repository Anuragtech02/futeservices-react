import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styles from "./MultipleSlider.module.css";
import { Logos } from "../../Static";

export const MultipleSlider = () => {
  return (
    <Slider
      className={styles.slider}
      dots={false}
      slidesToShow={4}
      slidesToScroll={1}
      autoplay={true}
      autoplaySpeed={2000}
      responsive={[
        {
          breakpoint: 1700,
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
          <img src={logo.img} alt="logo" />
        </div>
      ))}
    </Slider>
  );
};
export default MultipleSlider;
