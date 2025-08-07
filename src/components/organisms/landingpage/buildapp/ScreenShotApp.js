import { ImageCaption } from "../../../atoms/Image";

const ScreenShotApp = () => {
  return (
    <div className="text-justify pb-4">
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl dark:text-white">
        #ScreenShot App
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 px-4 pt-6 gap-4 mb-4 dark:bg-gray-900">
        <div className="flex items-center justify-center">
          <ImageCaption
            id="dashboard-screenshot"
            src="/Dashboard.png"
            alt="Dashboard Screenshot"
            caption="Dashboard Screenshot"
          />
        </div>

        <div className="flex items-center justify-center">
          <ImageCaption
            id="home-screenshot"
            src="/Home.png"
            alt="Home Screenshot"
            caption="Home Screenshot"
          />
        </div>

        <div className="flex items-center justify-center">
          <ImageCaption
            id="blog-screenshot"
            src="/Blog.png"
            alt="Blog Screenshot"
            caption="Blog Screenshot"
          />
        </div>
      </div>
    </div>
  );
};

export default ScreenShotApp;
