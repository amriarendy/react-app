const Radio = ({ id, value, onChange }) => {
  return (
    <>
      <label htmlFor={id} className="relative flex items-center cursor-pointer">
        <input
          type="checkbox"
          id={id}
          value={value}
          onChange={onChange}
          className="sr-only"
        />
        <span className="h-6 bg-gray-200 border border-gray-200 rounded-full w-11 toggle-bg dark:bg-gray-700 dark:border-gray-600"></span>
      </label>
    </>
  );
};

export default Radio;
