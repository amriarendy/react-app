import Breadcrumbs from "../../../elements/breadcrumbs/Breadcrumbs";
import Loading from "../../../organisms/panel/templates/Skeleton";

const SkeletonView = () => {
  const breadCrumbs = {
    page: "Skeleton",
    data: [
      { page: "Templates", route: "/dashboard/templates/loading" },
      { page: "Skeleton", route: "/dashboard/templates/loading" },
    ],
  };
  return (
    <>
      <Breadcrumbs breadCrumbs={breadCrumbs} />
      <Loading />
    </>
  );
};

export default SkeletonView;
