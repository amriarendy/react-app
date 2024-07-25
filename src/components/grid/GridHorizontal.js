const GridHorizontal = ({ cols, children }) => {
  return (
    <>
      <div
        className={`grid grid-cols-${cols} bg-white gap-4 px-4 pt-2 pb-2 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-${cols}`}
      >
        {children}
      </div>
    </>
  );
};

export default GridHorizontal;
