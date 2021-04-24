import React, { useEffect } from "react";
import styles from "./Counters.module.css";
import { useCountUp } from "react-countup";
import dotsImage from "../../Assets/dots.svg";
import clientsImage from "../../Assets/customer.svg";
import movieImage from "../../Assets/movie.svg";
import citiesImage from "../../Assets/location.svg";
import scaleImage from "../../Assets/scale.png";

const Counters = ({ start }) => {
  const data = [
    {
      from: 0,
      to: 240,
      title: "Clients",
      icon: clientsImage,
    },
    {
      from: 0,
      to: 1200,
      title: "Projects Completed",
      icon: movieImage,
    },
    {
      from: 0,
      to: 8,
      title: "Countries",
      icon: citiesImage,
    },
    {
      from: 0,
      to: 500,
      title: "Project Scale Handled",
      icon: scaleImage,
      diff: true,
    },
  ];

  useEffect(() => {
    sessionStorage.setItem("fute-counters", 0);
  }, []);

  return (
    <div className={styles.container}>
      {data.map((item) => (
        <div key={item.title} className={styles.counter}>
          <img
            src={item.icon}
            // style={{ height: item.diff ? "60px" : "auto" }}
            alt={item.title + "-fute-services"}
          />
          <h1>
            <Counter counter={item} st={start} />
          </h1>
          <h3>{item.title}</h3>
          {/* <div
            style={{ backgroundImage: `url(${dotsImage})` }}
            className={styles.dots}
          ></div> */}
        </div>
      ))}
    </div>
  );
};

export default Counters;

const Counter = ({ st, counter }) => {
  const { countUp, start } = useCountUp({
    start: counter.from,
    end: counter.to,
    delay: 1000,
    duration: 2,
    suffix: counter.diff ? " acre" : "+",
  });

  useEffect(() => {
    const isComplete = parseInt(sessionStorage.getItem("fute-counters"));
    if (st && start && isComplete !== 4) {
      start();
      sessionStorage.setItem("fute-counters", parseInt(isComplete + 1) || 0);
    }
  }, [st, start]);

  return countUp;
};
