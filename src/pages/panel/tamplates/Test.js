import React from "react";
import PanelLayout from "../PanelLayout";
import Breadcrumbs from "../../../components/breadcrumbs/Breadcrumbs";

const Test = () => {
  const breadCrumbs = {
    page: "Test Page",
    data: [
      { page: "Templates", route: "/templates/test" },
      { page: "Test Page", route: "/templates/test" },
    ],
  };

  return (
    <>
      <PanelLayout>
        <Breadcrumbs breadCrumbs={breadCrumbs} />
        
        
      </PanelLayout>
    </>
  );
};

export default Test;
