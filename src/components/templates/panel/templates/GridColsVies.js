import Breadcrumbs from "../../../elements/breadcrumbs/Breadcrumbs";
import GridCols from "../../../organisms/panel/templates/GridCols";

const GridColsView = () => {
  const breadCrumbs = {
    page: "Grid and Cols",
    data: [
      { page: "Templates", route: "/dashboard/templates/grid-cols" },
      { page: "GridC and Cols", route: "/dashboard/templates/grid-cols" },
    ],
  };
  return (
    <>
      <Breadcrumbs breadCrumbs={breadCrumbs} />
      <GridCols />
    </>
  );
};

export default GridColsView;
