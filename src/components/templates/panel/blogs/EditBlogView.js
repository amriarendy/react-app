import Breadcrumbs from "../../../molecules/breadcrumbs/Breadcrumbs";
import EditBlog from "../../../organisms/panel/blogs/EditBlog";

const EditBlogView = () => {
  const breadCrumbs = {
    page: "Edit Blog",
    data: [
      { page: "Blog", route: "/dashboard/blogs" },
      { page: "Edit Blog", route: "/dashboard/blogs/edit" },
    ],
  };
  return (
    <>
      <Breadcrumbs breadCrumbs={breadCrumbs} />
      <EditBlog />
    </>
  );
};

export default EditBlogView;
