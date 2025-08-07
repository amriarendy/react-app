import PanelLayout from "../PanelLayout";
import BlankView from "../../../components/templates/panel/templates/BlankView";

const BlankPage = () => {
  const breadCrumbs = {
    page: "Blank",
    data: [
      { page: "Templates", route: "/dashboard/templates/blank" },
      { page: "Blank", route: "/dashboard/templates/blank" },
    ],
  };
  return (
    <>
      <PanelLayout>
        
      <section className="min-h-screen bg-gray-100 dark:bg-gray-900">
        <BlankView breadCrumbs={breadCrumbs} />
        </section>
      </PanelLayout>
    </>
  );
};

export default BlankPage;
