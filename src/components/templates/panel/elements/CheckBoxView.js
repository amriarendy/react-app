import Breadcrumbs from "../../../elements/breadcrumbs/Breadcrumbs";
import CheckBox from "../../../organisms/panel/elements/checkbox";

const CheckBoxView = () => {
  const breadCrumbs = {
    page: "Checkbox",
    data: [
      { page: "Elements", route: "/dashboard/elements/checkbox" },
      { page: "Checkbox", route: "/dashboard/elements/checkbox" },
    ],
  };
  return (
    <>
      <Breadcrumbs breadCrumbs={breadCrumbs} />
      <CheckBox />
    </>
  );
};

export default CheckBoxView;
