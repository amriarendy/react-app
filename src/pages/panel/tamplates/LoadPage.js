import Layout from "../../../components/templates/panel/layouts";
import LoadView from "../../../components/templates/panel/templates/LoadView";

const LoadPage = () => {
  return (
    <>
      <Layout>
        <section className="min-h-screen bg-gray-100 dark:bg-gray-900">
          <LoadView />
        </section>
      </Layout>
    </>
  );
};

export default LoadPage;
