import Breadcrumbs from "../../../elements/breadcrumbs/Breadcrumbs";
import Popup from "../../../organisms/panel/templates/Popup";

const PopupView = () => {
  const breadCrumbs = {
    page: "Pop Up",
    data: [
      { page: "Templates", route: "/dashboard/templates/popup" },
      { page: "Pop Up", route: "/dashboard/templates/popup" },
    ],
  };
  return (
    <>
      <Breadcrumbs breadCrumbs={breadCrumbs} />
      <div className="grid grid-cols-1 px-4 pt-6 lg:grid-cols-1 gap-4 mb-4">
        <Popup />
      </div>
    </>
  );
};

export default PopupView;
