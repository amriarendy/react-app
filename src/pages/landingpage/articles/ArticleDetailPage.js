import BlogDetailView from "../../../components/templates/landingpage/blogs/BlogDetailView";
import Layout from "../../../components/templates/landingpage/layouts";

const ArticleDetailPage = () => {
  return (
    <>
      <Layout>
        <section className="bg-white px-6 py-16 lg:px-8 dark:bg-gray-800">
          <BlogDetailView />
        </section>
      </Layout>
    </>
  );
};

export default ArticleDetailPage;
