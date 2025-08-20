import { Link } from "react-router-dom";

const BlogSquare = ({ hide = {} }) => {
  const { description = false, author = false, date = false } = hide;

  return (
    <div className="rounded-lg border bg-white p-6 shadow-sm border-gray-300 dark:bg-gray-800 dark:border-gray-500">
      <div className="h-56 w-full">
        <Link to={"/blog/detail/"}>
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
        </Link>
      </div>
      <span className="bg-purple-100 text-purple-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
        Article
      </span>
      <div className="pt-6">
        <Link
          to={"/blog/detail/"}
          className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white"
        >
          Apple iMac 27", 1TB HDD, Retina 5K Display, M3 Max
        </Link>

        {!description && (
          <p className="text-gray-600 dark:text-gray-400  mt-2">
            Over the past year, Volosoft has undergone many changes! After
            months of preparation and some hard work, we moved to our new
            office.
          </p>
        )}

        {!author && !date && (
          <div className="flex items-center mt-4">
            <img
              src="https://placehold.co/32x32"
              alt="Profile picture of Jese Leos"
              className="w-8 h-8 rounded-full"
            />
            <div className="ml-2">
              {!author && (
                <p className="text-gray-800 text-sm font-semibold">Jese Leos</p>
              )}
              {!date && <p className="text-gray-600 text-sm">Aug 15, 2021</p>}
            </div>
          </div>
        )}
        <div class="flex mt-2">
          <Link
            to={"/blog/detail/"}
            className="text-sm font-semibold leading-6 text-indigo-600 dark:text-slate-400 dark:text-white"
            aria-describedby="featured-post"
          >
            Continue reading <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogSquare;
