import React from "react";
import styles from "./Header.module.scss";

import HeaderLogo from "../../assets/images/logo.svg";
import Button from "../UI/Button/Button";

const Header = () => {
  return (
    <>
      <header className={styles["header"]}>
        <div className="container">
          <div className={styles["header-row"]}>
            <img src={HeaderLogo} />
            <Button size="small">Let’s chat</Button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
