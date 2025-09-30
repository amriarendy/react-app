import { useState } from "react";
import Store from "../../../organisms/landingpage/store";

const StoreListView = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;
  return (
    <>
      <Store pagination={{ currentPage, setCurrentPage, totalPages }} />
    </>
  );
};

export default StoreListView;
