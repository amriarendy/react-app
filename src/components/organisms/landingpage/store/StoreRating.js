import { FaRegStar, FaStar } from "react-icons/fa";

const StoreRating = ({ image }) => {
    return (
        <>

<h3 className="sr-only">Reviews</h3>
        <div className="flex items-center">
          <div className="flex items-center">
            <FaStar className="h-5 w-5 flex-shrink-0 text-indigo-500" />
            <FaStar className="h-5 w-5 flex-shrink-0 text-indigo-500" />
            <FaStar className="h-5 w-5 flex-shrink-0 text-indigo-500" />
            <FaStar className="h-5 w-5 flex-shrink-0 text-indigo-500" />
            <FaStar className="h-5 w-5 flex-shrink-0 text-gray-300" />
          </div>
          <p className="sr-only">4 out of 5 stars</p>
        </div>
        </>
    )
}

export default StoreRating;