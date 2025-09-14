import Layout from "../../components/templates/panel/layouts";
import Banner from "../../components/molecules/profile/Banner";

const DashboardPage = () => {
  return (
    <>
      <Layout>
        <section className="bg-white dark:bg-gray-900">
          <Banner />
        </section>
      </Layout>
    </>
  );
};

export default DashboardPage;
