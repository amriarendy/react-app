import Image from "../../../elements/image/Image";
import ImageCaption from "../../../elements/image/ImageCaption";
import ImageFigure from "../../../elements/image/ImageFigure";

const Images = () => {
  return (
    <>
      <h3 className="text-center mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-4xl dark:text-white">
        Image Elements!
      </h3>
      <div className="grid grid-cols-1 px-4 pt-6 lg:grid-cols-3 gap-4 mb-4">
        <div className="flex items-center justify-center col-span-1">
          <Image
            id="image-square-small"
            src="https://flowbite-admin-dashboard.vercel.app/images/users/bonnie-green-2x.png"
            alt="Image Square Small"
            classname="mb-4 w-28 h-28 sm:mb-0 xl:mb-4 2xl:mb-0"
          />
        </div>
        <div className="flex items-center justify-center col-span-1">
          <Image
            id="image-square-small"
            src="https://flowbite-admin-dashboard.vercel.app/images/users/bonnie-green-2x.png"
            alt="Image Square Small"
            classname="mb-4 rounded-xl w-28 h-28 sm:mb-0 xl:mb-4 2xl:mb-0"
          />
        </div>
        <div className="flex items-center justify-center col-span-1">
          <Image
            id="image-square-small"
            src="https://flowbite-admin-dashboard.vercel.app/images/users/bonnie-green-2x.png"
            alt="Image Square Small"
            classname="mb-4 rounded-full w-28 h-28 sm:mb-0 xl:mb-4 2xl:mb-0"
          />
        </div>
      </div>
      <h3 className="text-center mt-12 mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-4xl dark:text-white">
        Image Caption and Figure Elements!
      </h3>
      <div className="grid grid-cols-1 px-4 pt-6 lg:grid-cols-2 gap-4 mb-4">
        <div className="flex items-center justify-center col-span-1">
          <ImageCaption
            route={"https://google.com/"}
            caption={"Image Caption"}
            classname={"absolute px-4 text-lg text-white bottom-6"}
          >
            <Image
              id="image caption"
              src="https://flowbite-admin-dashboard.vercel.app/images/users/bonnie-green-2x.png"
              alt="image caption"
              classname="h-auto max-w-full rounded-lg"
            />
          </ImageCaption>
        </div>
        <div className="flex items-center justify-center col-span-1">
          <ImageFigure
            route={"https://google.com/"}
            caption={"Image Figure"}
            classname={"absolute px-4 text-lg text-white bottom-6"}
          >
            <Image
              id="image figure"
              src="https://flowbite-admin-dashboard.vercel.app/images/users/bonnie-green-2x.png"
              alt="image figure"
              classname="h-auto max-w-full rounded-lg"
            />
          </ImageFigure>
        </div>
      </div>
    </>
  );
};

export default Images;
