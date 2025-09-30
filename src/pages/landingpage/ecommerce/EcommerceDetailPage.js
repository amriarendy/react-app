import StoreDetailView from "../../../components/templates/landingpage/store/StoreDetailView";
import Layout from "../../../components/templates/landingpage/layouts";

const EcommerceDetailPage = () => {
  return (
    <>
      <Layout>
        <section className="bg-gray-50 antialiased dark:bg-gray-800">
          <StoreDetailView />
        </section>
      </Layout>
    </>
  );
};

export default EcommerceDetailPage;
