import Breadcrumbs from "../../../elements/breadcrumbs/Breadcrumbs";
import TextAreaElement from "../../../organisms/panel/elements/textarea/TextAreaElement";

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
      <TextAreaElement />
    </>
  );
};

export default TextAreaView;
