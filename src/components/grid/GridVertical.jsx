const GridVertical = ({ cols, children }) => {
  return (
    <>
      <div
        className={`grid grid-cols-${cols} bg-white px-4 pt-2 pb-2 sm:grid-cols-1 md:grid-cols-1 xl:grid-cols-${cols} xl:gap-4 dark:bg-gray-900`}
      >
        {children}
      </div>
    </>
  );
};

export default GridVertical;
