import Breadcrumbs from "../../../molecules/breadcrumbs/Breadcrumbs";
import AddUser from "../../../organisms/panel/users/AddUser";

const AddUserView = () => {
  const breadCrumbs = {
    page: "Add User",
    data: [
      { page: "Users", route: "/dashboard/users" },
      { page: "Add Users", route: "/dashboard/users/add-user" },
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
