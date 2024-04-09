import React from "react";
import styles from "./LetsGetMovingBlock.module.scss";
import LetsGetMovingIMG from "../../../../assets/images/letsGetMoving.jpg";

const LetsGetMovingBlock = () => {
  return (
    <>
      <div className={styles["lets-get-moving"]}>
        <div className="container">
          <div className={styles["lets-get-moving-row"]}>
            <div className={styles["lets-get-moving-description"]}>
              <h2 className={styles["lets-get-moving__title"]}>
                Let’s get moving.
              </h2>
              <p className={styles["lets-get-moving__text"]}>
                Our sole purpose is to help DTC and SaaS brands transition from
                Conventional advertising and take advantage of exponential
                scaling opportunities through TikTok advertisng.
              </p>
            </div>
            <div className={styles["lets-get-moving-image"]}>
              <img src={LetsGetMovingIMG} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LetsGetMovingBlock;
