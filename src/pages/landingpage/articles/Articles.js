import Layout from "../../Layout";
import BlogList from "../../../components/templates/landingpage/blogs/BlogList";

const Articles = () => {
  return (
    <>
      <Layout>
        <section className="bg-gray-50 py-8 antialiased md:py-12 dark:bg-gray-800">
          <BlogList />
        </section>
      </Layout>
    </>
  );
};

export default Articles;
