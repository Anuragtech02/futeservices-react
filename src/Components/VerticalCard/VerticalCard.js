import React, { useContext, useRef, useEffect } from "react";
import styles from "./VerticalCard.module.css";
import { Link, withRouter } from "react-router-dom";
import homeVideo from "../../Assets/video/fute-video-bg.webm";
// import Img from "react-optimized-image";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { WebpContextProvider } from "../../App";
import classNames from "classnames";
import YouTubeIcon from "@material-ui/icons/YouTube";
import "react-lazy-load-image-component/src/effects/blur.css";
import "lazysizes";
// import a plugin
import "lazysizes/plugins/parent-fit/ls.parent-fit";

const VerticalCard = ({
  item,
  history,
  type,
  onClick,
  autoplay,
  onLoad,
  animation,
  height,
}) => {
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
    if (item?.external) {
      onClickLink(item?.link);
      return;
    }
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

  const placeHolder =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII=";

  return (
    <div
      onClick={handleClick}
      className={classNames(
        styles.card,
        !animation ? styles.noAnimation : styles.animation,
        height === "auto" ? styles.autoHeight : styles.fillContainer
      )}
      // style={{ height: `${item.height}px` }}
    >
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
        <img
          // effect="blur"
          data-src={isWebpSupported ? item.image || item.src : item.fallbackImg}
          // placeholderSrc={item.thumbnail}
          alt={item.title}
          // height={item.height}
          onLoad={onLoad}
          className="lazyload"
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
      {item.type === "yt" && (
        <div className={styles.playBtn}>
          <YouTubeIcon fontSize="large" />
        </div>
      )}

      <div className={styles.categoryCardTitle}>
        <h2>{item.category || item.title}</h2>
        <div className={styles.categoryCardCat}>
          <p>{item.category || "Fute Services" || item.title}</p>
        </div>
        <div className={styles.clickToOpen}>
          <p>Open</p>
        </div>
      </div>
    </div>
  );
};

export default withRouter(VerticalCard);
