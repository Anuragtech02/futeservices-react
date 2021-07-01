import React, { useRef } from "react";
import styles from "./CategoriesSlider.module.css";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { IconButton } from "@material-ui/core";

import cat1 from "../../Assets/projects/cat1.webp";
import cat2 from "../../Assets/projects/cat2.webp";
import cat4 from "../../Assets/projects/cat4.webp";
import cat5 from "../../Assets/projects/cat5.webp";

import fPlan from "../../Assets/categories/floorplan-1.webp";
import fPlanfallback from "../../Assets/categories/floorplan-1.jpg";
import residential from "../../Assets/categories/residential-1.webp";
import residentialfallback from "../../Assets/categories/residential-1.jpg";
import rendering from "../../Assets/categories/3d-rendering-1.webp";
import renderingfallback from "../../Assets/categories/3d-rendering-1.jpg";
import vr from "../../Assets/categories/vr-1.webp";
import vrfallback from "../../Assets/categories/vr-1.jpg";
import panaroma from "../../Assets/categories/360-panaroma-1.webp";
import panaromafallback from "../../Assets/categories/360-panaroma-1.jpg";
import scaleModel from "../../Assets/categories/scale-model-1.webp";
import scaleModelfallback from "../../Assets/categories/scale-model-1.jpg";
import commercial from "../../Assets/categories/commercial-1.webp";
import commercialfallback from "../../Assets/categories/commercial-1.jpg";

import product from "../../Assets/categories/product-1.webm";
import productfallback from "../../Assets/categories/product-1.mp4";
import walkthrough from "../../Assets/categories/3d-walkthrough-1.webm";
import walkthroughfallback from "../../Assets/categories/3d-walkthrough-1.mp4";

import vid from "../../Assets/video/fute-video-bg.webm";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import "swiper/swiper.scss";
import VerticalCard from "../VerticalCard/VerticalCard";

const CategoriesSlider = ({ history, autoPlayVid }) => {
  const data = [
    {
      title: "Residential",
      image: residential,
      fallbackImg: residentialfallback,
    },
    {
      title: "Commercial",
      image: commercial,
      fallbackImg: commercialfallback,
    },
    {
      title: "3D Rendering",
      image: rendering,
      fallbackImg: renderingfallback,
    },
    {
      title: "3D Walkthrough",
      type: "video",
      image: cat4,
      video: walkthrough,
      fallbackVideo: walkthroughfallback,
      link: "portfolio/walkthrough",
    },
    {
      title: "3D Floorplan",
      link: "portfolio/3d-2d-floorplan",
      image: fPlan,
      fallbackImg: fPlanfallback,
    },
    {
      title: "360 Panaroma/AR/VR",
      type: "360",
      image: panaroma,
      fallbackImg: panaromafallback,
    },
    // {
    //   title: "Virtual Reality",
    //   type: "360",
    //   image: vr,
    //   fallbackImg: vrfallback,
    // },
    // {
    //   title: "Augmented Reality",
    //   image: cat5,
    // },
    {
      title: "Product Visualisation",
      type: "video",
      image: cat5,
      video: product,
      fallbackVideo: productfallback,
    },
    {
      title: "Physical Scale Model",
      image: scaleModel,
      fallbackImg: scaleModelfallback,
    },
    // {
    //   title: "Layer View",
    //   image: cat5,
    // },
    // {
    //   title: "Drone Shoot",
    //   image: cat5,
    // },
    // {
    //   title: "Chroma Shoot",
    //   image: cat5,
    // },
  ];
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  SwiperCore.use([Navigation, Autoplay]);

  return (
    <div className={styles.container} id="portfolio">
      <Swiper
        className={styles.swiper}
        slidesPerView={4}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
        loop={true}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
        }}
        autoplay={{ disableOnInteraction: true, delay: 5000 }}
        breakpoints={{
          1100: {
            slidesPerView: 4,
          },
          900: {
            slidesPerView: 3,
          },
          700: {
            slidesPerView: 2,
          },
          500: {
            slidesPerView: 1,
          },
          200: {
            slidesPerView: 1,
          },
        }}
      >
        {data.map((item, i) => (
          <SwiperSlide key={i}>
            <VerticalCard item={item} autoplay={autoPlayVid} animation />
          </SwiperSlide>
        ))}

        <IconButton ref={navigationPrevRef} className={styles.arrowLeft}>
          <ArrowBackIcon fontSize="large" />
        </IconButton>

        <IconButton ref={navigationNextRef} className={styles.arrowRight}>
          <ArrowForwardIcon fontSize="large" />
        </IconButton>
      </Swiper>
    </div>
  );
};

export default CategoriesSlider;
