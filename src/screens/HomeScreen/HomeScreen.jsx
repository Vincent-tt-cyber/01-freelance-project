import React from "react";
import Button from "../../components/UI/Button/Button";
import MainBlock from "./blocks/MainBlock/MainBlock";
import FirmRow from "./blocks/FirmRow/FirmRow";
import StepsBlock from "./blocks/StepBlock/StepsBlock";
import WhyUsBlock from "./blocks/WhyUsBlock/WhyUsBlock";
import AdsBlock from "./blocks/AdsBlock/AdsBlock";
import EndorsedBlock from "./blocks/EndorsedBlock/EndorsedBlock";
import WhyTikTokBlock from "./blocks/WhyTikTokBlock/WhyTikTokBlock";

const HomeScreen = () => {
  return (
    <>
      <MainBlock />
      <FirmRow />
      <StepsBlock />
      <WhyUsBlock />
      <AdsBlock />
      <EndorsedBlock />
      <WhyTikTokBlock />
    </>
  );
};

export default HomeScreen;
