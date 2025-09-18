import Layout from "../../../components/templates/panel/layouts";
import FormView from "../../../components/templates/panel/templates/FormView";

const FormPage = () => {
  return (
    <>
      <Layout>
        <section className="min-h-screen bg-gray-100 dark:bg-gray-900">
          <FormView />
        </section>
      </Layout>
    </>
  );
};

export default FormPage;
