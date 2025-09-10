export function Input({
  id,
  type,
  name,
  placeholder,
  classname,
  required,
  value,
  onChange,
  readonly,
  disabled,
}) {
  return (
    <>
      <input
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        // className={`block w-full p-2.5 sm:text-sm rounded-lg shadow-sm border
        // focus:ring-gray-400 focus:border-gray-400
        // dark:text-white dark:placeholder-gray-400 dark:focus:ring-gray-600 dark:focus:border-gray-600
        // ${
        //   readonly
        //     ? "bg-gray-300 dark:bg-gray-700 cursor-not-allowed"
        //     : "bg-white dark:bg-gray-100"
        // }
        // ${
        //   disabled
        //     ? "bg-gray-200 dark:bg-gray-600 opacity-70 cursor-not-allowed"
        //     : ""
        // }
        // ${classname}`}
        // {...(required ? { required: true } : {})}
        className={`block w-full p-2.5 text-gray-900 sm:text-sm rounded-lg shadow-sm border border-gray-300 focus:ring-gray-400 focus:border-gray-400 dark:text-white dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-gray-600 dark:focus:border-gray-600 ${classname}`}
        placeholder={placeholder}
        {...(required ? { required: true } : {})}
        {...(readonly ? { readonly: true } : {})}
        {...(disabled ? { disabled: true } : {})}
      />
    </>
  );
}

export default Input;
