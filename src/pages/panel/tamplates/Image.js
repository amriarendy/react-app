import PanelLayout from "../PanelLayout";
import Breadcrumbs from "../../../components/breadcrumbs/Breadcrumbs";
import { ImageBlur, ImageCaption, ImageCircle, ImageCircleSmall, ImageGray, ImageGrayCaption, ImageRounded, ImageRoundedSmall, ImageSquare, ImageSquareSmall } from "../../../components/ui/Image";

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
          Images Small Square, Rounded and Circle. w-9 h-9
        </h5>
        <div className="grid grid-cols-1 px-4 pt-6 lg:grid-cols-3 gap-4 mb-4 dark:bg-gray-900">
          <div className="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-1 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
            <div className="items-center sm:flex xl:block 2xl:flex sm:space-x-4 xl:space-x-0 2xl:space-x-4">
            <ImageSquareSmall
              id="image-square-small"
              src="https://flowbite-admin-dashboard.vercel.app/images/users/bonnie-green-2x.png"
              alt="Image Square Small"
            />
              <div>
                <h3 className="mb-1 text-xl font-semibold text-gray-900 dark:text-white">
                  Image Square Small
                </h3>
                <div className="mb-4 text-sm text-gray-500 dark:text-gray-400">
                  img: w-9 h-9
                </div>
              </div>
          </div></div>
          <div className="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-1 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
            <div className="items-center sm:flex xl:block 2xl:flex sm:space-x-4 xl:space-x-0 2xl:space-x-4">
            <ImageRoundedSmall
              id="image-rounded-small"
              src="https://flowbite-admin-dashboard.vercel.app/images/users/bonnie-green-2x.png"
              alt="Image Rounded Small"
            />
              <div>
                <h3 className="mb-1 text-xl font-semibold text-gray-900 dark:text-white">
                  Image Rounded Small
                </h3>
                <div className="mb-4 text-sm text-gray-500 dark:text-gray-400">
                  img: rounded-xl w-9 h-9
                </div>
              </div>
          </div></div>
          <div className="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-1 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
            <div className="items-center sm:flex xl:block 2xl:flex sm:space-x-4 xl:space-x-0 2xl:space-x-4">
            <ImageCircleSmall
              id="image-circle-small"
              src="https://flowbite-admin-dashboard.vercel.app/images/users/bonnie-green-2x.png"
              alt="Image Square Small Small"
            />
              <div>
                <h3 className="mb-1 text-xl font-semibold text-gray-900 dark:text-white">
                  Image Circle Small
                </h3>
                <div className="mb-4 text-sm text-gray-500 dark:text-gray-400">
                  img: rounded-full w-9 h-9
                </div>
              </div>
          </div></div>
        </div>

        <h5 className="text-center text-4xl font-bold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-3xl dark:text-white">
          Images Square, Rounded and Circle
        </h5>
        <div className="grid grid-cols-3 px-4 pt-6 gap-4 mb-4 dark:bg-gray-900">
          <div className="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-1 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
            <div className="items-center sm:flex xl:block 2xl:flex sm:space-x-4 xl:space-x-0 2xl:space-x-4">
              <ImageSquare
                id={"image-square-example"}
                src={"https://flowbite-admin-dashboard.vercel.app/images/users/bonnie-green-2x.png"}
                alt={"Image Square"}
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
              <ImageRounded
                id={"image-rounded-example"}
                src={"https://flowbite-admin-dashboard.vercel.app/images/users/bonnie-green-2x.png"}
                alt={"Image Rounded"}
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
              <ImageCircle
                id={"image-circle-example"}
                src={"https://flowbite-admin-dashboard.vercel.app/images/users/bonnie-green-2x.png"}
                alt={"Image Circle"}
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
              <ImageCaption
                id={"image-caption-example"}
                src={"https://flowbite-admin-dashboard.vercel.app/images/users/bonnie-green-2x.png"}
                alt={"Image Caption"}
                caption={"Image Caption"}
              />
          </div>

          <div className="flex items-center justify-center col-span-1">
            <ImageGrayCaption
                id={"image-gray-caption-example"}
                route="/"
                src={"https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png"}
                alt={"Image Gray With Caption"}
                caption={"Image Grayscale With Caption"}
            />
          </div>

          <div className="flex items-center justify-center col-span-1">
            <ImageGray
                id={"image-gray-caption-example"}
                src={"https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png"}
                alt={"Image Gray"}
                caption={"Image Grayscale With Caption"}
            />
            {/* <img
              className="h-auto max-w-full transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png"
              alt="Image Grayscale"
              title="Image Grayscale"
            /> */}
          </div>

          <div className="flex items-center justify-center col-span-1">
            <ImageBlur
              id={"image-blur-example"}
              src={"https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png"}
              alt={"Image Blur"}
            />
          </div>
        </div>
      </PanelLayout>
    </>
  );
};

export default Image;
