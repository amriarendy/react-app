import Image from "../../../elements/image/Image";

const StoreThumbnail = ({ image, alt }) => {
  return (
    <>
      <div
        id="tabs-1-panel-1"
        aria-labelledby="tabs-1-tab-1"
        role="tabpanel"
        tabindex="0"
      >
        <Image
          src={image}
          alt={alt}
          classname="h-full w-full object-cover object-center sm:rounded-lg"
        />
      </div>
    </>
  );
};

export default StoreThumbnail;
