import StoreAddCart from "../../../organisms/landingpage/store/StoreAddCart";
import StoreRating from "../../../organisms/landingpage/store/StoreRating";
import StoreSelectoreImage from "../../../organisms/landingpage/store/StoreSelectoreImage";
import StoreThumbnail from "../../../organisms/landingpage/store/StoreThumbnail";

const StoreDetail = () => {
  return (
    <div>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
          <div className="flex flex-col-reverse">
            <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
              <div
                className="grid grid-cols-4 gap-6"
                aria-orientation="horizontal"
                role="tablist"
              >
                <StoreSelectoreImage
                  image={
                    "https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-03-product-01.jpg"
                  }
                />
                <StoreSelectoreImage
                  image={
                    "https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-03-product-02.jpg"
                  }
                />
                <StoreSelectoreImage
                  image={
                    "https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-03-product-03.jpg"
                  }
                />
                <StoreSelectoreImage
                  image={
                    "https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-03-product-04.jpg"
                  }
                />
              </div>
            </div>

            <div className="aspect-h-1 aspect-w-1 w-full">
              <StoreThumbnail
                image={
                  "https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-03-product-01.jpg"
                }
                alt={"Angled front view with bag zipped and handles upright."}
              />
            </div>
          </div>

          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
              Zip Tote Basket
            </h1>

            <div className="mt-3">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl tracking-tight text-gray-900 dark:text-gray-300">
                $140
              </p>
            </div>

            <div className="mt-3">
              <StoreRating />
            </div>

            <div className="mt-6">
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6 text-base text-gray-700 dark:text-gray-300">
                <p>
                  The Zip Tote Basket is the perfect midpoint between shopping
                  tote and comfy backpack. With convertible straps, you can hand
                  carry, should sling, or backpack this convenient and spacious
                  bag. The zip top and durable canvas construction keeps your
                  goods protected for all-day use.
                </p>
              </div>
            </div>

            <div>
              <StoreAddCart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreDetail;
