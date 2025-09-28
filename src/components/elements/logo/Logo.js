import { Link } from "react-router-dom";
import LOGO from "../../../logo512.png";

const Logo = ({ children, route }) => {
  return (
    <>
      <Link to={route} className="flex items-center">
        <img className="block w-auto h-8 me-3" src={LOGO} alt="logo" />
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
          {children}
        </span>
      </Link>
    </>
  );
};

export default Logo;
