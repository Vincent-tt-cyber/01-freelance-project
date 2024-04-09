import React from "react";
import styles from "./WhyTikTokBlock.module.scss";
import iPhone11ProImage from "../../../../assets/images/iPhone 11 Pro.png";
import Button from "../../../../components/UI/Button/Button";
import { IoMdArrowForward } from "react-icons/io";

const WhyTikTokBlock = () => {
  return (
    <>
      <div className={styles["why-tiktok-block"]}>
        <div className="container">
          <div className={styles["why-tiktok-block-row"]}>
            <div className={styles["why-tiktok-block-decription"]}>
              <h2 className={styles["why-tiktok-block__title"]}>Why Tiktok?</h2>
              <p className={styles["why-tiktok-block__text"]}>
                Advertising on TikTok is the #1 way to reach millions of people
                between the ages of 13 and 34 who make up 93% of your user base.
                You can present your product in a native way and get maximum
                exposure.
              </p>
              <p className={styles["why-tiktok-block__text"]}>
                TikTok is one of the most active communities in the history of
                the Internet.
              </p>
              <Button type="primary">
                Book a Free Strategy Session{" "}
                <IoMdArrowForward style={{ marginLeft: 10 }} size={21} />
              </Button>
            </div>
            <div className={styles["why-tiktok-block__iphone"]}>
              <div className={styles["why-tiktok-block__image"]}>
                <img className={styles[""]} src={iPhone11ProImage} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyTikTokBlock;
