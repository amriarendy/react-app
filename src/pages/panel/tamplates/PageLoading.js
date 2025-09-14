import Layout from "../../../components/templates/panel/layouts";
import Breadcrumbs from "../../../components/molecules/breadcrumbs/Breadcrumbs";
import Loading from "../../../components/molecules/errors/Loading";

const PageLoading = () => {
  const breadCrumbs = {
    page: "Page Loading",
    data: [
      { page: "Templates", route: "/dashboard/templates/page-loading" },
      { page: "Page Loading", route: "/dashboard/templates/page-loading" },
    ],
  };
  return (
    <>
      <Layout>
        <Breadcrumbs breadCrumbs={breadCrumbs} />
        <div className="flex items-center inset-0 sm:h-full">
          <Loading />
        </div>
      </Layout>
    </>
  );
};

export default PageLoading;
