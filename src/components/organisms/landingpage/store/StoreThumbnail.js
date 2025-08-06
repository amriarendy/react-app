import { Button, ButtonDynamic } from "../../../atoms/Button";

const StoreThumbnail = ({ image, alt }) => {
  return (
    <>
      <div
        id="tabs-1-panel-1"
        aria-labelledby="tabs-1-tab-1"
        role="tabpanel"
        tabindex="0"
      >
        <img
          src={image}
          alt={alt}
          className="h-full w-full object-cover object-center sm:rounded-lg"
        />
      </div>
    </>
  );
};

export default StoreThumbnail;
