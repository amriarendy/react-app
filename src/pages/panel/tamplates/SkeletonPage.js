import Layout from "../../../components/templates/panel/layouts";
import SkeletonView from "../../../components/templates/panel/templates/SkeletonView";

const SkeletonPage = () => {
  return (
    <>
      <Layout>
        <section className="min-h-screen bg-gray-100 dark:bg-gray-900">
          <SkeletonView />
        </section>
      </Layout>
    </>
  );
};

export default SkeletonPage;
