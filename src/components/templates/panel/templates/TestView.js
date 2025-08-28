import Breadcrumbs from "../../../molecules/breadcrumbs/Breadcrumbs";
import Blank from "../../../organisms/panel/templates/Blank";
import TableSimple from "../../../organisms/panel/templates/TableSimple";

const TestView = () => {
  const breadCrumbs = {
    page: "Test Page",
    data: [
      { page: "Templates", route: "/dashboard/templates/test" },
      { page: "Test Page", route: "/dashboard/templates/test" },
    ],
  };
  return (
    <>
      <Breadcrumbs breadCrumbs={breadCrumbs} />
      <TableSimple />
    </>
  );
};

export default TestView;
