import React from "react";
import styles from "./FirmRow.module.scss";
import myProteinIMG from "../../../../assets/images/my-protein.svg";
import miHighIMG from "../../../../assets/images/mi-high.svg";
import streamLootsIMG from "../../../../assets/images/stream-loots.svg";
import hairBurstIMG from "../../../../assets/images/hair-burst.svg";

const FirmRow = () => {
  return (
    <div className={styles["firm"]}>
      <div className="container">
        <ul className={styles["firm-row"]}>
          <li>
            <img src={myProteinIMG} />
          </li>
          <li>
            <img src={miHighIMG} />
          </li>
          <li>
            <img src={streamLootsIMG} />
          </li>
          <li>
            <img src={hairBurstIMG} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FirmRow;
