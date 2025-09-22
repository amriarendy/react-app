import CardGroup from "../../../elements/card/Card";
import Image from "../../../elements/image/Image";

const Card = () => {
    return (
      <>
        <div className="grid grid-cols-1 px-4 pt-6 lg:grid-cols-1 gap-4 mb-4">
          <CardGroup header="Card Header" footer="Card Footer" cols="4">
            <Image
              id="image-square-small"
              src="https://flowbite-admin-dashboard.vercel.app/images/users/bonnie-green-2x.png"
              alt="Image Square Small"
              classname="mb-4 w-28 h-28 sm:mb-0 xl:mb-4 2xl:mb-0"
            />
            <Image
              id="image-square-small"
              src="https://flowbite-admin-dashboard.vercel.app/images/users/bonnie-green-2x.png"
              alt="Image Square Small"
              classname="mb-4 w-28 h-28 sm:mb-0 xl:mb-4 2xl:mb-0"
            />
            <Image
              id="image-square-small"
              src="https://flowbite-admin-dashboard.vercel.app/images/users/bonnie-green-2x.png"
              alt="Image Square Small"
              classname="mb-4 w-28 h-28 sm:mb-0 xl:mb-4 2xl:mb-0"
            />
            <Image
              id="image-square-small"
              src="https://flowbite-admin-dashboard.vercel.app/images/users/bonnie-green-2x.png"
              alt="Image Square Small"
              classname="mb-4 w-28 h-28 sm:mb-0 xl:mb-4 2xl:mb-0"
            />
            <Image
              id="image-square-small"
              src="https://flowbite-admin-dashboard.vercel.app/images/users/bonnie-green-2x.png"
              alt="Image Square Small"
              classname="mb-4 w-28 h-28 sm:mb-0 xl:mb-4 2xl:mb-0"
            />
          </CardGroup>
        </div>
      </>
    );
  };
  
  export default Card;
  