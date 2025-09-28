import StoreDetail from "../../../components/templates/landingpage/store/StoreDetail";
import Layout from "../../../components/templates/landingpage/layouts";

const EcommerceDetailPage = () => {
  return (
    <>
      <Layout>
        <section className="bg-gray-50 antialiased dark:bg-gray-800">
          <StoreDetail />
        </section>
      </Layout>
    </>
  );
};

export default EcommerceDetailPage;
