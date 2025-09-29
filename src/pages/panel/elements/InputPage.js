import Layout from "../../../components/templates/panel/layouts";
import InputView from "../../../components/templates/panel/elements/InputView";

const InputPage = () => {
  return (
    <>
      <Layout>
        <section className="min-h-screen bg-gray-100 dark:bg-gray-900">
          <InputView />
        </section>
      </Layout>
    </>
  );
};

export default InputPage;
