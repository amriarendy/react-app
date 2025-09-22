import Layout from "../../../components/templates/panel/layouts";
import ErrorView from "../../../components/templates/panel/templates/ErrorView";

const ErrorPage = () => {
  return (
    <>
      <Layout>
        <section className="min-h-screen bg-gray-100 dark:bg-gray-900">
          <ErrorView />
        </section>
      </Layout>
    </>
  );
};

export default ErrorPage;
