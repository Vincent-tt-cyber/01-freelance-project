import React from "react";
import styles from "./Button.module.scss";

const Button = ({ type, size, children }) => {
  const buttonStyle = {
    backgroundColor: type == "primary" ? "#fa0369" : "rgba(255, 255, 255, 0.1)",
    padding: size == "small" ? "10px 24px" : "16px 40px",
    // fontSize: size == "small" ? "16px" : "18px",
    borderRadius: 100,
  };

  return (
    <>
      <button style={buttonStyle}>{children}</button>
    </>
  );
};

export default Button;
