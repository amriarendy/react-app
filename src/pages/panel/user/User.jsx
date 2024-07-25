import React, { useState } from "react";
import Breadcrumbs from "../../../components/breadcrumbs/Breadcrumbs";
import PanelLayout from "../PanelLayout";
import Card from "../../../components/card/Card";
import Table from "../../../components/table/Table";
import { USER_FORMAT_TABLE } from "../../../libs/constants/formats/UserFormat";
import AttributeTable from "../../../components/table/AttributeTable";
import DataTable from "../../../../dummy.json";
import TableFeature from "../../../components/table/TableFeature";
import TableAction from "../../../components/table/TableAction";

const User = () => {
  const breadCrumbs = {
    page: "Users",
    data: [
      { page: "Users", route: "/Users" },
      { page: "List", route: "/Users" },
    ],
  };

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const toggleAddModal = () => {
    setIsAddModalOpen(!isAddModalOpen);
  };

  const toggleEditModal = () => {
    setIsEditModalOpen(!isEditModalOpen);
  };
  return (
    <>
      <PanelLayout>
        <Breadcrumbs breadCrumbs={breadCrumbs} />
        <div className="col-span-3">
          <Card
            header={
              <AttributeTable
                attribute={USER_FORMAT_TABLE.attribute}
                cols={1}
              />
            }
          >
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <Table
                attribute={USER_FORMAT_TABLE.attribute}
                thead={USER_FORMAT_TABLE.th}
              >
                {DataTable.users.map((item, index) => (
                  <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                    <TableFeature
                      attribute={USER_FORMAT_TABLE.attribute}
                      index={index}
                    />
                    <td class="flex items-center p-4 mr-12 space-x-6 whitespace-nowrap">
                      <img
                        class="w-10 h-10 rounded-full"
                        src={`https://flowbite-admin-dashboard.vercel.app/images/users/${item.avatar}`}
                        alt="{{ .name }} avatar"
                      />
                      <div class="text-sm font-normal text-gray-500 dark:text-gray-400">
                        <div class="text-base font-semibold text-gray-900 dark:text-white">
                          {item.name}
                        </div>
                        <div class="text-sm font-normal text-gray-500 dark:text-gray-400">
                          {item.email}
                        </div>
                      </div>
                    </td>
                    <td class="max-w-sm p-4 overflow-hidden text-base font-normal text-gray-500 truncate xl:max-w-xs dark:text-gray-400">
                      {item.biography}
                    </td>
                    <td class="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {item.position}
                    </td>
                    <td class="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {item.country}
                    </td>
                    <td class="p-4 text-base font-normal text-gray-900 whitespace-nowrap dark:text-white">
                      <div className="flex items-center">
                        {item.status === "Active" ? (
                          <div className="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div>
                        ) : (
                          <div className="h-2.5 w-2.5 rounded-full bg-red-500 mr-2"></div>
                        )}
                        {item.status}
                      </div>
                    </td>
                    <TableAction attribute={USER_FORMAT_TABLE.attribute} />
                  </tr>
                ))}
              </Table>
            </div>
          </Card>
        </div>
      </PanelLayout>
    </>
  );
};

export default User;
