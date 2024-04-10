import React from "react";
import styles from "./AdsBlock.module.scss";
import { IoSpeedometerOutline } from "react-icons/io5";
import { TbShoppingCart } from "react-icons/tb";
import Button from "../../../../components/UI/Button/Button";

const AdsBlock = () => {
  return (
    <>
      <div className={styles["ads-block"]}>
        <div className="container">
          <div className={styles["ads-block-row"]}>
            <div className={styles["ads-block-description"]}>
              <h1 className={styles["ads-block__title"]}>Ads that convert.</h1>
              <p className={styles["ads-block__text"]}>
                We have a network of TikTok influencers who create native UGC
                for our clients
              </p>
              <div className={styles["ads-block-info"]}>
                <div className={styles["ads-block-info__item"]}>
                  <div className={styles["ads-block-info__icon"]}>
                    <TbShoppingCart size={24} color="#FA0369" />
                  </div>
                  <p className={styles["ads-block-info__text"]}>
                    For SaaS Brands
                  </p>
                </div>
                <div className={styles["ads-block-info__item"]}>
                  <div className={styles["ads-block-info__icon"]}>
                    <IoSpeedometerOutline size={24} color="#FA0369" />
                  </div>
                  <p className={styles["ads-block-info__text"]}>
                    For SaaS Brands
                  </p>
                </div>
              </div>
              <div className={styles["ads-block__btn"]}>
                <Button type="primary">Book a Free Strategy Session</Button>
              </div>
            </div>
            <div className={styles["ads-block__gradient"]}>
              <img
                className={styles["ads-block__image"]}
                src="https://i.pinimg.com/564x/e0/85/c8/e085c8d9e1a6490ac85f8cc6f80c465c.jpg"
                alt="Tik-Tok image"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdsBlock;
