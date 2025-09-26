import Breadcrumbs from "../../../elements/breadcrumbs/Breadcrumbs";
import Load from "../../../organisms/panel/templates/Load";

const LoadView = () => {
  const breadCrumbs = {
    page: "Load",
    data: [
      { page: "Templates", route: "/dashboard/templates/load" },
      { page: "Load", route: "/dashboard/templates/load" },
    ],
  };
  return (
    <>
      <Breadcrumbs breadCrumbs={breadCrumbs} />
      <Load />
    </>
  );
};

export default LoadView;
