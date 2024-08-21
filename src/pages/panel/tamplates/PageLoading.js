import PanelLayout from "../PanelLayout";
import Breadcrumbs from "../../../components/breadcrumbs/Breadcrumbs";
import Loading from "../../../components/errors/Loading";

const PageLoading = () => {
  const breadCrumbs = {
    page: "Page Loading",
    data: [
      { page: "Templates", route: "/templates/page-loading" },
      { page: "Page Loading", route: "/templates/page-loading" },
    ],
  };
  return (
    <>
      <PanelLayout>
        <Breadcrumbs breadCrumbs={breadCrumbs} />
        <div className="flex items-center inset-0 sm:h-full">
          <Loading />
        </div>
      </PanelLayout>
    </>
  );
};

export default PageLoading;
