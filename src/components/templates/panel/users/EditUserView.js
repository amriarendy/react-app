import Breadcrumbs from "../../../molecules/breadcrumbs/Breadcrumbs";
import EditUser from "../../../organisms/panel/users/EditUser";

const EditUserView = () => {
  const breadCrumbs = {
    page: "Edit User",
    data: [
      { page: "Templates", route: "/dashboard/templates/edit-user" },
      { page: "Edit User", route: "/dashboard/templates/edit-user" },
    ],
  };
  return (
    <>
      <Breadcrumbs breadCrumbs={breadCrumbs} />
      <EditUser />
    </>
  );
};

export default EditUserView;
