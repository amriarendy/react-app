import React, { useState } from "react";
import Layout from "../../../components/templates/panel/layouts";
import Breadcrumbs from "../../../components/molecules/breadcrumbs/Breadcrumbs";
import AttributeTable from "../../../components/organisms/table/default/AttributeTable";
import Table from "../../../components/organisms/table/default/Table";
import Thead from "../../../components/organisms/table/default/Thead";
import Tfoot from "../../../components/organisms/table/default/Tfoot";
import Taction from "../../../components/organisms/table/default/Taction";
import {
  TABLE_DEFAULT_FORMAT,
  ADD_TABLE_DEFAULT_FORMAT,
} from "../../../libs/constants/formats/TableTemplate";
import useDummy from "../../../hooks/useDummy";
import Modal from "../../../components/molecules/modal/Modal";

const TableDefault = () => {
  const breadCrumbs = {
    page: "Table Default",
    data: [
      { page: "Templates", route: "/dashboard/templates/table-default" },
      { page: "Table Default", route: "/dashboard/templates/table-default" },
    ],
  };

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const toggleAddModal = () => {
    setIsAddModalOpen(!isAddModalOpen);
  };

  const { data, loading, error } = useDummy("products");

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const columns = data && data.length > 0 ? data : <p>Data Not Found..</p>;

  return (
    <>
      <Layout>
        <Breadcrumbs breadCrumbs={breadCrumbs} />
        <div className="mx-auto max-w-screen-xl mb-4 px-4 lg:px-12">
          <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
            <AttributeTable
              attribute={TABLE_DEFAULT_FORMAT.attribute}
              toggleModal={toggleAddModal}
            />
            <Table>
              <Thead
                thead={TABLE_DEFAULT_FORMAT.th}
                attribute={TABLE_DEFAULT_FORMAT.attribute}
              />
              <tbody>
                {data.length > 0 ? (
                  data.map((item, index) => (
                    <tr key={item.id} className="border-b dark:border-gray-700">
                      <td className="px-4 py-3">{index + 1}</td>
                      <td className="px-4 py-3">{item.product}</td>
                      <td className="px-4 py-3">{item.category}</td>
                      <td className="px-4 py-3">{item.technology}</td>
                      <td className="max-w-sm p-4 overflow-hidden text-base font-normal text-gray-500 truncate xl:max-w-xs dark:text-gray-400">
                        {item.description}
                      </td>
                      <td className="px-4 py-3">${item.price}</td>
                      <Taction
                        index={index}
                        taction={item}
                        attribute={TABLE_DEFAULT_FORMAT.attribute}
                      />
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={7} className="px-4 py-3 text-center">
                      Data Not Found
                    </td>
                  </tr>
                )}
              </tbody>
            </Table>
            <Tfoot />
          </div>
        </div>
        {/* Modal */}
        {isAddModalOpen && (
          <Modal body={ADD_TABLE_DEFAULT_FORMAT} toggleModal={toggleAddModal} />
        )}
      </Layout>
    </>
  );
};

export default TableDefault;
