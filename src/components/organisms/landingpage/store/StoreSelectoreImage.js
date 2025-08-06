import { ButtonDynamic } from "../../../atoms/Button"

const StoreSelectoreImage = ({ image }) => {
    return (
        <>
          <ButtonDynamic
              id={"selectImageStore"}
              type={"button"}
              className={"relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"}
          >
            <span className="sr-only">Angled view</span>
            <span className="absolute inset-0 overflow-hidden rounded-md">
              <img
                src={ image }
                alt=""
                className="h-full w-full object-cover object-center"
              />
            </span>
            <span
              className="pointer-events-none absolute inset-0 rounded-md ring-2 ring-transparent ring-offset-2"
              aria-hidden="true"
            ></span>
          </ButtonDynamic>
        </>
    )
}

export default StoreSelectoreImage;