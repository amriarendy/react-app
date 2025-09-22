const CardGroup = ({ children, header, footer, cols }) => {
  return (
    <>
      <div className="p-4 mb-4 space-y-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
        <h3 className="text-xl font-semibold dark:text-white">{header}</h3>
        <div className={`grid grid-cols-${cols} gap-6`}>{children}</div>
        <h3 className="text-xl font-semibold dark:text-white">{footer}</h3>
      </div>
    </>
  );
};

export default CardGroup;
