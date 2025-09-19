import Layout from "../../../components/templates/panel/layouts";
import AddBlogView from "../../../components/templates/panel/blogs/AddBlogView";

const AddBlogPage = () => {
  return (
    <>
      <Layout>
        <section className="min-h-screen bg-gray-100 dark:bg-gray-900">
          <AddBlogView />
        </section>
      </Layout>
    </>
  );
};

export default AddBlogPage;
