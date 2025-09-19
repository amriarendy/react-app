import Layout from "../../../components/templates/panel/layouts";
import EditBlogView from "../../../components/templates/panel/blogs/EditBlogView";

const EditBlogPage = () => {
  return (
    <>
      <Layout>
        <section className="min-h-screen bg-gray-100 dark:bg-gray-900">
          <EditBlogView />
        </section>
      </Layout>
    </>
  );
};

export default EditBlogPage;
