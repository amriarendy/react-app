import Layout from "../../../components/templates/panel/layouts";
import Breadcrumbs from "../../../components/molecules/breadcrumbs/Breadcrumbs";

const GridCols = () => {
  const breadCrumbs = {
    page: "Grid and Cols",
    data: [
      { page: "Templates", route: "/dashboard/templates/grid-cols" },
      { page: "Grid and Cols", route: "/dashboard/templates/grid-cols" },
    ],
  };
  return (
    <>
      <Layout>
        <Breadcrumbs breadCrumbs={breadCrumbs} />
        <h2 class="text-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-3xl dark:text-white">
          Horizontal: Row: 1, Columns: 4
        </h2>
        <div className="grid grid-cols-1 px-4 pt-6 lg:grid-cols-4 gap-4 mb-4 dark:bg-gray-900">
          <div className="border-2 border-dashed border-gray-300 rounded-lg dark:border-gray-600 h-32 md:h-64">
            <p className="text-center text-gray-500 dark:text-gray-400">
              grid grid-cols-1 px-4 pt-6
              <span className="font-semibold text-gray-900 underline dark:text-white decoration-indigo-500">
                {" "}
                lg:grid-cols-4
              </span>{" "}
              gap-4 mb-4
            </p>
          </div>
          <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-32 md:h-64">
            <p className="text-center text-gray-500 dark:text-gray-400">
              grid grid-cols-1 px-4 pt-6
              <span className="font-semibold text-gray-900 underline dark:text-white decoration-indigo-500">
                {" "}
                lg:grid-cols-4
              </span>{" "}
              gap-4 mb-4
            </p>
          </div>
          <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-32 md:h-64">
            <p className="text-center text-gray-500 dark:text-gray-400">
              grid grid-cols-1 px-4 pt-6
              <span className="font-semibold text-gray-900 underline dark:text-white decoration-indigo-500">
                {" "}
                lg:grid-cols-4
              </span>{" "}
              gap-4 mb-4
            </p>
          </div>
          <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-32 md:h-64">
            <p className="text-center text-gray-500 dark:text-gray-400">
              grid grid-cols-1 px-4 pt-6
              <span className="font-semibold text-gray-900 underline dark:text-white decoration-indigo-500">
                {" "}
                lg:grid-cols-4
              </span>{" "}
              gap-4 mb-4
            </p>
          </div>
        </div>

        <h2 class="text-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-3xl dark:text-white">
          Vertical: Row: 1, Columns: 2
        </h2>
        <div className="grid grid-cols-2 px-4 pt-6 gap-4 mb-4 dark:bg-gray-900">
          <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72">
            <p className="text-center text-gray-500 dark:text-gray-400">
              <span className="font-semibold text-gray-900 underline dark:text-white decoration-indigo-500">
                grid grid-cols-2
              </span>{" "}
              px-4 pt-6 gap-4 mb-4 dark:bg-gray-900
            </p>
          </div>
          <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72">
            <p className="text-center text-gray-500 dark:text-gray-400">
              <span className="font-semibold text-gray-900 underline dark:text-white decoration-indigo-500">
                grid grid-cols-2
              </span>{" "}
              px-4 pt-6 gap-4 mb-4 dark:bg-gray-900
            </p>
          </div>
          <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72">
            <p className="text-center text-gray-500 dark:text-gray-400">
              <span className="font-semibold text-gray-900 underline dark:text-white decoration-indigo-500">
                grid grid-cols-2
              </span>{" "}
              px-4 pt-6 gap-4 mb-4 dark:bg-gray-900
            </p>
          </div>
          <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72">
            <p className="text-center text-gray-500 dark:text-gray-400">
              <span className="font-semibold text-gray-900 underline dark:text-white decoration-indigo-500">
                grid grid-cols-2
              </span>{" "}
              px-4 pt-6 gap-4 mb-4 dark:bg-gray-900
            </p>
          </div>
        </div>

        <h2 class="text-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-3xl dark:text-white">
          Grid:1 Row: 1 only, Columns: 2 only
        </h2>
        <div className="grid grid-cols-1 px-4 pt-6 lg:grid-cols-1 gap-4 mb-4 dark:bg-gray-900">
          <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72">
            <p className="text-center text-gray-500 dark:text-gray-400">
              <span className="font-semibold text-gray-900 underline dark:text-white decoration-indigo-500">
                grid grid-cols-1{" "}
              </span>{" "}
              px-4 pt-6
              <span className="font-semibold text-gray-900 underline dark:text-white decoration-indigo-500">
                lg:grid-cols-1
              </span>
              gap-4 mb-4 dark:bg-gray-900
            </p>
          </div>
        </div>

        <h2 class="text-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-3xl dark:text-white">
          grid-flow-col: Row: 4, Columns: 2
        </h2>
        <div className="grid grid-rows-4 px-4 pt-6 grid-flow-col gap-4 mb-4 dark:bg-gray-900">
          <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72">
            01
          </div>
          <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72">
            02
          </div>
          <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72">
            03
          </div>
          <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72">
            04
          </div>
          <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72">
            05
          </div>
          <div className="grid grid-rows-subgrid gap-4 row-span-3">
            <div className="row-start-2 border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72">
              06
            </div>
          </div>
          <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72">
            07
          </div>
          <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72">
            08
          </div>
          <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72">
            09
          </div>
          <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72">
            10
          </div>
        </div>

        <h2 class="text-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-3xl dark:text-white">
          starting and ending lines
        </h2>
        <div className="grid grid-cols-6 px-4 pt-6 gap-4 mb-4 dark:bg-gray-900">
          <div className="col-start-2 col-span-4 border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72">
            01. col-start-2 col-span-4
          </div>
          <div className="col-start-1 col-end-3 border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72">
            02. col-start-1 col-end-3
          </div>
          <div className="col-end-7 col-span-2 border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72">
            03. col-end-7 col-span-2
          </div>
          <div className="col-start-1 col-end-7 border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72">
            04. col-start-1 col-end-7
          </div>
        </div>
        <h2 class="text-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-3xl dark:text-white">
          No Grid
        </h2>
        <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-96 mb-4"></div>
      </Layout>
    </>
  );
};

export default GridCols;
