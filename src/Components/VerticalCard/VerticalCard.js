import React from "react";
import styles from "./VerticalCard.module.css";
import { Link, withRouter } from "react-router-dom";
import homeVideo from "../../Assets/video/fute-video-bg.webm";

const VerticalCard = ({ item, history }) => {
  return (
    <div
      onClick={() =>
        history.push(
          `/portfolio/${
            item.category
              ? item.category.toLowerCase()
              : item.title.toLowerCase()
          }`
        )
      }
      className={styles.card}
    >
      <img src={item.image || item.src} alt={item.title} />
      {/* <video muted autoPlay src={homeVideo}></video> */}
      <Link to={`/portfolio/${item.title}`} />
      <div className={styles.categoryCardTitle}>
        <h2>Project - {item.title}</h2>
        <div className={styles.categoryCardCat}>
          <p>{item.title}</p>
        </div>
      </div>
    </div>
  );
};

export default withRouter(VerticalCard);
