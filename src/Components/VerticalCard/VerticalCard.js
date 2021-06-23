import React, { useContext, useRef, useEffect } from "react";
import styles from "./VerticalCard.module.css";
import { Link, withRouter } from "react-router-dom";
import homeVideo from "../../Assets/video/fute-video-bg.webm";
// import Img from "react-optimized-image";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { WebpContextProvider } from "../../App";

const VerticalCard = ({ item, history, type, onClick, autoplay }) => {
  const { isWebpSupported, isWebmSupported } = useContext(WebpContextProvider);

  const vidRef = useRef(null);

  const onClickLink = (link) => {
    const a = document.createElement("a");
    a.href = link;
    a.target = "_blank";
    a.click();
  };

  const handleClick = () => {
    if (onClick) onClick();
    if (item?.category?.includes("ar")) {
      onClickLink(item.link);
    } else if (type !== "inner") {
      history.push(
        item.link ||
          `/portfolio/${
            item.category
              ? item.category.toLowerCase()
              : item.title.toLowerCase()
          }`
      );
    }
  };

  useEffect(() => {
    if (autoplay === true && vidRef.current) {
      vidRef.current.play();
    }
  }, [autoplay, vidRef]);

  return (
    <div onClick={handleClick} className={styles.card}>
      {item?.type === "video" ? (
        <video
          ref={vidRef}
          muted
          // autoPlay
          loop
          // playsInline
          src={isWebmSupported ? item?.video : item?.fallbackVideo}
        ></video>
      ) : (
        <LazyLoadImage
          effect="blur"
          src={isWebpSupported ? item.image || item.src : item.fallbackImg}
          alt={item.title}
        />
      )}
      <Link
        to={
          item.link ||
          `/portfolio/${
            item.category
              ? item.category.toLowerCase()
              : item.title.toLowerCase()
          }`
        }
      />
      <div className={styles.categoryCardTitle}>
        <h2>{item.title || " - " + item.title}</h2>
        <div className={styles.categoryCardCat}>
          <p>{"Fute Services" || item.category || item.title}</p>
        </div>
      </div>
    </div>
  );
};

export default withRouter(VerticalCard);
