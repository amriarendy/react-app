import Breadcrumbs from "../../../elements/breadcrumbs/Breadcrumbs";
import Input from "../../../organisms/panel/elements/input";

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
      <Input />
    </>
  );
};

export default InputView;
