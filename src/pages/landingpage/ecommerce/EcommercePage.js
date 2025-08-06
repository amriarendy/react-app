import StoreList from "../../../components/templates/landingpage/store/StoreList";
import Layout from "../../Layout";
import BlogList from "../../../components/templates/landingpage/blogs/BlogList";

const EcommercePage = () => {
  return (
    <>
      <Layout>
        <section className="bg-gray-50 py-8 antialiased md:py-12 dark:bg-gray-800">
          <StoreList />
        </section>
      </Layout>
    </>
  );
};

export default EcommercePage;
