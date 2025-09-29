import Breadcrumbs from "../../../elements/breadcrumbs/Breadcrumbs";
import TextArea from "../../../organisms/panel/elements/textarea";

const TextAreaView = () => {
  const breadCrumbs = {
    page: "Textarea",
    data: [
      { page: "Elements", route: "/dashboard/elements/textarea" },
      { page: "Textarea", route: "/dashboard/elements/textarea" },
    ],
  };
  return (
    <>
      <Breadcrumbs breadCrumbs={breadCrumbs} />
      <TextArea />
    </>
  );
};

export default TextAreaView;
