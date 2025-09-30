import Layout from "../../../components/templates/landingpage/layouts";
import BlogListView from "../../../components/templates/landingpage/blogs/BlogListView";

const ArticlesPage = () => {
  return (
    <>
      <Layout>
        <section className="bg-gray-50 py-8 antialiased md:py-12 dark:bg-gray-800">
          <BlogListView />
        </section>
      </Layout>
    </>
  );
};

export default ArticlesPage;
