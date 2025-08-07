import React from "react";
import TitleDescription from "../../molecules/title/TitleDescription";
import GetStarted from "../../organisms/landingpage/buildapp/GetStarted";
import ScreenShotApp from "../../organisms/landingpage/buildapp/ScreenShotApp";
import SpecTools from "../../organisms/landingpage/buildapp/SpecTools";
import Installation from "../../organisms/landingpage/buildapp/Installation";
import RunningTest from "../../organisms/landingpage/buildapp/RunningTest";

const BuildAppView = () => {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <TitleDescription
        label={"Build App & Documentation "}
        description={"Documentation Starter Website"}
      />
      <GetStarted />
      <ScreenShotApp />
      <Installation />
      <RunningTest />
      <SpecTools />
    </div>
  );
};

export default BuildAppView;
