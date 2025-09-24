import Breadcrumbs from "../../../elements/breadcrumbs/Breadcrumbs";
import useDummy from "../../../../hooks/useDummy";
import Test from "../../../organisms/panel/templates/Test";

const TestView = () => {
  const breadCrumbs = {
    page: "Test Page",
    data: [
      { page: "Templates", route: "/dashboard/templates/test" },
      { page: "Test Page", route: "/dashboard/templates/test" },
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
        <Test data={data} />
      </div>
    </>
  );
};

export default TestView;
