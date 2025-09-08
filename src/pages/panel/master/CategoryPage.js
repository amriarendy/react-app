import PanelLayout from "../PanelLayout";
import CategoryView from "../../../components/templates/panel/master/CategoryView";

const CategoryPage = () => {
  return (
    <>
      <PanelLayout>
        <section className="min-h-screen bg-gray-100 dark:bg-gray-900">
          <CategoryView />
        </section>
      </PanelLayout>
    </>
  );
};

export default CategoryPage;
