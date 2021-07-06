import React from "react";
import styles from "./Loading.module.css";
import classNames from "classnames";

const Loading = ({ loading }) => {
  return (
    <div
      className={classNames(
        styles.loading,
        loading ? styles.show : styles.hide
      )}
    >
      <div className={styles.loadingEclipse}>
        <div className={styles.loadingEclipseEl}>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
