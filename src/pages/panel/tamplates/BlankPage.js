import Layout from "../../../components/templates/panel/layouts";
import BlankView from "../../../components/templates/panel/templates/BlankView";

const BlankPage = () => {
  return (
    <>
      <Layout>
        <section className="min-h-screen bg-gray-100 dark:bg-gray-900">
          <BlankView />
        </section>
      </Layout>
    </>
  );
};

export default BlankPage;
