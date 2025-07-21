import React from "react";
import { SearchSort } from "../../molecules/search/SearchSort";

const BlogSquare = () => {
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
              <span class="bg-purple-100 text-purple-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                Article
              </span>
              <div className="pt-6">
                <a
                  href="#"
                  className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white"
                >
                  Apple iMac 27", 1TB HDD, Retina 5K Display, M3 Max
                </a>
                <p className="text-gray-600 mt-2">
                  Over the past year, Volosoft has undergone many changes! After
                  months of preparation and some hard work, we moved to our new
                  office.
                </p>
                <div class="flex items-center mt-4">
                  <img
                    src="https://placehold.co/32x32"
                    alt="Profile picture of Jese Leos"
                    class="w-8 h-8 rounded-full"
                  />
                  <div class="ml-2">
                    <p class="text-gray-800 text-sm font-semibold">Jese Leos</p>
                    <p class="text-gray-600 text-sm">
                      Aug 15, 2021 · 16 min read
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* End Blog */}

            {/* Start Blog */}
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
              <span class="bg-purple-100 text-purple-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                Article
              </span>
              <div className="pt-6">
                <a
                  href="#"
                  className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white"
                >
                  Apple iMac 27", 1TB HDD, Retina 5K Display, M3 Max
                </a>
                <p className="text-gray-600 mt-2">
                  Over the past year, Volosoft has undergone many changes! After
                  months of preparation and some hard work, we moved to our new
                  office.
                </p>
                <div class="flex items-center mt-4">
                  <img
                    src="https://placehold.co/32x32"
                    alt="Profile picture of Jese Leos"
                    class="w-8 h-8 rounded-full"
                  />
                  <div class="ml-2">
                    <p class="text-gray-800 text-sm font-semibold">Jese Leos</p>
                    <p class="text-gray-600 text-sm">
                      Aug 15, 2021 · 16 min read
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* End Blog */}

            {/* Start Blog */}
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
              <span class="bg-purple-100 text-purple-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                Article
              </span>
              <div className="pt-6">
                <a
                  href="#"
                  className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white"
                >
                  Apple iMac 27", 1TB HDD, Retina 5K Display, M3 Max
                </a>
                <p className="text-gray-600 mt-2">
                  Over the past year, Volosoft has undergone many changes! After
                  months of preparation and some hard work, we moved to our new
                  office.
                </p>
                <div class="flex items-center mt-4">
                  <img
                    src="https://placehold.co/32x32"
                    alt="Profile picture of Jese Leos"
                    class="w-8 h-8 rounded-full"
                  />
                  <div class="ml-2">
                    <p class="text-gray-800 text-sm font-semibold">Jese Leos</p>
                    <p class="text-gray-600 text-sm">
                      Aug 15, 2021 · 16 min read
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* End Blog */}

            {/* Start Blog */}
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
              <span class="bg-purple-100 text-purple-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                Article
              </span>
              <div className="pt-6">
                <a
                  href="#"
                  className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white"
                >
                  Apple iMac 27", 1TB HDD, Retina 5K Display, M3 Max
                </a>
                <p className="text-gray-600 mt-2">
                  Over the past year, Volosoft has undergone many changes! After
                  months of preparation and some hard work, we moved to our new
                  office.
                </p>
                <div class="flex items-center mt-4">
                  <img
                    src="https://placehold.co/32x32"
                    alt="Profile picture of Jese Leos"
                    class="w-8 h-8 rounded-full"
                  />
                  <div class="ml-2">
                    <p class="text-gray-800 text-sm font-semibold">Jese Leos</p>
                    <p class="text-gray-600 text-sm">
                      Aug 15, 2021 · 16 min read
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* End Blog */}

            {/* Start Blog */}
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
              <span class="bg-purple-100 text-purple-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                Article
              </span>
              <div className="pt-6">
                <a
                  href="#"
                  className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white"
                >
                  Apple iMac 27", 1TB HDD, Retina 5K Display, M3 Max
                </a>
                <p className="text-gray-600 mt-2">
                  Over the past year, Volosoft has undergone many changes! After
                  months of preparation and some hard work, we moved to our new
                  office.
                </p>
                <div class="flex items-center mt-4">
                  <img
                    src="https://placehold.co/32x32"
                    alt="Profile picture of Jese Leos"
                    class="w-8 h-8 rounded-full"
                  />
                  <div class="ml-2">
                    <p class="text-gray-800 text-sm font-semibold">Jese Leos</p>
                    <p class="text-gray-600 text-sm">
                      Aug 15, 2021 · 16 min read
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* End Blog */}

            {/* Start Blog */}
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
              <span class="bg-purple-100 text-purple-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                Article
              </span>
              <div className="pt-6">
                <a
                  href="#"
                  className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white"
                >
                  Apple iMac 27", 1TB HDD, Retina 5K Display, M3 Max
                </a>
                <p className="text-gray-600 mt-2">
                  Over the past year, Volosoft has undergone many changes! After
                  months of preparation and some hard work, we moved to our new
                  office.
                </p>
                <div class="flex items-center mt-4">
                  <img
                    src="https://placehold.co/32x32"
                    alt="Profile picture of Jese Leos"
                    class="w-8 h-8 rounded-full"
                  />
                  <div class="ml-2">
                    <p class="text-gray-800 text-sm font-semibold">Jese Leos</p>
                    <p class="text-gray-600 text-sm">
                      Aug 15, 2021 · 16 min read
                    </p>
                  </div>
                </div>
              </div>
            </div>
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

const BlogList = () => {
  return <></>;
};

export { BlogSquare, BlogList };
