const TextArea = ({
    id,
    name,
    rows,
    placeholder,
    value,
    onChange,
    classname,
    required,
  }) => {
    return (
      <>
        <textarea
          id={id}
          name={name}
          rows={rows}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`${classname} block p-2.5 w-full text-sm text-gray-700 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 `}
          {...(required ? { required: true } : {})}
        ></textarea>
      </>
    );
  };
  
  export default TextArea;
  