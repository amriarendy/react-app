import React from "react";
import { SearchSort } from "../../molecules/search/SearchSort";
import BlogSquare from "../../molecules/blog/BlogSquare";

const Blogs = () => {
  return (
    <>
      <section className="bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto max-w-2xl text-center">
            <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              Articles
            </h2>
            <p class="mt-2 text-lg leading-8 text-gray-600">
              Learn how to grow your business with our expert advice.
            </p>
          </div>
          {/* <input group */}
          <SearchSort />
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
            <button
              type="button"
              className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
            >
              Show more
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;
