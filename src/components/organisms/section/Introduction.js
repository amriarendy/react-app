import React from "react";

const Introduction = () => {
  return (
    <>
      <section className="bg-green-600 dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-8 lg:px-12">
          <h1 className="text-white mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            PT. Super Semiconductors Indotech
          </h1>
          <p className="text-white text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            Super Semiconductors or Super Semiconductors Indotech is a brand
            also trademark belong to Super Semiconductors Indotech, PT.
          </p>

          <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
            <dl className="grid max-w-screen-md gap-8 mx-auto text-gray-900 sm:grid-cols-3 dark:text-white">
              <div className="flex flex-col items-center justify-center">
                <dt className="text-white mb-2 text-3xl md:text-4xl font-extrabold">
                  73M+
                </dt>
                <dd className="text-white font-light text-gray-500 dark:text-gray-400">
                  developers
                </dd>
              </div>
              <div className="text-white flex flex-col items-center justify-center">
                <dt className="mb-2 text-3xl md:text-4xl font-extrabold">
                  1B+
                </dt>
                <dd className="text-white font-light text-gray-500 dark:text-gray-400">
                  contributors
                </dd>
              </div>
              <div className="flex flex-col items-center justify-center">
                <dt className="text-white mb-2 text-3xl md:text-4xl font-extrabold">
                  4M+
                </dt>
                <dd className="text-white font-light text-gray-500 dark:text-gray-400">
                  organizations
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </>
  );
};

export default Introduction;
