import Breadcrumbs from "../../../elements/breadcrumbs/Breadcrumbs";
import Button from "../../../organisms/panel/elements/button";

const ButtonView = () => {
  const breadCrumbs = {
    page: "Button",
    data: [
      { page: "Elements", route: "/dashboard/elements/button" },
      { page: "Button", route: "/dashboard/elements/button" },
    ],
  };
  return (
    <>
      <Breadcrumbs breadCrumbs={breadCrumbs} />
      <Button />
    </>
  );
};

export default ButtonView;
