import Layout from "../../../components/templates/panel/layouts";
import TagView from "../../../components/templates/panel/master/TagView";

const TagPage = () => {
  return (
    <>
      <Layout>
        <section className="min-h-screen bg-gray-100 dark:bg-gray-900">
          <TagView />
        </section>
      </Layout>
    </>
  );
};

export default TagPage;
