import PanelLayout from "../PanelLayout";
import UserView from "../../../components/templates/panel/users/UserView";

const UserPage = () => {
  return (
    <>
      <PanelLayout>
        <section className="min-h-screen bg-gray-100 dark:bg-gray-900">
          <UserView />
        </section>
      </PanelLayout>
    </>
  );
};

export default UserPage;
