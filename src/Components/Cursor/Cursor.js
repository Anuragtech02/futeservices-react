import React, { useEffect, useState, useRef } from "react";
import style from "./Cursor.module.css";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    addEventListeners();
    return () => removeEventListeners();
  }, []);

  const addEventListeners = () => {
    document.addEventListener("mousemove", onMouseMove);
  };

  const removeEventListeners = () => {
    document.removeEventListener("mousemove", onMouseMove);
  };

  const onMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <>
      <div
        id="cursor"
        className={style.cursor}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      ></div>
      <div
        id="inner-cursor"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
        className={style.inner}
      ></div>
    </>
  );
};

export default Cursor;
