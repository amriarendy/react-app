import Layout from "../../../components/templates/panel/layouts";
import AddUserView from "../../../components/templates/panel/users/AddUserView";

const AddUserPage = () => {
  return (
    <>
      <Layout>
        <section className="min-h-screen bg-gray-100 dark:bg-gray-900">
          <AddUserView />
        </section>
      </Layout>
    </>
  );
};

export default AddUserPage;
