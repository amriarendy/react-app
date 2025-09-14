import { Link } from "react-router-dom";

const ImageFigure = ({ children, caption, route, classname }) => {
  return (
    <>
      <figure className="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
        <Link to={route}>{children}</Link>
        <figcaption className="absolute px-4 text-lg text-white bottom-6">
          <p>{caption}</p>
        </figcaption>
      </figure>
    </>
  );
};

export default ImageFigure;
