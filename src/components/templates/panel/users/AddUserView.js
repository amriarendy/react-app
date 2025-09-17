import Breadcrumbs from "../../../molecules/breadcrumbs/Breadcrumbs";
import AddUser from "../../../organisms/panel/users/AddUser";

const AddUserView = () => {
  const breadCrumbs = {
    page: "Add User",
    data: [
      { page: "Templates", route: "/dashboard/templates/add-user" },
      { page: "Add User", route: "/dashboard/templates/add-user" },
    ],
  };
  return (
    <>
      <Breadcrumbs breadCrumbs={breadCrumbs} />
      <AddUser />
    </>
  );
};

export default AddUserView;
