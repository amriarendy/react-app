import { Button, ButtonDynamic } from "../../../atoms/Button";
import { CiBookmark } from "react-icons/ci";

const StoreAddCart = ({ image }) => {
    return (
        <>
            
          <form className="mt-6">
            <div className="mt-10 flex">
              <ButtonDynamic
                              id={"addToCart"}
                              type={"submit"}
                              color={"blue"}
                              className={"flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"}
              >
                Add to cart
              </ButtonDynamic>

              <ButtonDynamic
                id={"saveProduct"}
                type="button"
                className="ml-4 flex items-center justify-center rounded-md px-3 py-3 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
              >
                <CiBookmark className="h-6 w-6 flex-shrink-0" />
                <span className="sr-only">Add to favorites</span>
              </ButtonDynamic>
            </div>
          </form>
        </>
    )
}

export default StoreAddCart;