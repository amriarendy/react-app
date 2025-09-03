import { Link } from "react-router-dom";

const Href = ({ id, route, children, classname }) => {
  return (
    <>
      <Link to={route} id={id} className={classname}>
        {children}
      </Link>
    </>
  );
};

export default Href;
