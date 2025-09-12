import PanelLayout from "../PanelLayout";
import ImagekView from "../../../components/templates/panel/templates/ImageView";

const BlankPage = () => {
  return (
    <>
      <PanelLayout>
        <section className="min-h-screen bg-gray-100 dark:bg-gray-900">
          <ImagekView />
        </section>
      </PanelLayout>
    </>
  );
};

export default BlankPage;
