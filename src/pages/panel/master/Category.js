import React, { useState } from "react";
import PanelLayout from "../PanelLayout";
import Table from "../../../components/table/Table";
import AttributeTable from "../../../components/table/AttributeTable";
import Breadcrumbs from "../../../components/breadcrumbs/Breadcrumbs";
import Card from "../../../components/card/Card";
import {
  CATEGORY_FORMAT_TABLE,
  ADD_CATEGORY_FORMAT_MODAL,
  EDIT_CATEGORY_FORMAT_MODAL,
} from "../../../libs/constants/formats/CategoryFormat";
import Modal from "../../../components/modal/Modal";
import DataTable from "../../../dummy.json";
import TableFeature from "../../../components/table/TableFeature";
import TableAction from "../../../components/table/TableAction";

const Category = () => {
  const breadCrumbs = {
    page: "Category",
    data: [
      { page: "Category", route: "/master/category" },
      { page: "List", route: "/master/category" },
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
        <div className="grid grid-cols-1 px-4 pt-6 xl:grid-cols-3 xl:gap-4 dark:bg-gray-900">
          <div className="col-span-3">
            <Card
              header={
                <AttributeTable
                  attribute={CATEGORY_FORMAT_TABLE.attribute}
                  toggleModal={toggleAddModal}
                />
              }
              cols={1}
            >
              <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <Table
                  attribute={CATEGORY_FORMAT_TABLE.attribute}
                  thead={CATEGORY_FORMAT_TABLE.th}
                  toggleModal={toggleEditModal}
                >
                  {DataTable.categories.map((item, index) => (
                    <tr
                      className="hover:bg-gray-100 dark:hover:bg-gray-700"
                      key={item.id}
                    >
                      <TableFeature
                        attribute={CATEGORY_FORMAT_TABLE.attribute}
                        index={index}
                      />
                      <td className="max-w-sm p-4 overflow-hidden text-base font-normal text-gray-500 truncate xl:max-w-xs dark:text-gray-400">
                        {item.category}
                      </td>
                      <td className="max-w-sm p-4 overflow-hidden text-base font-normal text-gray-500 truncate xl:max-w-xs dark:text-gray-400">
                        {item.slug}
                      </td>
                      <TableAction
                        attribute={CATEGORY_FORMAT_TABLE.attribute}
                        toggleModal={toggleEditModal}
                      />
                    </tr>
                  ))}
                </Table>
              </div>
            </Card>
          </div>

          {/* Modal */}
          {isAddModalOpen && (
            <Modal
              body={ADD_CATEGORY_FORMAT_MODAL}
              toggleModal={toggleAddModal}
            />
          )}
          {isEditModalOpen && (
            <Modal
              body={EDIT_CATEGORY_FORMAT_MODAL}
              toggleModal={toggleEditModal}
            />
          )}
        </div>
      </PanelLayout>
    </>
  );
};

export default Category;
