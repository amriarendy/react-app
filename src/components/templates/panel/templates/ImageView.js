import Breadcrumbs from "../../../molecules/breadcrumbs/Breadcrumbs";
import Image from "../../../organisms/panel/templates/Image";

const ImagekView = () => {
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
      <Image />
    </>
  );
};

export default ImagekView;
