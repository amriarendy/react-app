import { useState } from "react";
import Blog from "../../../organisms/landingpage/blogs";

const BlogListView = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  return (
    <>
      <Blog pagination={{ currentPage, setCurrentPage, totalPages }} />
    </>
  );
};

export default BlogListView;
