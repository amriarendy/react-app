import Paginate from "../../../molecules/pagination/Paginate";
import { SearchSort } from "../../../molecules/search/SearchSort";
import TitleDescription from "../../../molecules/title/TitleDescription";
import StoreSquare from "../../../organisms/landingpage/store/StoreSquare";

const StoreList = () => {
  return (
    <>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <TitleDescription
          label={"Ecommerce"}
          description={
            "Learn how to grow your business with our expert advice."
          }
        />
        {/* <input group */}
        <SearchSort />
        {/* input group/ */}
        <div className="mx-auto mt-4 mb-4 grid gap-3 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-3">
          {/* Start Blog */}
          <StoreSquare />
          <StoreSquare />
          <StoreSquare />
          <StoreSquare />
          <StoreSquare />
          <StoreSquare />
          <StoreSquare />
          <StoreSquare />
          <StoreSquare />
          {/* End Blog */}
        </div>
        <div className="w-full text-center">
          <Paginate />
        </div>
      </div>
    </>
  );
};

export default StoreList;
