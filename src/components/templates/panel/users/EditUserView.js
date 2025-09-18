import Breadcrumbs from "../../../molecules/breadcrumbs/Breadcrumbs";
import EditUser from "../../../organisms/panel/users/EditUser";

const EditUserView = () => {
  const breadCrumbs = {
    page: "Edit User",
    data: [
      { page: "Users", route: "/dashboard/users" },
      { page: "Edit Users", route: "/dashboard/users/edit-user" },
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
