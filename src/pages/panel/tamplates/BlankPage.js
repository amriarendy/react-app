import PanelLayout from "../PanelLayout";
import BlankView from "../../../components/templates/panel/templates/BlankView";

const BlankPage = () => {
  return (
    <>
      <PanelLayout>
        <section className="min-h-screen bg-gray-100 dark:bg-gray-900">
          <BlankView />
        </section>
      </PanelLayout>
    </>
  );
};

export default BlankPage;
