import { Link } from "react-router-dom"

const BottomMoreDetail = ({detail, icon, links = []}) => {
    return <>
        
        <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                {detail}
            </span>
            <div className="flex mt-4 sm:justify-center sm:mt-0">
            {links.map(([icon, label, route], index) => (
              <Link
              to={route}
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
            {icon}
              <span className="sr-only">{label}</span>
            </Link>
                ))}
            </div>
          </div>
    </>
}

export default BottomMoreDetail;