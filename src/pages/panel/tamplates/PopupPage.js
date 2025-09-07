import PanelLayout from "../PanelLayout";
import BlankView from "../../../components/templates/panel/templates/BlankView";
import PopupView from "../../../components/templates/panel/templates/PopupView";

const PopupPage = () => {
  return (
    <>
      <PanelLayout>
        <section className="min-h-screen bg-gray-100 dark:bg-gray-900">
          <PopupView />
        </section>
      </PanelLayout>
    </>
  );
};

export default PopupPage;
