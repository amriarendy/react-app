import Layout from "../../../components/templates/panel/layouts";
import LayoutCardView from "../../../components/templates/panel/templates/LayoutCardView";

const LayoutCardPage = () => {
  return (
    <>
      <Layout>
        <section className="min-h-screen bg-gray-100 dark:bg-gray-900">
          <LayoutCardView />
        </section>
      </Layout>
    </>
  );
};

export default LayoutCardPage;
