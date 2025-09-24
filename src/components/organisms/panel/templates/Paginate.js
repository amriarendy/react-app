import { useState } from "react";
import CardGroup from "../../../elements/card/Card";
import Pagination from "../../../elements/pagination/index";

const Paginate = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;
  return (
    <>
      <div className="grid grid-cols-1 px-4 pt-6 lg:grid-cols-1 gap-4 mb-4">
        <CardGroup header="Pagination">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </CardGroup>
      </div>
    </>
  );
};

export default Paginate;
