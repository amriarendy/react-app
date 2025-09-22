import Breadcrumbs from "../../../molecules/breadcrumbs/Breadcrumbs";
import Card from "../../../organisms/panel/templates/Card";

const CardView = () => {
  const breadCrumbs = {
    page: "Blank",
    data: [
      { page: "Templates", route: "/dashboard/templates/blank" },
      { page: "Blank", route: "/dashboard/templates/blank" },
    ],
  };
  return (
    <>
      <Breadcrumbs breadCrumbs={breadCrumbs} />
      <Card />
    </>
  );
};

export default CardView;
