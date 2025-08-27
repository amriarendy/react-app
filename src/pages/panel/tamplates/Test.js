import PanelLayout from "../PanelLayout";
import TestView from "../../../components/templates/panel/templates/TestView";

const BlankPage = () => {
  return (
    <>
      <PanelLayout>
        <section className="min-h-screen bg-gray-100 dark:bg-gray-900">
          <TestView />
        </section>
      </PanelLayout>
    </>
  );
};

export default BlankPage;
