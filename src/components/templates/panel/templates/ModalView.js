import Breadcrumbs from "../../../elements/breadcrumbs/Breadcrumbs";
import ModalExample from "../../../organisms/panel/templates/ModalExample";

const ModalView = () => {
  const breadCrumbs = {
    page: "Modal",
    data: [
      { page: "Templates", route: "/dashboard/templates/modal" },
      { page: "Modal", route: "/dashboard/templates/modal" },
    ],
  };
  return (
    <>
      <Breadcrumbs breadCrumbs={breadCrumbs} />
      <ModalExample />
    </>
  );
};

export default ModalView;
