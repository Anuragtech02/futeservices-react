import React from "react";
import styles from "./VerticalCard.module.css";
import { Link, withRouter } from "react-router-dom";

const VerticalCard = ({ item, history }) => {
  return (
    <div
      onClick={() => history.push(`/portfolio/${item.title}`)}
      className={styles.card}
    >
      <img src={item.image || item.src} alt={item.title} />

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
