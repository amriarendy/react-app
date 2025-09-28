import Button from "../../../elements/button/Button";
import Image from "../../../elements/image/Image";

const StoreSelectoreImage = ({ image }) => {
  return (
    <>
      <Button
        id={"selectImageStore"}
        type={"button"}
        className={
          "relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
        }
      >
        <span className="sr-only">Angled view</span>
        <span className="absolute inset-0 overflow-hidden rounded-md">
          <Image
            src={image}
            alt=""
            classname="h-full w-full object-cover object-center"
          />
        </span>
        <span
          className="pointer-events-none absolute inset-0 rounded-md ring-2 ring-transparent ring-offset-2"
          aria-hidden="true"
        ></span>
      </Button>
    </>
  );
};

export default StoreSelectoreImage;
