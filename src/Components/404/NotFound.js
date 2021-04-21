import React, { useState, useEffect } from "react";
import styles from "./NotFound.module.css";
import notFoundImg from "../../Assets/not-found.svg";
import { withRouter } from "react-router-dom";
import cat1 from "../../Assets/projects/cat1.webp";
import { Helmet } from "react-helmet";

const NotFound = ({ history }) => {
  const [timer, setTimer] = useState(5);

  useEffect(() => {
    setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
  }, []);

  useEffect(() => {
    if (timer === 0) {
      history.push("/");
    }
  }, [timer, history]);

  return (
    <div className={styles.container}>
      <Helmet>
        <title>404 | FuteServices</title>
      </Helmet>
      <div
        style={{ backgroundImage: `url(${cat1})` }}
        className={styles.bgImage}
      >
        <h2>404</h2>
      </div>
      <div className={styles.details}>
        <p>Oops! Seems like you're lost.</p>
        <img src={notFoundImg} alt="fute-services-not-found" />
        <p>
          Redirecting to homepage in <strong>{timer}</strong> seconds.
        </p>
      </div>
    </div>
  );
};

export default withRouter(NotFound);
