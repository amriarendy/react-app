import { HiArrowSmUp } from "react-icons/hi";

const TabsWidget = () => {
  return (
    <>
      <div className="px-4 pt-6">
        <div className="grid w-full grid-cols-1 gap-4 mt-4 xl:grid-cols-2 2xl:grid-cols-3">
          <div className="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:border-gray-700 sm:p-6 dark:bg-gray-800">
            <div className="w-full">
              <h3 className="text-base font-normal text-gray-500 dark:text-gray-400">
                New products
              </h3>
              <span className="text-2xl font-bold leading-none text-gray-900 sm:text-3xl dark:text-white">
                2,340
              </span>
              <p className="flex items-center text-base font-normal text-gray-500 dark:text-gray-400">
                <span className="flex items-center mr-1.5 text-sm text-green-500 dark:text-green-400">
                  <HiArrowSmUp className="w-4 h-4" fill="currentColor" />
                  12.5%
                </span>
                Since last month
              </p>
            </div>
            <div className="w-full" id="new-products-chart"></div>
          </div>

          <div className="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:border-gray-700 sm:p-6 dark:bg-gray-800">
            <div className="w-full">
              <h3 className="text-base font-normal text-gray-500 dark:text-gray-400">
                New products
              </h3>
              <span className="text-2xl font-bold leading-none text-gray-900 sm:text-3xl dark:text-white">
                2,340
              </span>
              <p className="flex items-center text-base font-normal text-gray-500 dark:text-gray-400">
                <span className="flex items-center mr-1.5 text-sm text-green-500 dark:text-green-400">
                  <HiArrowSmUp className="w-4 h-4" fill="currentColor" />
                  12.5%
                </span>
                Since last month
              </p>
            </div>
            <div className="w-full" id="new-products-chart"></div>
          </div>

          <div className="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:border-gray-700 sm:p-6 dark:bg-gray-800">
            <div className="w-full">
              <h3 className="text-base font-normal text-gray-500 dark:text-gray-400">
                New products
              </h3>
              <span className="text-2xl font-bold leading-none text-gray-900 sm:text-3xl dark:text-white">
                2,340
              </span>
              <p className="flex items-center text-base font-normal text-gray-500 dark:text-gray-400">
                <span className="flex items-center mr-1.5 text-sm text-green-500 dark:text-green-400">
                  <HiArrowSmUp className="w-4 h-4" fill="currentColor" />
                  12.5%
                </span>
                Since last month
              </p>
            </div>
            <div className="w-full" id="new-products-chart"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TabsWidget;
