const Paginate = ({ children, currentPage, totalPages, onPageChange }) => {
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }
  return <>{children}</>;
};

export default Paginate;
