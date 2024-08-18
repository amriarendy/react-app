import { useState } from "react";
import { FaRegEye, FaRegEyeSlash, FaSearch } from "react-icons/fa";

export function Input({
  id,
  label,
  type,
  name,
  placeholder,
  required,
  value,
  onChange,
  readonly,
  disabled,
}) {
  return (
    <>
      {type == "hidden" ? (
        ""
      ) : (
        <label
          htmlFor={id}
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          {label}
          {required ? <span className="text-red-600"> *</span> : null}
        </label>
      )}
      <input
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder}
        {...(required ? { required: true } : {})}
        {...(readonly ? { readOnly: true } : {})}
        {...(disabled ? { disabled: true } : {})}
      />
    </>
  );
}

export function InputFile({
  id,
  label,
  name,
  placeholder,
  required,
  value,
  onChange,
  readonly,
  disabled,
  help,
}) {
  return (
    <>
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
        {required ? <span className="text-red-600"> *</span> : null}
      </label>
      <input
        type="file"
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        placeholder={placeholder}
        {...(required ? { required: true } : {})}
        {...(readonly ? { readOnly: true } : {})}
        {...(disabled ? { disabled: true } : {})}
      />
      <p className="mt-1 text-sm text-gray-500 dark:text-gray-300" id={id}>
        {help}
      </p>
    </>
  );
}

export function InputSearch({
  id,
  label,
  type,
  name,
  placeholder,
  required,
  value,
  onChange,
  readonly,
  disabled,
}) {
  return (
    <>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <FaSearch
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            fill="currentColor"
          />
        </div>
        <input
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder={placeholder}
          {...(required ? { required: true } : {})}
          {...(readonly ? { readOnly: true } : {})}
          {...(disabled ? { disabled: true } : {})}
        />
      </div>
    </>
  );
}

export function InputButton({
  id,
  label,
  type,
  name,
  icon,
  placeholder,
  required,
  value,
  onChange,
  disabled,
}) {
  const [isReadOnly, setReadOnly] = useState(true);

  const toggleReadOnly = () => {
    setReadOnly(!isReadOnly);
  };

  return (
    <>
      {type !== "hidden" && (
        <label
          htmlFor={id}
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          {label}
          {required ? <span className="text-red-600"> *</span> : null}
        </label>
      )}
      <div className="flex items-center">
        <div className="relative w-full">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            {icon}
          </div>
          <input
            type={type}
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            className={`${
              isReadOnly ? "bg-gray-300" : "bg-gray-50"
            } border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
            placeholder={placeholder}
            {...(required ? { required: true } : {})}
            {...(disabled ? { disabled: true } : {})}
            readOnly={isReadOnly}
          />
        </div>
        <button
          onClick={toggleReadOnly}
          type="button"
          className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          {isReadOnly ? (
            <FaRegEyeSlash className="w-4 h-4" />
          ) : (
            <FaRegEye className="w-4 h-4" />
          )}
        </button>
      </div>
    </>
  );
}
