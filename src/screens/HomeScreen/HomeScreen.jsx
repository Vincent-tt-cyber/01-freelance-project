import React from "react";
import Button from "../../components/UI/Button/Button";
import MainBlock from "./blocks/MainBlock";
import FirmRow from "./blocks/FirmRow";
import StepsBlock from "./blocks/StepsBlock";
import WhyUsBlock from "./blocks/WhyUsBlock";

const HomeScreen = () => {
  return (
    <>
      <MainBlock />
      <FirmRow />
      <StepsBlock />
      <WhyUsBlock />
    </>
  );
};

export default HomeScreen;
