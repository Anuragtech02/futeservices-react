import React from "react";
import styles from "./Banner.module.css";

const Banner = ({ image, title }) => {
  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className={styles.bgImage}
    >
      <h1>{title}</h1>
    </div>
  );
};

export default Banner;
