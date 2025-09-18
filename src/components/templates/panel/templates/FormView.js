import Breadcrumbs from "../../../molecules/breadcrumbs/Breadcrumbs";
import Form from "../../../organisms/panel/templates/Form";

const FormView = () => {
  const breadCrumbs = {
    page: "Form View",
    data: [
      { page: "Templates", route: "/dashboard/templates/form" },
      { page: "Form", route: "/dashboard/templates/form" },
    ],
  };
  return (
    <>
      <Breadcrumbs breadCrumbs={breadCrumbs} />
      <Form />
    </>
  );
};

export default FormView;
