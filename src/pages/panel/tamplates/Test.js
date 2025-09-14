import Layout from "../../../components/templates/panel/layouts";
import TestView from "../../../components/templates/panel/templates/TestView";

const BlankPage = () => {
  return (
    <>
      <Layout>
        <section className="min-h-screen bg-gray-100 dark:bg-gray-900">
          <TestView />
        </section>
      </Layout>
    </>
  );
};

export default BlankPage;
