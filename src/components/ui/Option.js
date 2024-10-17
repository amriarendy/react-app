const Option = ({
  id,
  label,
  name,
  required,
  data,
  value,
  onChange,
  selected,
}) => {
  return (
    <>
      <div className="mb-4">
        <label
          htmlFor={id}
          className="block mb-2 text-sm font-semibold font-medium text-gray-900 dark:text-white"
        >
          {label}
          {required ? <span className="text-red-600"> *</span> : null}
        </label>
        <select
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          className="bg-gray-50 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          {...(required ? { required: true } : {})}
        >
          {selected ? (
            <option
              key={selected[0].key}
              value={selected[0].value}
              defaultValue
            >
              {selected[0].label}
            </option>
          ) : null}
          {data.map((item, index) => (
            <option key={item.key ? item.key : index} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default Option;
