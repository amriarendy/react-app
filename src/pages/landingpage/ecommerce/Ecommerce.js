import Paginate from "../../../components/molecules/pagination/Paginate";
import { SearchSort } from "../../../components/molecules/search/SearchSort";
import StoreList from "../../../components/organisms/section/landingpage/store/StoreList";
import Layout from "../../Layout";

const Ecommerce = () => {
  return (
    <>
      <Layout>
        <section className="bg-gray-50 antialiased dark:bg-gray-800">
          <div class="mx-auto max-w-2xl text-center px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              Store
            </h2>
            <p class="mt-2 text-lg leading-8 text-gray-600">
              Learn how to grow your business with our expert advice.
            </p>
            {/* <input group */}
            <SearchSort />
            {/* Product 1 */}
            <div class="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
              <StoreList />
              <StoreList />
              <StoreList />
              <StoreList />
              <StoreList />
              <StoreList />
            </div>
            <Paginate />
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Ecommerce;
