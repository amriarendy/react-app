import Breadcrumbs from "../../../molecules/breadcrumbs/Breadcrumbs";
import AddBlog from "../../../organisms/panel/blogs/AddBlog";

const AddBlogView = () => {
  const breadCrumbs = {
    page: "Add Blog",
    data: [
      { page: "Blog", route: "/dashboard/blogs" },
      { page: "Add Blog", route: "/dashboard/blogs/add" },
    ],
  };
  return (
    <>
      <Breadcrumbs breadCrumbs={breadCrumbs} />
      <AddBlog />
    </>
  );
};

export default AddBlogView;
