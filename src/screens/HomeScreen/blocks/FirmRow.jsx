import React from "react";
import styles from "../blocks/FirmRow.module.scss";
import myProteinIMG from "../../../assets/images/my-protein.svg";
import miHighIMG from "../../../assets/images/mi-high.svg";
import streamLootsIMG from "../../../assets/images/stream-loots.svg";
import hairBurstIMG from "../../../assets/images/hair-burst.svg";

const FirmRow = () => {
  return (
    <>
      <div className="container">
        <ul className={styles["firm-row"]}>
          <li>
            <img src={myProteinIMG} alt="" />
          </li>
          <li>
            <img src={miHighIMG} alt="" />
          </li>
          <li>
            <img src={streamLootsIMG} alt="" />
          </li>
          <li>
            <img src={hairBurstIMG} alt="" />
          </li>
        </ul>
      </div>
    </>
  );
};

export default FirmRow;
