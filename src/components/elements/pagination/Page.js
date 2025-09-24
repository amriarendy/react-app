import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Page = ({ currentPage, totalPages, onPageChange }) => {
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 disabled:opacity-50"
      >
        <span className="sr-only">Previous</span>
        <IoIosArrowBack aria-hidden="true" className="size-5" />
      </button>

      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ring-1 ring-gray-300 ring-inset focus:z-20 
            ${
              page === currentPage
                ? "bg-indigo-600 text-white"
                : "text-gray-900 hover:bg-gray-50"
            }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 disabled:opacity-50"
      >
        <span className="sr-only">Next</span>
        <IoIosArrowForward aria-hidden="true" className="size-5" />
      </button>
    </>
  );
};

export default Page;
