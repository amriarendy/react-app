import Layout from "../../../components/templates/panel/layouts";
import BlankView from "../../../components/templates/panel/templates/BlankView";
import PopupView from "../../../components/templates/panel/templates/PopupView";

const PopupPage = () => {
  return (
    <>
      <Layout>
        <section className="min-h-screen bg-gray-100 dark:bg-gray-900">
          <PopupView />
        </section>
      </Layout>
    </>
  );
};

export default PopupPage;
