import Page from "./Page";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex items-center justify-center border-gray-200 px-4 py-3 sm:px-6">
      <div className="sm:flex sm:flex-1 sm:items-center sm:justify-center">
        <nav
          aria-label="Pagination"
          className="isolate inline-flex -space-x-px rounded-md shadow-xn"
        >
          <Page
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={onPageChange}
          />
        </nav>
      </div>
    </div>
  );
};

export default Pagination;
