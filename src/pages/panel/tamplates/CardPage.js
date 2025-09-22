import Layout from "../../../components/templates/panel/layouts";
import CardView from "../../../components/templates/panel/templates/CardView";

const CardPage = () => {
  return (
    <>
      <Layout>
        <section className="min-h-screen bg-gray-100 dark:bg-gray-900">
          <CardView />
        </section>
      </Layout>
    </>
  );
};

export default CardPage;
