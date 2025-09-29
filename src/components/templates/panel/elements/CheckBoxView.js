import Breadcrumbs from "../../../elements/breadcrumbs/Breadcrumbs";
import CheckBoxElement from "../../../organisms/panel/elements/checkbox/CheckBoxElement";

const CheckBoxView = () => {
  const breadCrumbs = {
    page: "Blank",
    data: [
      { page: "Elements", route: "/dashboard/elements/blank" },
      { page: "Blank", route: "/dashboard/elements/blank" },
    ],
  };
  return (
    <>
      <Breadcrumbs breadCrumbs={breadCrumbs} />
      <CheckBoxElement />
    </>
  );
};

export default CheckBoxView;
