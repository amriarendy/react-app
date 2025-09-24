import Breadcrumbs from "../../../elements/breadcrumbs/Breadcrumbs";
import Toast from "../../../organisms/panel/templates/Toast";

const ToastView = () => {
  const breadCrumbs = {
    page: "Toast",
    data: [
      { page: "Templates", route: "/dashboard/templates/toast" },
      { page: "Toast", route: "/dashboard/templates/toast" },
    ],
  };
  return (
    <>
      <Breadcrumbs breadCrumbs={breadCrumbs} />
      <div className="grid grid-cols-1 px-4 pt-6 xl:grid-cols-1 mx-auto max-w-2xl xl:gap-4 dark:bg-gray-900">
        <Toast />
      </div>
    </>
  );
};

export default ToastView;
