import PanelLayout from "../PanelLayout";
import Breadcrumbs from "../../../components/molecules/breadcrumbs/Breadcrumbs";
import Paginate from "../../../components/molecules/pagination/Paginate";
import PaginatePrevNext from "../../../components/molecules/pagination/PaginatePrevNext";
import PaginateArrow from "../../../components/molecules/pagination/PaginateArrow";
import ShowEntries from "../../../components/molecules/pagination/ShowEntries";

const Pagination = () => {
  const breadCrumbs = {
    page: "Pagination",
    data: [
      { page: "Templates", route: "/dashboard/templates/pagination" },
      { page: "Pagination", route: "/dashboard/templates/pagination" },
    ],
  };
  return (
    <>
      <PanelLayout>
        <Breadcrumbs breadCrumbs={breadCrumbs} />
        <div className="grid grid-cols-1 px-4 pt-6 lg:grid-cols-1 gap-4 mb-4 dark:bg-gray-900">
          {/* Paginate */}
          <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
            <div className="px-4 py-5 sm:p-6 font-semibold">Paginate</div>
            <div className="px-4 py-5 sm:p-6">
              <Paginate />
            </div>
          </div>
          {/* Paginate Prev, Next */}
          <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
            <div className="px-4 py-5 sm:p-6 font-semibold">
              Paginate Prev, Next
            </div>
            <div className="px-4 py-5 sm:p-6">
              <div className="sticky bottom-0 right-0 items-center w-full p-4 bg-white border-gray-200 sm:flex sm:justify-between dark:bg-gray-800 dark:border-gray-700">
                <ShowEntries />
                <PaginatePrevNext />
              </div>
            </div>
          </div>
          {/* Paginate Arrow */}
          <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
            <div className="px-4 py-5 sm:p-6 font-semibold">Paginate Arrow</div>
            <div className="px-4 py-5 sm:p-6">
              <div className="sticky bottom-0 right-0 items-center w-full p-4 bg-white border-gray-200 sm:flex sm:justify-between dark:bg-gray-800 dark:border-gray-700">
                <ShowEntries />
                <PaginateArrow />
              </div>
            </div>
          </div>
        </div>
      </PanelLayout>
    </>
  );
};

export default Pagination;
