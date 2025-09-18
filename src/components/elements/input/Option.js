const Option = ({
    children,
    id,
    name,
    required,
    value,
    onChange,
    selected,
  }) => {
    console.log("Selected: ", selected[0]);
    return (
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className="bg-gray-50 border-gray-300 text-gray-900 sm:text-sm rounded-lg 
                   focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                   dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                   dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        {...(required ? { required: true } : {})}
      >
        {selected && (
          <option key={selected[0].key} value={selected[0].value}>
            {selected[0].label}
          </option>
        )}
        {children}
      </select>
    );
  };
  
  export default Option;
  