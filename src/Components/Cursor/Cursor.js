import React, { useEffect, useState, useRef } from "react";
import style from "./Cursor.module.css";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", onMouseMove);
    return () => document.removeEventListener("mousemove", onMouseMove);
  }, []);

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
