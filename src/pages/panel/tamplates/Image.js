import PanelLayout from "../PanelLayout";
import Breadcrumbs from "../../../components/breadcrumbs/Breadcrumbs";

const Image = () => {
  const breadCrumbs = {
    page: "Images",
    data: [
      { page: "Templates", route: "/templates/image" },
      { page: "Images", route: "/templates/image" },
    ],
  };
  return (
    <>
      <PanelLayout>
        <Breadcrumbs breadCrumbs={breadCrumbs} />
        <h5 className="text-center text-4xl font-bold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-3xl dark:text-white">
          Images Square, Rounded and Circle
        </h5>
        <div className="grid grid-cols-3 px-4 pt-6 gap-4 mb-4 dark:bg-gray-900">
          <div className="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-1 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
            <div className="items-center sm:flex xl:block 2xl:flex sm:space-x-4 xl:space-x-0 2xl:space-x-4">
              <img
                className="mb-4 w-28 h-28 sm:mb-0 xl:mb-4 2xl:mb-0"
                src="https://flowbite-admin-dashboard.vercel.app/images/users/bonnie-green-2x.png"
                alt="Jese picture"
              />
              <div>
                <h3 className="mb-1 text-xl font-semibold text-gray-900 dark:text-white">
                  Image Square
                </h3>
                <div className="mb-4 text-sm text-gray-500 dark:text-gray-400">
                  img: mb-4 w-28 h-28 sm:mb-0 xl:mb-4 2xl:mb-0
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-1 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
            <div className="items-center sm:flex xl:block 2xl:flex sm:space-x-4 xl:space-x-0 2xl:space-x-4">
              <img
                className="mb-4 rounded-xl w-28 h-28 sm:mb-0 xl:mb-4 2xl:mb-0"
                src="https://flowbite-admin-dashboard.vercel.app/images/users/bonnie-green-2x.png"
                alt="Jese picture"
              />
              <div>
                <h3 className="mb-1 text-xl font-semibold text-gray-900 dark:text-white">
                  Image Rounded
                </h3>
                <div className="mb-4 text-sm text-gray-500 dark:text-gray-400">
                  img: mb-4 rounded-xl w-28 h-28 sm:mb-0 xl:mb-4 2xl:mb-0
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-1 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
            <div className="items-center sm:flex xl:block 2xl:flex sm:space-x-4 xl:space-x-0 2xl:space-x-4">
              <img
                className="mb-4 rounded-full w-28 h-28 sm:mb-0 xl:mb-4 2xl:mb-0"
                src="https://flowbite-admin-dashboard.vercel.app/images/users/bonnie-green-2x.png"
                alt="Jese picture"
              />
              <div>
                <h3 className="mb-1 text-xl font-semibold text-gray-900 dark:text-white">
                  Image Circle
                </h3>
                <div className="mb-4 text-sm text-gray-500 dark:text-gray-400">
                  img: mb-4 rounded-full w-28 h-28 sm:mb-0 xl:mb-4 2xl:mb-0
                </div>
              </div>
            </div>
          </div>
        </div>

        <h5 className="text-center text-4xl font-bold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-3xl dark:text-white">
          Figure Images
        </h5>
        <div className="grid grid-cols-4 px-4 pt-6 gap-4 mb-4 dark:bg-gray-900">
          <div className="flex items-center justify-center col-span-1">
            <figure className="max-w-lg text-center">
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite-admin-dashboard.vercel.app/images/users/bonnie-green-2x.png"
                alt="image description"
              />
              <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">
                Image Caption
              </figcaption>
            </figure>
          </div>

          <div className="flex items-center justify-center col-span-1">
            <figure className="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
              <a href="#">
                <img
                  className="rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png"
                  alt="Image Card"
                />
              </a>
              <figcaption className="absolute px-4 text-lg text-white bottom-6">
                <p>Image Grayscale With Caption</p>
              </figcaption>
            </figure>
          </div>

          <div className="flex items-center justify-center col-span-1">
            <img
              className="h-auto max-w-full transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png"
              alt="Image Grayscale"
              title="Image Grayscale"
            />
          </div>

          <div className="flex items-center justify-center col-span-1">
            <img
              className="h-auto max-w-full transition-all duration-300 rounded-lg blur-sm hover:blur-none"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png"
              alt="Image Blur"
              title="Image Blur"
            />
          </div>
        </div>
      </PanelLayout>
    </>
  );
};

export default Image;
