import BlogSearch from "./BlogSearch";
import BlogSquare from "./BlogSquare";
import TitleDescription from "../../../elements/title/TitleDescription";
import Pagination from "../../../elements/pagination";

const Blog = ({ props, pagination }) => {
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
              currentPage={pagination.currentPage}
              totalPages={pagination.totalPages}
              onPageChange={(page) => pagination.setCurrentPage(page)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
