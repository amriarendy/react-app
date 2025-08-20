import Breadcrumbs from "../../../molecules/breadcrumbs/Breadcrumbs";
import Alert from "../../../organisms/panel/templates/Alert";

const AlertView = () => {
  const breadCrumbs = {
    page: "Alerts",
    data: [
      { page: "Templates", route: "/dashboard/templates/alerts" },
      { page: "Alerts", route: "/dashboard/templates/alerts" },
    ],
  };
  return (
    <div>
      <Breadcrumbs breadCrumbs={breadCrumbs} />
      <Alert />
    </div>
  );
};

export default AlertView;
