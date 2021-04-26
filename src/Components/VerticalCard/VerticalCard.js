import React, { useContext } from "react";
import styles from "./VerticalCard.module.css";
import { Link, withRouter } from "react-router-dom";
import homeVideo from "../../Assets/video/fute-video-bg.webm";
// import Img from "react-optimized-image";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { WebpContextProvider } from "../../App";

const VerticalCard = ({ item, history, type, onClick }) => {
  const { isWebpSupported, isWebmSupported } = useContext(WebpContextProvider);

  const onClickLink = (link) => {
    const a = document.createElement("a");
    a.href = link;
    a.target = "_blank";
    a.click();
  };

  const handleClick = () => {
    // item.link && item.category.includes("ar") ? onClickLink(item.link)
    // : type === "innner"
    //     ? {}
    //     : history.push(
    //         `/portfolio/${
    //           item.category
    //             ? item.category.toLowerCase()
    //             : item.title.toLowerCase()
    //         }`
    //       );
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

  return (
    <div onClick={handleClick} className={styles.card}>
      {item?.type === "video" ? (
        <video
          muted
          autoPlay
          loop
          playsInline
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
          <p>{item.category || item.title}</p>
        </div>
      </div>
    </div>
  );
};

export default withRouter(VerticalCard);
