import React from "react";
import styles from "./StepCard.module.scss";

const StepCard = ({ item, currentIcon }) => {
  return (
    <>
      <div className={styles["step-card"]}>
        <div className={styles["step-card__icon"]}>
          {currentIcon(item.icon)}
        </div>
        <h4 className={styles["step-card__count"]}>Step {item.stepCount}</h4>
        <p className={styles["step-card__text"]}>{item.stepText}</p>
      </div>
    </>
  );
};

export default StepCard;
