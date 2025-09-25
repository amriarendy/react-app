import Layout from "../../../components/templates/panel/layouts";
import ModalView from "../../../components/templates/panel/templates/ModalView";

const ModalPage = () => {
  return (
    <>
      <Layout>
        <section className="min-h-screen bg-gray-100 dark:bg-gray-900">
          <ModalView />
        </section>
      </Layout>
    </>
  );
};

export default ModalPage;
