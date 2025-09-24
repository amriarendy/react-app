import Breadcrumbs from "../../../elements/breadcrumbs/Breadcrumbs";
import Images from "../../../organisms/panel/templates/Images";

const ImageView = () => {
  const breadCrumbs = {
    page: "Image",
    data: [
      { page: "Templates", route: "/dashboard/templates/image" },
      { page: "Image", route: "/dashboard/templates/image" },
    ],
  };
  return (
    <>
      <Breadcrumbs breadCrumbs={breadCrumbs} />
      <Images />
    </>
  );
};

export default ImageView;
