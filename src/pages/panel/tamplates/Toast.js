import PanelLayout from "../PanelLayout";
import ToastView from "../../../components/templates/panel/templates/ToastView";

const Toast = () => {
  return (
    <>
      <PanelLayout>
      <section className="min-h-screen bg-gray-100 dark:bg-gray-900">
          <ToastView />
        </section>
      </PanelLayout>
    </>
  );
};

export default Toast;
