import React, { useCallback } from "react";
import styles from "./CompareSlider.module.scss";
import {
  ReactCompareSlider,
  ReactCompareSliderHandle,
  ReactCompareSliderImage,
} from "react-compare-slider";

const CompareSlider = ({ props }) => {
  const handlePositionChange = useCallback(
    (position) => console.log("[Portrait]", position),
    []
  );

  return (
    <div className={styles.container}>
      <ReactCompareSlider
        {...props}
        // handle={
        //   <ReactCompareSliderHandle
        //     buttonStyle={{
        //       backdropFilter: undefined,
        //       background: "white",
        //       border: 0,
        //       color: "#333"
        //     }}
        //   />
        // }
        itemOne={
          <ReactCompareSliderImage
            src="https://images.unsplash.com/photo-1580458148391-8c4951dc1465?auto=format&fit=crop&w=1280&q=80"
            style={{ filter: "grayscale(1)" }}
            alt="one"
          />
        }
        itemTwo={
          <ReactCompareSliderImage
            src="https://images.unsplash.com/photo-1580458148391-8c4951dc1465?auto=format&fit=crop&w=1280&q=80"
            alt="two"
          />
        }
        onPositionChange={handlePositionChange}
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
};

export default CompareSlider;
