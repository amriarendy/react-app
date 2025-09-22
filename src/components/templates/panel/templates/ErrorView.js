import Breadcrumbs from "../../../molecules/breadcrumbs/Breadcrumbs";
import Error from "../../../organisms/panel/templates/Error"

const ErrorView = () => {
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
      <Error />
    </>
  );
};

export default ErrorView;
