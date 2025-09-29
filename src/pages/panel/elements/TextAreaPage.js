import Layout from "../../../components/templates/panel/layouts";
import TextAreaView from "../../../components/templates/panel/elements/TextAreaView";

const TextAreaPage = () => {
  return (
    <>
      <Layout>
        <section className="min-h-screen bg-gray-100 dark:bg-gray-900">
          <TextAreaView />
        </section>
      </Layout>
    </>
  );
};

export default TextAreaPage;
