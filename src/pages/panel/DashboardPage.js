import Layout from "../../components/templates/panel/layouts";
import DashboardView from "../../components/templates/panel/DashboardView";

const DashboardPage = () => {
  return (
    <>
      <Layout>
        <section className="bg-white dark:bg-gray-900">
          <DashboardView />
        </section>
      </Layout>
    </>
  );
};

export default DashboardPage;
