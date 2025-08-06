import BuildAppView from "../../components/templates/landingpage/BuildAppView";
import Layout from "../Layout";

const BuildAppPage = () => {
  return (
    <>
      <Layout>
        <section className="bg-gray-50 py-8 antialiased md:py-12 dark:bg-gray-800">
          <BuildAppView />
        </section>
      </Layout>
    </>
  );
};

export default BuildAppPage;
