import React from "react";
import styles from "./MainBlock.module.scss";
import Button from "../../../components/UI/Button/Button";
import MainBlockImage from "../../../assets/images/main-block-image.png";

const MainBlock = () => {
  return (
    <>
      <div className={styles["main-block"]}>
        <div className="container">
          <div className={styles["main-block-row"]}>
            {/* Text */}
            <div className={styles["main-block__description"]}>
              <h1>
                Gain millions of views on TikTok, grab your audience, be louder.
                And we'll help.
              </h1>
              <div className={styles["main-block__description-btn"]}>
                <Button type="primary">Book a Free Strategy Session</Button>
                <small>Let's get to know each other on this 30min call</small>
              </div>
            </div>
            {/* Image */}
            <div className={styles["main-block__image"]}>
              <div className={styles["main-block__gradient"]}>
                <img src={MainBlockImage} alt="Tik-Tok Image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBlock;
