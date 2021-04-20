import React, { useEffect } from "react";
import styles from "./Counters.module.css";
import { useCountUp } from "react-countup";

const Counters = ({ start }) => {
  const data = [
    {
      from: 0,
      to: 1000,
      title: "Clients",
    },
    {
      from: 0,
      to: 1200,
      title: "Projects Completed",
    },
    {
      from: 0,
      to: 10000,
      title: "Cities",
    },
  ];

  useEffect(() => {
    sessionStorage.setItem("fute-counters", 0);
  }, []);

  return (
    <div className={styles.container}>
      {data.map((item) => (
        <div key={item.title} className={styles.counter}>
          <h3>{item.title}</h3>
          <h1>
            <Counter counter={item} st={start} />
          </h1>
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
    suffix: "+",
  });

  useEffect(() => {
    const isComplete = parseInt(sessionStorage.getItem("fute-counters"));
    if (st && start && isComplete !== 3) {
      start();
      sessionStorage.setItem("fute-counters", parseInt(isComplete + 1) || 0);
    }
  }, [st, start]);

  return countUp;
};
