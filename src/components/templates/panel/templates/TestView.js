
import { useState } from "react";
import Table from "../../../elements/tables";
import Breadcrumbs from "../../../molecules/breadcrumbs/Breadcrumbs";
import useDummy from "../../../../hooks/useDummy";
import Modal from "../../../../components/molecules/modal/Modal";

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
        <Table>
                        <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Name</th>
                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Title</th>
                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Email</th>
                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Role</th>
                            <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                            <span className="sr-only">Edit</span>
                            </th>
                        </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 bg-white">
                        {data.length > 0 ? (
                  data.map((item, index) => (
                    <tr key={item.id} className="border-b dark:border-gray-700">
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{index + 1}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item.product}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item.category}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item.technology}</td>
                      <td className="max-w-sm p-4 overflow-hidden text-base font-normal text-gray-500 truncate xl:max-w-xs dark:text-gray-400">
                        {item.description}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">${item.price}</td>
                      <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                        <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit<span class="sr-only">, Lindsay Walton</span></a>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={7} className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center">
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
