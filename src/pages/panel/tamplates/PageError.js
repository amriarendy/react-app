import PanelLayout from "../PanelLayout";
import Breadcrumbs from "../../../components/molecules/breadcrumbs/Breadcrumbs";
import Errors from "../../../components/molecules/errors/Errors";

const PageError = () => {
  const breadCrumbs = {
    page: "Page Error",
    data: [
      { page: "Templates", route: "/dashboard/templates/page-error" },
      { page: "Page Error", route: "/dashboard/templates/page-error" },
    ],
  };
  return (
    <>
      <PanelLayout>
        <Breadcrumbs breadCrumbs={breadCrumbs} />
        <div className="flex items-center inset-0 sm:h-full">
          <Errors code={500} status="Errors" message="Internal Server Error" />
        </div>
      </PanelLayout>
    </>
  );
};

export default PageError;
