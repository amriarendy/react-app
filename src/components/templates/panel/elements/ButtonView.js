import Breadcrumbs from "../../../elements/breadcrumbs/Breadcrumbs";
import ButtonElement from "../../../organisms/panel/elements/button/ButtonElement";

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
      <ButtonElement />
    </>
  );
};

export default ButtonView;
