import Layout from "../../../components/templates/panel/layouts";
import UserView from "../../../components/templates/panel/users/UserView";

const UserPage = () => {
  return (
    <>
      <Layout>
        <section className="min-h-screen bg-gray-100 dark:bg-gray-900">
          <UserView />
        </section>
      </Layout>
    </>
  );
};

export default UserPage;
