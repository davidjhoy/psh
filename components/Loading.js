import styles from "../styles/Events.module.scss";
import React from "react";

const Loading = ({ message }) => {
  return (
    <div className={styles.LoadingDiv}>
      <div className={styles.InnerLoadingWrap}>
        <div className={styles.LoadingHeader}></div>
        <div>
          <div>{message}</div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
