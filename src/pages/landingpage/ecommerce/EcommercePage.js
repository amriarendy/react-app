import StoreListView from "../../../components/templates/landingpage/store/StoreListView";
import Layout from "../../../components/templates/landingpage/layouts";

const EcommercePage = () => {
  return (
    <>
      <Layout>
        <section className="bg-gray-50 py-8 antialiased md:py-12 dark:bg-gray-800">
          <StoreListView />
        </section>
      </Layout>
    </>
  );
};

export default EcommercePage;
