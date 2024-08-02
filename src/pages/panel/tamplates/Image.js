import PanelLayout from "../PanelLayout";
import Breadcrumbs from "../../../components/breadcrumbs/Breadcrumbs";

const Image = () => {
  const breadCrumbs = {
    page: "Images",
    data: [
      { page: "Templates", route: "/templates/image" },
      { page: "Images", route: "/templates/image" },
    ],
  };
  return (
    <>
      <PanelLayout>
        <Breadcrumbs breadCrumbs={breadCrumbs} />
        <div className="grid grid-cols-4 px-4 pt-6 gap-4 mb-4 dark:bg-gray-900">
            <div class="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-1 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
                <div className="items-center sm:flex xl:block 2xl:flex sm:space-x-4 xl:space-x-0 2xl:space-x-4">
                    <img class="mb-4 w-28 h-28 sm:mb-0 xl:mb-4 2xl:mb-0" src="https://flowbite-admin-dashboard.vercel.app/images/users/bonnie-green-2x.png" alt="Jese picture" />
                    <div>
                    <h3 class="mb-1 text-xl font-semibold text-gray-900 dark:text-white">Image Square</h3>
                    <div class="mb-4 text-sm text-gray-500 dark:text-gray-400">
                        img: mb-4 w-28 h-28 sm:mb-0 xl:mb-4 2xl:mb-0
                    </div>
                    </div>
                </div>
            </div>
            <div class="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-1 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
                <div className="items-center sm:flex xl:block 2xl:flex sm:space-x-4 xl:space-x-0 2xl:space-x-4">
                    <img class="mb-4 rounded-xl w-28 h-28 sm:mb-0 xl:mb-4 2xl:mb-0" src="https://flowbite-admin-dashboard.vercel.app/images/users/bonnie-green-2x.png" alt="Jese picture" />
                    <div>
                    <h3 class="mb-1 text-xl font-semibold text-gray-900 dark:text-white">Image Rounded</h3>
                    <div class="mb-4 text-sm text-gray-500 dark:text-gray-400">
                        img: mb-4 rounded-xl w-28 h-28 sm:mb-0 xl:mb-4 2xl:mb-0
                    </div>
                    </div>
                </div>
            </div>
            <div class="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-1 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
                <div className="items-center sm:flex xl:block 2xl:flex sm:space-x-4 xl:space-x-0 2xl:space-x-4">
                    <img class="mb-4 rounded-full w-28 h-28 sm:mb-0 xl:mb-4 2xl:mb-0" src="https://flowbite-admin-dashboard.vercel.app/images/users/bonnie-green-2x.png" alt="Jese picture" />
                    <div>
                    <h3 class="mb-1 text-xl font-semibold text-gray-900 dark:text-white">Image Circle</h3>
                    <div class="mb-4 text-sm text-gray-500 dark:text-gray-400">
                        img: mb-4 rounded-full w-28 h-28 sm:mb-0 xl:mb-4 2xl:mb-0
                    </div>
                    </div>
                </div>
            </div>
            <div class="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-1 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
                
            </div>
            <div class="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-1 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
                
            </div>
        </div>
      </PanelLayout>
    </>
  );
};

export default Image;
