import Breadcrumbs from "../../../elements/breadcrumbs/Breadcrumbs";
import Paginate from "../../../organisms/panel/templates/Paginate";

const PaginateView = () => {
  const breadCrumbs = {
    page: "Paginate",
    data: [
      { page: "Templates", route: "/dashboard/templates/paginate" },
      { page: "Paginate", route: "/dashboard/templates/paginate" },
    ],
  };
  return (
    <>
      <Breadcrumbs breadCrumbs={breadCrumbs} />
      <Paginate />
    </>
  );
};

export default PaginateView;
