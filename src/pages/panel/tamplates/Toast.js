import Layout from "../../../components/templates/panel/layouts";
import ToastView from "../../../components/templates/panel/templates/ToastView";

const Toast = () => {
  return (
    <>
      <Layout>
        <section className="min-h-screen bg-gray-100 dark:bg-gray-900">
          <ToastView />
        </section>
      </Layout>
    </>
  );
};

export default Toast;
