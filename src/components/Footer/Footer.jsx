import React from "react";
import styles from "./Footer.module.scss";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className={styles["footer"]}>
        <div className="container">
          <div className={styles["footer-row"]}>
            <span className={styles["footer-сopyright"]}>
              © 2020 Inc. All rights reserved . Vincent Code.
            </span>
            <ul className={styles["footer-social"]}>
              <li>
                <FaFacebook size={20} color="#1a1a1a8f" />
              </li>
              <li>
                <FaTwitter size={20} color="#1a1a1a8f" />
              </li>
              <li>
                <FaInstagram size={20} color="#1a1a1a8f" />
              </li>
              <li>
                <FaGithub size={20} color="#1a1a1a8f" />
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
