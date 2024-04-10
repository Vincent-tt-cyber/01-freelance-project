import React from "react";
import styles from "./EndorsedBlock.module.scss";
import Button from "../../../../components/UI/Button/Button";
const EndorsedBlock = () => {
  return (
    <>
      <div className={styles["endorsed-block"]}>
        <div className="container">
          <div className={styles["endorsed-block-row"]}>
            <div className={styles["endorsed-block__gradient"]}>
              <img
                className={styles["endorsed-block__image"]}
                src="https://i.pinimg.com/564x/4c/20/d6/4c20d61734533d33e61f65328cf5d84f.jpg"
                alt=""
              />
              <div className={styles["endorsed-block__image-shadow-1"]}></div>
              <div className={styles["endorsed-block__image-shadow-2"]}></div>
            </div>
            <div className={styles["endorsed-block-description"]}>
              <h3 className={styles["endorsed-block__title"]}>
                Tiktok endorsed.
              </h3>
              <p className={styles["endorsed-block__text"]}>
                We’re an official TikTok Advertising Partner Agency working with
                clients all around the world. We get early access to Alpha &
                Beta features on the platform and have direct and dedicated
                support from the Tiktok Team.
              </p>
              <div className={styles["endorsed-block-description__btn"]}>
                <Button type="primary">Book a Free Strategy Session</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EndorsedBlock;
