import BlogSearch from "../../../organisms/landingpage/blogs/BlogSearch";
import BlogSquare from "../../../organisms/landingpage/blogs/BlogSquare";
import TitleDescription from "../../../elements/title/TitleDescription";
import Pagination from "../../../elements/pagination";
import { useState } from "react";

const BlogList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;
  return (
    <>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <TitleDescription
          label={"Articles"}
          description={
            "Learn how to grow your business with our expert advice."
          }
        />
        {/* <input group */}
        <BlogSearch />
        {/* input group/ */}
        <div className="mx-auto mt-4 mb-4 grid gap-3 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-3">
          {/* Start Blog */}
          <BlogSquare />
          <BlogSquare />
          <BlogSquare />
          <BlogSquare />
          <BlogSquare />
          <BlogSquare />
          <BlogSquare />
          <BlogSquare />
          <BlogSquare />
          {/* End Blog */}
        </div>
        <div className="w-full text-center">
          <div className="px-4 py-5 sm:p-6">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={(page) => setCurrentPage(page)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogList;
