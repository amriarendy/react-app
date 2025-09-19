import Layout from "../../../components/templates/panel/layouts";
import BlogView from "../../../components/templates/panel/blogs/BlogView";

const BlogPage = () => {
  return (
    <>
      <Layout>
        <section className="min-h-screen bg-gray-100 dark:bg-gray-900">
          <BlogView />
        </section>
      </Layout>
    </>
  );
};

export default BlogPage;
