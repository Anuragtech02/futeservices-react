import React from "react";
import styles from "./Loading.module.css";
import Lottie from "react-lottie";
import animationData from "../../Assets/loading-anim.json";
import classNames from "classnames";

const Loading = ({ loading }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div
      className={classNames(
        styles.loading,
        loading ? styles.show : styles.hide
      )}
    >
      <Lottie options={defaultOptions} height={200} width={200} />
    </div>
  );
};

export default Loading;
