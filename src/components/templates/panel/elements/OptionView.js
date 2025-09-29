import Breadcrumbs from "../../../elements/breadcrumbs/Breadcrumbs";
import OptionElement from "../../../organisms/panel/elements/option/OptionElement";

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
      <OptionElement />
    </>
  );
};

export default OptionView;
