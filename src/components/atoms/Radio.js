const Radio = ({ id, label, caption, value, onChange }) => {
  return (
    <>
      <div className="flex items-center justify-between py-4">
        <div className="flex flex-col flex-grow">
          <div className="text-lg font-semibold text-gray-900 dark:text-white">
            {label}
          </div>
          <div className="text-base font-normal text-gray-500 dark:text-gray-400">
            {caption}
          </div>
        </div>
        <label
          htmlFor={id}
          className="relative flex items-center cursor-pointer"
        >
          <input
            type="checkbox"
            id={id}
            value={value}
            onChange={onChange}
            className="sr-only"
          />
          <span className="h-6 bg-gray-200 border border-gray-200 rounded-full w-11 toggle-bg dark:bg-gray-700 dark:border-gray-600"></span>
        </label>
      </div>
    </>
  );
};

export default Radio;
