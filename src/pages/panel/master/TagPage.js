import PanelLayout from "../PanelLayout";
import TagView from "../../../components/templates/panel/master/TagView";

const TagPage = () => {
  return (
    <>
      <PanelLayout>
        <section className="min-h-screen bg-gray-100 dark:bg-gray-900">
          <TagView />
        </section>
      </PanelLayout>
    </>
  );
};

export default TagPage;
