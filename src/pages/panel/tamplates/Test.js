import React from "react";
import PanelLayout from "../PanelLayout";
import Breadcrumbs from "../../../components/breadcrumbs/Breadcrumbs";
import AttributeTable from "../../../components/table/advance/AttributeTable";
import Table from "../../../components/table/advance/Table";
import Thead from "../../../components/table/advance/Thead";
import Tbody from "../../../components/table/advance/Tbody";
import Tfoot from "../../../components/table/advance/Tfoot";

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
        <AttributeTable />
        <Table>
          <Thead />
          <Tbody />
        </Table>
        <Tfoot />
      </PanelLayout>
    </>
  );
};

export default Test;
