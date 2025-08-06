import React from "react";
import TitleDescription from "../../molecules/title/TitleDescription";
import GetStarted from "../../organisms/landingpage/buildapp/GetStarted";
import ScreenShotApp from "../../organisms/landingpage/buildapp/ScreenShotApp";

const BuildAppView = () => {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <TitleDescription
        label={"Build App & Documentation "}
        description={"Documentation Starter Website"}
      />
      <GetStarted />
      <ScreenShotApp />
    </div>
  );
};

export default BuildAppView;
