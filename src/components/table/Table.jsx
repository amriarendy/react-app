import React from "react";

const Table = () => {
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto">
        <div className="inline-block min-w-full align-middle">
          <div className="overflow-hidden shadow">
            <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-600">
              <thead className="bg-gray-100 dark:bg-gray-700">
                <tr>
                  <th scope="col" className="p-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-all"
                        aria-describedby="checkbox-1"
                        type="checkbox"
                        className="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label for="checkbox-all" className="sr-only">
                        checkbox
                      </label>
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
                  >
                    Biography
                  </th>
                  <th
                    scope="col"
                    className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
                  >
                    Position
                  </th>
                  <th
                    scope="col"
                    className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
                  >
                    Country
                  </th>
                  <th
                    scope="col"
                    className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                  <td className="w-4 p-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-{{ .id }}"
                        aria-describedby="checkbox-1"
                        type="checkbox"
                        className="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label for="checkbox-{{ .id }}" className="sr-only">
                        checkbox
                      </label>
                    </div>
                  </td>
                  <td className="flex items-center p-4 mr-12 space-x-6 whitespace-nowrap">
                    <img
                      className="w-10 h-10 rounded-full"
                      src="https://flowbite-admin-dashboard.vercel.app/images/users/neil-sims.png"
                      alt="avatar"
                    />
                    <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                      <div className="text-base font-semibold text-gray-900 dark:text-white">
                        Neil Sims
                      </div>
                      <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                        neil.sims@flowbite.com
                      </div>
                    </div>
                  </td>
                  <td className="max-w-sm p-4 overflow-hidden text-base font-normal text-gray-500 truncate xl:max-w-xs dark:text-gray-400">
                    I love working with React and Flowb
                  </td>
                  <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Front-end developer
                  </td>
                  <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {" "}
                    Spain
                  </td>
                  <td className="p-4 text-base font-normal text-gray-900 whitespace-nowrap dark:text-white">
                    <div className="flex items-center">
                      <div className="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div>
                      <div className="h-2.5 w-2.5 rounded-full bg-red-500 mr-2"></div>
                    </div>
                  </td>
                  <td className="p-4 space-x-2 whitespace-nowrap">
                    <button
                      type="button"
                      data-modal-target="edit-user-modal"
                      data-modal-toggle="edit-user-modal"
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path>
                        <path
                          fillRule="evenodd"
                          d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      Edit user
                    </button>
                    <button
                      type="button"
                      data-modal-target="delete-user-modal"
                      data-modal-toggle="delete-user-modal"
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900"
                    >
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      Delete user
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            <nav
              className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4"
              aria-label="Table navigation"
            >
              <span className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">
                Showing{" "}
                <span className="font-semibold text-gray-900 dark:text-white">
                  1-10
                </span>{" "}
                of{" "}
                <span className="font-semibold text-gray-900 dark:text-white">
                  1000
                </span>
              </span>
              <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    Previous
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    1
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    2
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    aria-current="page"
                    className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                  >
                    3
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    4
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    5
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
