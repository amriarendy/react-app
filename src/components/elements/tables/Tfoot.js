import { useState } from "react";
import Pagination from "../pagination";

const Tfoot = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;
  return (
    <>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </>
  );
};

export default Tfoot;
