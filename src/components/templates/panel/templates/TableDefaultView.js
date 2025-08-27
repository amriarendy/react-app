import Breadcrumbs from "../../../molecules/breadcrumbs/Breadcrumbs";
import Table from "../../../organisms/table/default/Table";

const TableDefaultView = () => {
  const breadCrumbs = {
    page: "Table Default",
    data: [
      { page: "Templates", route: "/dashboard/templates/table-default" },
      { page: "Table Default", route: "/dashboard/templates/table-default" },
    ],
  };
  return (
    <>
      <Breadcrumbs breadCrumbs={breadCrumbs} />
        <div className="grid grid-cols-1 px-4 pt-6 xl:grid-cols-1 mx-auto max-w-2xl xl:gap-4 dark:bg-gray-900">
          <Table />
        </div>
    </>
  );
};

export default TableDefaultView;
