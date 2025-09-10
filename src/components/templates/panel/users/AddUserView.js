import Breadcrumbs from "../../../molecules/breadcrumbs/Breadcrumbs";
import Blank from "../../../organisms/panel/templates/Blank";

const AddUserView = () => {
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
      <Blank />
    </>
  );
};

export default AddUserView;
