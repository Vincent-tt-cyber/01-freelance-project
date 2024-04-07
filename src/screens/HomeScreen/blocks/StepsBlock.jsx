import React from "react";
import styles from "./StepsBlock.module.scss";
import StepCard from "./StepCard";
import { CiDesktopMouse1 } from "react-icons/ci";
import { BsGrid3X3Gap } from "react-icons/bs";
import { PiGraph } from "react-icons/pi";
import { SiLaunchpad } from "react-icons/si";

const StepsBlock = () => {
  const currentIcon = (iconName) => {
    if (iconName == "CiDesktopMouse1") {
      return <CiDesktopMouse1 size={48} />;
    }
    if (iconName == "BsGrid3X3Gap") {
      return <BsGrid3X3Gap size={48} />;
    }
    if (iconName == "PiGraph") {
      return <PiGraph size={48} />;
    }
    if (iconName == "SiLaunchpad") {
      return <SiLaunchpad size={48} />;
    }
  };

  const stepItems = [
    {
      id: 1,
      icon: "CiDesktopMouse1",
      stepCount: 1,
      stepText: "Easy one-click communication",
    },
    {
      id: 2,
      icon: "BsGrid3X3Gap",
      stepCount: 2,
      stepText: "See if our offer is right for you",
    },
    {
      id: 3,
      icon: "PiGraph",
      stepCount: 3,
      stepText: "Rapid Delivery",
    },
    {
      id: 4,
      icon: "SiLaunchpad",
      stepCount: 4,
      stepText: "Ad launch",
    },
  ];

  return (
    <>
      <div className={styles["steps-block"]}>
        <div className="container">
          <div className={styles["steps-block-header"]}>
            <h4 className={styles["steps-block__red-title"]}>
              Start in seconds
            </h4>
            <h2 className={styles["steps-block__title"]}>
              Get started in four easy steps
            </h2>
          </div>
          <div className={styles["steps-block-row"]}>
            {stepItems.map((step) => (
              <StepCard key={step.id} item={step} currentIcon={currentIcon} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default StepsBlock;
