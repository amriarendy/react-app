import Layout from "../../../components/templates/panel/layouts";
import ButtonView from "../../../components/templates/panel/elements/ButtonView";

const ButtonPage = () => {
  return (
    <>
      <Layout>
        <section className="min-h-screen bg-gray-100 dark:bg-gray-900">
          <ButtonView />
        </section>
      </Layout>
    </>
  );
};

export default ButtonPage;
