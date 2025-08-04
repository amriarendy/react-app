const StoreList = () => {
  return (
    <div>
      <div class="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white dark:bg-gray-800">
        <div class="aspect-h-4 aspect-w-3 bg-gray-200 sm:aspect-none group-hover:opacity-75 sm:h-96">
          <img
            src="https://tailwindui.com/plus-assets/img/ecommerce-images/category-page-02-image-card-01.jpg"
            alt="Eight shirts arranged on table in black, olive, grey, blue, white, red, mustard, and green."
            class="h-full w-full object-cover object-center sm:h-full sm:w-full"
          />
        </div>
        <div class="flex flex-1 flex-col space-y-2 p-4">
          <h3 class="text-sm font-medium text-gray-900 dark:text-white">
            <a href="#">
              <span aria-hidden="true" class="absolute inset-0"></span>
              Basic Tee 8-Pack
            </a>
          </h3>
          <p class="text-sm text-gray-500 dark:text-gray-400">
            Get the full lineup of our Basic Tees. Have a fresh shirt all week,
            and an extra for laundry day.
          </p>
          <div class="flex flex-1 flex-col justify-end">
            <p class="text-sm italic text-gray-500">8 colors</p>
            <p class="text-base font-medium text-gray-900 dark:text-gray-400">
              $256
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreList;
