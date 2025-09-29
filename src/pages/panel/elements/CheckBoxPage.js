import Layout from "../../../components/templates/panel/layouts";
import CheckBoxView from "../../../components/templates/panel/elements/CheckBoxView";

const CheckBoxPage = () => {
  return (
    <>
      <Layout>
        <section className="min-h-screen bg-gray-100 dark:bg-gray-900">
          <CheckBoxView />
        </section>
      </Layout>
    </>
  );
};

export default CheckBoxPage;
