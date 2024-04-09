import React from "react";
import styles from "./WhyUsBlock.module.scss";
// import WhyUsBlockImage from "../../../assets/images/WhyUsBlockIMG.jpg";
import Button from "../../../../components/UI/Button/Button";

const WhyUsBlock = () => {
  return (
    <div className={styles["whyus-block"]}>
      <div className="container">
        <h1 className={styles["whyus-block__title"]}>Why us?</h1>
        <div className={styles["whyus-block-row"]}>
          <div className={styles["whyus-block__gradient"]}>
            <img
              className={styles["whyus-block__image"]}
              src={
                "https://i.pinimg.com/564x/f1/aa/53/f1aa53f33d9c00e2b110632940111ba3.jpg"
              }
              alt=""
            />
          </div>
          <div className={styles["whyus-block-description"]}>
            <h3 className={styles["whyus-block-description__title"]}>
              Creatives that sell.
            </h3>
            <p className={styles["whyus-block-description__text"]}>
              Have you heard of the famous saying “Create TikToks, not ads?"
              Well - we don’t follow that crap. Our creators and editors are
              trained to build UGC ads that take a customer from A (cold) to Z
              (purchasers) through our modular creative framework, which allows
              us to maximize the lifecycle of a creative..
            </p>
            <div className={styles["whyus-block-description__btn"]}>
              <Button type="primary">Book a Free Strategy Session</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUsBlock;
