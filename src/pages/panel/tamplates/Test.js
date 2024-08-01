import React, { useState, useEffect } from "react";
import PanelLayout from "../PanelLayout";
import Breadcrumbs from "../../../components/breadcrumbs/Breadcrumbs";
import AttributeTable from "../../../components/table/default/AttributeTable";
import Table from "../../../components/table/default/Table";
import Thead from "../../../components/table/default/Thead";
import Tbody from "../../../components/table/default/Tbody";
import Tfoot from "../../../components/table/default/Tfoot";

const Test = () => {
  const breadCrumbs = {
    page: "Test Page",
    data: [
      { page: "Templates", route: "/templates/test" },
      { page: "Test Page", route: "/templates/test" }
    ],
  };
  
  return (
    <>
      <PanelLayout>
        <Breadcrumbs breadCrumbs={breadCrumbs} />
        <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
          <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
            <AttributeTable />
              <Table>
                <Thead />
                <Tbody />
              </Table>
            <Tfoot />
          </div>
        </div>
      </PanelLayout>
    </>
  );
};

export default Test;
