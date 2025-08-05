import { Link } from "react-router-dom";

const BottomMenu = ({ label = "Resources", links = [] }) => {
  return (
    <div>
      <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">
        {label}
      </h2>
      <ul className="text-gray-500 dark:text-gray-400 font-medium">
        {links.map(([name, route], index) => (
          <li className="mb-4" key={index}>
            <Link to={route} className="hover:underline">
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BottomMenu;
