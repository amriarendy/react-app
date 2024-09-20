import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
import PanelLayout from "./PanelLayout";

const Profile = () => {
  const breadCrumbs = {
    page: "Profile",
    data: [{ page: "Profile", route: "/dashboard/profile" }],
  };
  return (
    <>
      <PanelLayout>
        <Breadcrumbs breadCrumbs={breadCrumbs} />
        <div className="grid grid-cols-1 px-4 pt-6 xl:grid-cols-3 xl:gap-4 dark:bg-gray-900">
          WRITE YOUR HOLLY CONTENT HERE
        </div>
      </PanelLayout>
    </>
  );
};

export default Profile;
