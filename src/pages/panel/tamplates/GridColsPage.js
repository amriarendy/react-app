import Layout from "../../../components/templates/panel/layouts";
import GridColsView from "../../../components/templates/panel/templates/GridColsVies";

const GridColsPage = () => {
  const breadCrumbs = {
    page: "Grid and Cols",
    data: [
      { page: "Templates", route: "/dashboard/templates/grid-cols" },
      { page: "Grid and Cols", route: "/dashboard/templates/grid-cols" },
    ],
  };
  return (
    <>
      <Layout>
        <section className="min-h-screen bg-gray-100 dark:bg-gray-900">
          <GridColsView />
        </section>
      </Layout>
    </>
  );
};

export default GridColsPage;
