import { useState } from "react";
import Table from "../../../elements/tables";
import Breadcrumbs from "../../../molecules/breadcrumbs/Breadcrumbs";
import useDummy from "../../../../hooks/useDummy";
import Button from "../../../elements/button/Button";
import Modal from "../../../../components/molecules/modal/Modal";
import Test from "../../../organisms/panel/templates/Test";

const TestView = () => {
  const breadCrumbs = {
    page: "Test Page",
    data: [
      { page: "Templates", route: "/dashboard/templates/test" },
      { page: "Test Page", route: "/dashboard/templates/test" },
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
      <Breadcrumbs breadCrumbs={breadCrumbs} />
      <div className="grid grid-cols-1 px-4 pt-6 lg:grid-cols-1 gap-4 mb-4">
        <Test />
        <Table>
          <thead className="bg-gray-200 dark:bg-gray-800">
            <tr>
              <th
                scope="col"
                className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold sm:pl-6"
              >
                No
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold"
              >
                Product
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold"
              >
                Category
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold"
              >
                Brand
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold"
              >
                Price
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold"
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-700">
            {data.length > 0 ? (
              data.map((item, index) => (
                <tr key={item.id} className="border-b dark:border-gray-800">
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium sm:pl-6">
                    {index + 1}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm">
                    {item.product}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm">
                    {item.category}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm">
                    {item.technology}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm">
                    ${item.price}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 space-x-2 text-sm">
                    <Button
                      id={"btnEditProduct"}
                      type={"button"}
                      classname={
                        "inline-flex items-center px-2 py-1 text-white bg-indigo-700 hover:bg-indigo-500"
                      }
                    >
                      Edit
                    </Button>
                    <Button
                      id={"btnDeleteProduct"}
                      type={"button"}
                      classname={
                        "inline-flex items-center px-2 py-1 text-white bg-red-700 hover:bg-red-500"
                      }
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={7}
                  className="whitespace-nowrap px-3 py-4 text-sm text-center"
                >
                  Data Not Found
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default TestView;
