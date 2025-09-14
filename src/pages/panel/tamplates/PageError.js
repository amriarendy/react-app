import Layout from "../../../components/templates/panel/layouts";
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
      <Layout>
        <Breadcrumbs breadCrumbs={breadCrumbs} />
        <div className="flex items-center inset-0 sm:h-full">
          <Errors code={500} status="Errors" message="Internal Server Error" />
        </div>
      </Layout>
    </>
  );
};

export default PageError;
