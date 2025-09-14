import { Link } from "react-router-dom";

const ImageCaption = ({ children, caption, route, classname }) => {
  return (
    <>
      <figure className="max-w-lg text-center">
        <Link to={route}>{children}</Link>
        <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">
          <p>{caption}</p>
        </figcaption>
      </figure>
    </>
  );
};

export default ImageCaption;
