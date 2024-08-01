import PanelLayout from "../PanelLayout";
import Breadcrumbs from "../../../components/breadcrumbs/Breadcrumbs";

const Form = () => {
  const breadCrumbs = {
    page: "Form",
    data: [
      { page: "Templates", route: "/templates/form" },
      { page: "Form", route: "/templates/form" },
    ],
  };
  return (
    <>
      <PanelLayout>
        <Breadcrumbs breadCrumbs={breadCrumbs} />
        <div className="grid grid-cols-1 px-4 pt-6 xl:grid-cols-3 xl:gap-4 dark:bg-gray-900">
          <div className="border-2 border-dashed border-gray-300 rounded-lg dark:border-gray-600 h-32 md:h-64"></div>
          <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-32 md:h-64"></div>
          <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-32 md:h-64"></div>
          <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-32 md:h-64"></div>
        </div>
        <div className="grid grid-cols-2 px-4 pt-6 gap-4 mb-4 dark:bg-gray-900">
          <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"></div>
          <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"></div>
          <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"></div>
          <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"></div>
        </div>
        <div className="grid grid-cols-1 px-4 pt-6 lg:grid-cols-1 gap-4 mb-4 dark:bg-gray-900">
          <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"></div>
        </div>
      </PanelLayout>
    </>
  );
};

export default Form;
