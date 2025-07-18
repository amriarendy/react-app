import React from "react";

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
          <div class="mt-4 mb-4 border-gray-200 pb-5 sm:flex sm:items-center sm:justify-between">
            <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
              Categories: All
            </h3>
            <div class="mt-3 sm:ml-4 sm:mt-0">
              <label for="mobile-search-candidate" class="sr-only">
                Search
              </label>
              <label for="desktop-search-candidate" class="sr-only">
                Search
              </label>
              <div class="flex rounded-md shadow-sm">
                <div class="relative flex-grow focus-within:z-10">
                  <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg
                      class="h-5 w-5 text-gray-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    name="mobile-search-candidate"
                    id="mobile-search-candidate"
                    class="block w-full rounded-none rounded-l-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:hidden"
                    placeholder="Search"
                  />
                  <input
                    type="text"
                    name="desktop-search-candidate"
                    id="desktop-search-candidate"
                    class="hidden w-full rounded-none rounded-l-md border-0 py-1.5 pl-10 text-sm leading-6 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:block"
                    placeholder="Search candidates"
                  />
                </div>
                <button
                  type="button"
                  class="relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:text-white"
                >
                  <svg
                    class="-ml-0.5 h-5 w-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2 3.75A.75.75 0 012.75 3h11.5a.75.75 0 010 1.5H2.75A.75.75 0 012 3.75zM2 7.5a.75.75 0 01.75-.75h6.365a.75.75 0 010 1.5H2.75A.75.75 0 012 7.5zM14 7a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02l-1.95-2.1v6.59a.75.75 0 01-1.5 0V9.66l-1.95 2.1a.75.75 0 11-1.1-1.02l3.25-3.5A.75.75 0 0114 7zM2 11.25a.75.75 0 01.75-.75H7A.75.75 0 017 12H2.75a.75.75 0 01-.75-.75z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Sort
                  <svg
                    class="-mr-1 h-5 w-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
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
