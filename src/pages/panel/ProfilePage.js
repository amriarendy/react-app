import Layout from "../../components/templates/panel/layouts";
import ProfileView from "../../components/templates/panel/ProfileView";

const ProfilePage = () => {
  return (
    <>
      <Layout>
        <section className="min-h-screen bg-gray-100 dark:bg-gray-900">
          <ProfileView />
        </section>
      </Layout>
    </>
  );
};

export default ProfilePage;
