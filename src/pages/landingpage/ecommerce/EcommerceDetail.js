import Layout from "../../Layout";

const Ecommerce = () => {
  return (
    <>
      <Layout>
        <section className="bg-gray-50 antialiased dark:bg-gray-900">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
              <div className="flex flex-col-reverse">
                <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
                  <div
                    className="grid grid-cols-4 gap-6"
                    aria-orientation="horizontal"
                    role="tablist"
                  >
                    <button
                      id="tabs-1-tab-1"
                      className="relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
                      aria-controls="tabs-1-panel-1"
                      role="tab"
                      type="button"
                    >
                      <span className="sr-only">Angled view</span>
                      <span className="absolute inset-0 overflow-hidden rounded-md">
                        <img
                          src="https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-03-product-01.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </span>

                      <span
                        className="pointer-events-none absolute inset-0 rounded-md ring-2 ring-transparent ring-offset-2"
                        aria-hidden="true"
                      ></span>
                    </button>
                  </div>
                </div>

                <div className="aspect-h-1 aspect-w-1 w-full">
                  <div
                    id="tabs-1-panel-1"
                    aria-labelledby="tabs-1-tab-1"
                    role="tabpanel"
                    tabindex="0"
                  >
                    <img
                      src="https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-03-product-01.jpg"
                      alt="Angled front view with bag zipped and handles upright."
                      className="h-full w-full object-cover object-center sm:rounded-lg"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Zip Tote Basket
                </h1>

                <div className="mt-3">
                  <h2 className="sr-only">Product information</h2>
                  <p className="text-3xl tracking-tight text-gray-900">$140</p>
                </div>

                <div className="mt-3">
                  <h3 className="sr-only">Reviews</h3>
                  <div className="flex items-center">
                    <div className="flex items-center">
                      <svg
                        className="h-5 w-5 flex-shrink-0 text-indigo-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <svg
                        className="h-5 w-5 flex-shrink-0 text-indigo-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <svg
                        className="h-5 w-5 flex-shrink-0 text-indigo-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <svg
                        className="h-5 w-5 flex-shrink-0 text-indigo-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <svg
                        className="h-5 w-5 flex-shrink-0 text-gray-300"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <p className="sr-only">4 out of 5 stars</p>
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="sr-only">Description</h3>

                  <div className="space-y-6 text-base text-gray-700 dark:text-slate-400">
                    <p>
                      The Zip Tote Basket is the perfect midpoint between
                      shopping tote and comfy backpack. With convertible straps,
                      you can hand carry, should sling, or backpack this
                      convenient and spacious bag. The zip top and durable
                      canvas construction keeps your goods protected for all-day
                      use.
                    </p>
                  </div>
                </div>

                <form className="mt-6">
                  <div>
                    <h3 className="text-sm font-medium text-gray-600">Color</h3>

                    <fieldset aria-label="Choose a color" className="mt-2">
                      <div className="flex items-center space-x-3">
                        <label
                          aria-label="Washed Black"
                          className="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 ring-gray-700 focus:outline-none"
                        >
                          <input
                            type="radio"
                            name="color-choice"
                            value="Washed Black"
                            className="sr-only"
                          />
                          <span
                            aria-hidden="true"
                            className="h-8 w-8 rounded-full border border-black border-opacity-10 bg-gray-700"
                          ></span>
                        </label>

                        <label
                          aria-label="White"
                          className="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 ring-gray-400 focus:outline-none"
                        >
                          <input
                            type="radio"
                            name="color-choice"
                            value="White"
                            className="sr-only"
                          />
                          <span
                            aria-hidden="true"
                            className="h-8 w-8 rounded-full border border-black border-opacity-10 bg-white"
                          ></span>
                        </label>

                        <label
                          aria-label="Washed Gray"
                          className="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 ring-gray-500 focus:outline-none"
                        >
                          <input
                            type="radio"
                            name="color-choice"
                            value="Washed Gray"
                            className="sr-only"
                          />
                          <span
                            aria-hidden="true"
                            className="h-8 w-8 rounded-full border border-black border-opacity-10 bg-gray-500"
                          ></span>
                        </label>
                      </div>
                    </fieldset>
                  </div>

                  <div className="mt-10 flex">
                    <button
                      type="submit"
                      className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
                    >
                      Add to bag
                    </button>

                    <button
                      type="button"
                      className="ml-4 flex items-center justify-center rounded-md px-3 py-3 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
                    >
                      <svg
                        className="h-6 w-6 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                        />
                      </svg>
                      <span className="sr-only">Add to favorites</span>
                    </button>
                  </div>
                </form>

                <section aria-labelledby="details-heading" className="mt-12">
                  <h2 id="details-heading" className="sr-only">
                    Additional details
                  </h2>
                </section>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Ecommerce;
