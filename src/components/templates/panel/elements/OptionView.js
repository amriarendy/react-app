import Breadcrumbs from "../../../elements/breadcrumbs/Breadcrumbs";
import Option from "../../../organisms/panel/elements/option";

const OptionView = () => {
  const breadCrumbs = {
    page: "Option",
    data: [
      { page: "Elements", route: "/dashboard/elements/option" },
      { page: "Option", route: "/dashboard/elements/option" },
    ],
  };
  return (
    <>
      <Breadcrumbs breadCrumbs={breadCrumbs} />
      <Option />
    </>
  );
};

export default OptionView;
