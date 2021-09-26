import React from "react";
import styles from "./NewsRoom.module.css";
import { withRouter } from "react-router-dom";
import bannerImg from "../../Assets/back-image.jpg";
import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import Lottie from "react-lottie";
import animationData from "../../Assets/animations/coming-soon-new.json";

const NewsRoom = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className={styles.container}>
      <Helmet>
        <title>News Room | FuteServices</title>
      </Helmet>
      <Banner image={bannerImg} title="News Room" />
      <div className={styles.details}>
        <Lottie options={defaultOptions} height={200} width={300} />
      </div>
    </div>
  );
};

export default withRouter(NewsRoom);
