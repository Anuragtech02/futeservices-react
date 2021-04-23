import React, { useRef } from "react";
import styles from "./CategoriesSlider.module.css";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { IconButton } from "@material-ui/core";

import cat1 from "../../Assets/projects/cat1.webp";
import cat2 from "../../Assets/projects/cat2.webp";
import cat4 from "../../Assets/projects/cat4.webp";
import cat5 from "../../Assets/projects/cat5.webp";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper.scss";

const CategoriesSlider = ({ history }) => {
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

  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  SwiperCore.use([Navigation]);

  return (
    <div className={styles.container}>
      <Swiper
        className={styles.swiper}
        slidesPerView={4}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        loop={true}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
        }}
        autoplay={{ delay: 5000 }}
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
            <div
              onClick={() => history.push(`/portfolio/${item.title}`)}
              className={styles.card}
            >
              <img src={item.image} alt={item.title} />

              <Link to={`/portfolio/${item.title}`} />
              <div className={styles.categoryCardTitle}>
                <h2>Project - {item.title}</h2>
                <div className={styles.categoryCardCat}>
                  <p>{item.title}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <IconButton ref={navigationPrevRef} className={styles.arrowLeft}>
          <ArrowBackIosIcon fontSize="large" />
        </IconButton>

        <IconButton ref={navigationNextRef} className={styles.arrowRight}>
          <ArrowForwardIosIcon fontSize="large" />
        </IconButton>
      </Swiper>
    </div>
  );
};

export default CategoriesSlider;
