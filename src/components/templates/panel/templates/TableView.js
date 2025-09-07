import Table from "../../../organisms/panel/templates/Table";
import Breadcrumbs from "../../../molecules/breadcrumbs/Breadcrumbs";
import useDummy from "../../../../hooks/useDummy";

const TableView = () => {
  const breadCrumbs = {
    page: "Table",
    data: [
      { page: "Templates", route: "/dashboard/templates/table" },
      { page: "Table", route: "/dashboard/templates/table" },
    ],
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
        <Table data={data} />
      </div>
    </>
  );
};

export default TableView;
