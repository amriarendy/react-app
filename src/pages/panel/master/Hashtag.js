import React, { useState } from "react";
import Breadcrumbs from "../../../components/breadcrumbs/Breadcrumbs";
import Card from "../../../components/card/Card";
import AttributeTable from "../../../components/table/AttributeTable";
import {
  ADD_HASTAG_FORMAT_MODAL,
  EDIT_HASTAG_FORMAT_MODAL,
  HASHTAG_FORMAT_TABLE,
} from "../../../libs/constants/formats/TagFormat";
import PanelLayout from "../PanelLayout";
import Table from "../../../components/table/Table";
import DataTable from "../../../dummy.json";
import TableFeature from "../../../components/table/TableFeature";
import TableAction from "../../../components/table/TableAction";
import Modal from "../../../components/modal/Modal";

const Hashtag = () => {
  const breadCrumbs = {
    page: "Hashtag",
    data: [
      { page: "Hashtag", route: "/master/hashtag" },
      { page: "List", route: "/master/hashtag" },
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
                attribute={HASHTAG_FORMAT_TABLE.attribute}
                toggleModal={toggleAddModal}
              />
            }
            cols={1}
          >
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <Table
                attribute={HASHTAG_FORMAT_TABLE.attribute}
                thead={HASHTAG_FORMAT_TABLE.th}
                toggleModal={toggleEditModal}
              >
                {DataTable.tags.map((item, index) => (
                  <tr
                    className="hover:bg-gray-100 dark:hover:bg-gray-700"
                    key={item.id}
                  >
                    <TableFeature
                      attribute={HASHTAG_FORMAT_TABLE.attribute}
                      index={index}
                    />
                    <td className="max-w-sm p-4 overflow-hidden text-base font-normal text-gray-500 truncate xl:max-w-xs dark:text-gray-400">
                      {item.tag}
                    </td>
                    <TableAction
                      attribute={HASHTAG_FORMAT_TABLE.attribute}
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
          <Modal body={ADD_HASTAG_FORMAT_MODAL} toggleModal={toggleAddModal} />
        )}
        {isEditModalOpen && (
          <Modal
            body={EDIT_HASTAG_FORMAT_MODAL}
            toggleModal={toggleEditModal}
          />
        )}
      </PanelLayout>
    </>
  );
};

export default Hashtag;
