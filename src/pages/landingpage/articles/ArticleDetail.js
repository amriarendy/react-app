import BlogDetail from "../../../components/templates/landingpage/blogs/BlogDetail";
import Layout from "../../Layout";

const ArticleDetail = () => {
  return (
    <>
      <Layout>
        <section className="bg-white px-6 py-16 lg:px-8 dark:bg-gray-800">
          <BlogDetail />
        </section>
      </Layout>
    </>
  );
};

export default ArticleDetail;
