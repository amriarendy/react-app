import Breadcrumbs from "../../../elements/breadcrumbs/Breadcrumbs";
import InputElement from "../../../organisms/panel/elements/input/InputElement";

const InputView = () => {
  const breadCrumbs = {
    page: "Input",
    data: [
      { page: "Elements", route: "/dashboard/elements/input" },
      { page: "Input", route: "/dashboard/elements/input" },
    ],
  };
  return (
    <>
      <Breadcrumbs breadCrumbs={breadCrumbs} />
      <InputElement />
    </>
  );
};

export default InputView;
