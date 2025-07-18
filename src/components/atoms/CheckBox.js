const CheckBox = ({ id, name, label, value, onChange, required }) => {
  return (
    <>
      <div className="flex items-center h-5">
        <input
          id={id}
          aria-describedby={id}
          name={name}
          value={value}
          onChange={onChange}
          type="checkbox"
          className="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
          {...(required ? { required: true } : {})}
        />
      </div>
      {label ? (
        <div className="ml-3 text-sm">
          <label
            htmlFor={id}
            className="font-medium text-gray-900 dark:text-white"
          >
            {label}
          </label>
        </div>
      ) : null}
    </>
  );
};

export default CheckBox;
