import Layout from "../../../components/templates/panel/layouts";
import PaginateView from "../../../components/templates/panel/templates/PaginateView";

const PaginatePage = () => {
  return (
    <>
      <Layout>
        <section className="min-h-screen bg-gray-100 dark:bg-gray-900">
          <PaginateView />
        </section>
      </Layout>
    </>
  );
};

export default PaginatePage;
