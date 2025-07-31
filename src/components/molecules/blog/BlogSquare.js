import React from "react";

const BlogSquare = ({ titleOnly }) => {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <div className="h-56 w-full">
        <a href="#">
          <img
            className="mx-auto h-full dark:hidden"
            src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
            alt=""
          />
          <img
            className="mx-auto hidden h-full dark:block"
            src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg"
            alt=""
          />
        </a>
      </div>
      <span className="bg-purple-100 text-purple-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
        Article
      </span>
      <div className="pt-6">
        <a
          href="#"
          className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white"
        >
          Apple iMac 27", 1TB HDD, Retina 5K Display, M3 Max
        </a>
        {titleOnly ? (
          <></> // or some title-only JSX here
        ) : (
          <>
            <p className="text-gray-600 mt-2">
              Over the past year, Volosoft has undergone many changes! After months
              of preparation and some hard work, we moved to our new office.
            </p>
            <div className="flex items-center mt-4">
              <img
                src="https://placehold.co/32x32"
                alt="Profile picture of Jese Leos"
                className="w-8 h-8 rounded-full"
              />
              <div className="ml-2">
                <p className="text-gray-800 text-sm font-semibold">Jese Leos</p>
                <p className="text-gray-600 text-sm">Aug 15, 2021 · 16 min read</p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default BlogSquare;
