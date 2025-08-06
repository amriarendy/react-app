import { Link } from "react-router-dom";

const StoreSquare = () => {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-300 bg-white dark:bg-gray-800 dark:border-gray-500">
      <div className="aspect-h-4 aspect-w-3 bg-gray-200 sm:aspect-none group-hover:opacity-75 sm:h-96">
        <img
          src="https://tailwindui.com/plus-assets/img/ecommerce-images/category-page-02-image-card-01.jpg"
          alt="Eight shirts arranged on table in black, olive, grey, blue, white, red, mustard, and green."
          className="h-full w-full object-cover object-center sm:h-full sm:w-full"
        />
      </div>
      <div className="flex flex-1 flex-col space-y-2 p-4">
        <h3 className="text-sm font-medium text-gray-900 dark:text-white">
          <Link to={"/ecommerce/detail"}>
            <span aria-hidden="true" className="absolute inset-0"></span>
            Basic Tee 8-Pack
          </Link>
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Get the full lineup of our Basic Tees. Have a fresh shirt all week,
          and an extra for laundry day.
        </p>
        <div className="flex flex-1 flex-col justify-end">
          <p className="text-sm italic text-gray-500">8 colors</p>
          <p className="text-base font-medium text-gray-900 dark:text-gray-400">
            $256
          </p>
        </div>
      </div>
    </div>
  );
};

export default StoreSquare;
