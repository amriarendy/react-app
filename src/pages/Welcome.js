import React from "react";
import Heading from "../components/organisms/section/Heading";
import CustomerLogo from "../components/organisms/section/CustomerLogo";
import Layout from "./Layout";
import Subscribe from "../components/organisms/section/Subscribe";
import Test from "../components/organisms/section/Test";
import BlogSquare from "../components/molecules/blog/BlogSquare";
import { SearchSort } from "../components/molecules/search/SearchSort";
import Paginate from "../components/molecules/pagination/Paginate";

const Welcome = () => {
  return (
    <>
      <Layout>
        <Heading />
        <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto max-w-2xl text-center">
            <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              Articles
            </h2>
            <p class="mt-2 text-lg leading-8 text-gray-600">
              Learn how to grow your business with our expert advice.
            </p>
          </div>
          {/* input group/ */}
          <div className="mx-auto mt-4 mb-4 grid gap-3 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-3">
            {/* Start Blog */}
            <BlogSquare />
            <BlogSquare />
            <BlogSquare />
            {/* End Blog */}
          </div>
          <div className="w-full text-center">
            <button className="inline-flex items-center justify-center w-1/2 px-3 py-2 mt-4 text-sm font-medium text-center text-white bg-blue-600 rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Show More</button>
          </div>
        </div>
      </section>
        <CustomerLogo />
        <Test />
        <Subscribe />
      </Layout>
    </>
  );
};

export default Welcome;
