import Breadcrumbs from "../../../molecules/breadcrumbs/Breadcrumbs";
import LayoutCard from "../../../organisms/panel/templates/LayoutCard";

const LayoutCardView = () => {
  const breadCrumbs = {
    page: "Layout and Card",
    data: [
      { page: "Templates", route: "/dashboard/templates/layout-card" },
      { page: "Layout and Card", route: "/dashboard/templates/layout-card" },
    ],
  };
  return (
    <>
      <Breadcrumbs breadCrumbs={breadCrumbs} />
      <LayoutCard />
    </>
  );
};

export default LayoutCardView;
