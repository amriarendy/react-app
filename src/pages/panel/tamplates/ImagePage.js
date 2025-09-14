import Layout from "../../../components/templates/panel/layouts";
import ImageView from "../../../components/templates/panel/templates/ImageView";

const ImagePage = () => {
  return (
    <>
      <Layout>
        <section className="min-h-screen bg-gray-100 dark:bg-gray-900">
          <ImageView />
        </section>
      </Layout>
    </>
  );
};

export default ImagePage;
