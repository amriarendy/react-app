import { SIDEBAR_MENU_ITEMS } from "../../libs/constant/navigation";

function MenuList({ item }) {
  return (
    <li>
      <Link
        to={item.route}
        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
      >
        {item.icon}
        <span className="ms-3">{item.label}</span>
      </Link>
    </li>
  );
}

export default MenuList;
