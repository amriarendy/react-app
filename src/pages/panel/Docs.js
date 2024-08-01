import PanelLayout from "./PanelLayout";
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";

const Docs = () => {
    const breadCrumbs = {
      page: "Docs",
      data: [
        { page: "Docs", route: "/docs" }
      ],
    };
    return (
        <>
        <PanelLayout>
          <section className="min-h-screen">
            <div className="grid grid-cols-1 px-4 pt-6 lg:grid-cols-4 gap-4 mb-4 dark:bg-gray-900">
              <Breadcrumbs breadCrumbs={breadCrumbs} />
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
          </section>
        </PanelLayout>
        </>
    )
}

export default Docs;