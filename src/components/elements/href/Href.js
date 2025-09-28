import { Link } from "react-router-dom";

const Href = ({ id, route, children, classname }) => {
  return (
    <>
      <Link
        to={route}
        id={id}
        className={`shadow-sm ${classname} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`}
      >
        {children}
      </Link>
    </>
  );
};

export default Href;
