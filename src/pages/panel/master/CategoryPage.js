import Layout from "../../../components/templates/panel/layouts";
import CategoryView from "../../../components/templates/panel/master/CategoryView";

const CategoryPage = () => {
  return (
    <>
      <Layout>
        <section className="min-h-screen bg-gray-100 dark:bg-gray-900">
          <CategoryView />
        </section>
      </Layout>
    </>
  );
};

export default CategoryPage;
