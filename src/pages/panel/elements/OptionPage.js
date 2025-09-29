import Layout from "../../../components/templates/panel/layouts";
import OptionView from "../../../components/templates/panel/elements/OptionView";

const OptionPage = () => {
  return (
    <>
      <Layout>
        <section className="min-h-screen bg-gray-100 dark:bg-gray-900">
          <OptionView />
        </section>
      </Layout>
    </>
  );
};

export default OptionPage;
