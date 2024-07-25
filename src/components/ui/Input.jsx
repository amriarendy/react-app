import { FaSearch, FaCodeBranch } from "react-icons/fa";

export function Input({
  id,
  label,
  type,
  name,
  placeholder,
  required,
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
        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder}
        {...(required ? { required: true } : {})}
        {...(readonly ? { readonly: true } : {})}
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
        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        aria-describedby={id}
        placeholder={placeholder}
        {...(required ? { required: true } : {})}
        {...(readonly ? { readonly: true } : {})}
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
  name,
  placeholder,
  required,
  readonly,
  disabled,
  help,
}) {
  return (
    <>
      <div className="flex items-center max-w-sm mx-auto">
        <label htmlFor={id} className="sr-only">
          Search
        </label>
        <div className="relative w-full">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <FaCodeBranch className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          </div>
          <input
            type="text"
            id="simple-search"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search branch name..."
            required
          />
        </div>
        <button
          type="submit"
          className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <FaSearch className="w-4 h-4" aria-hidden="true" />
          <span className="sr-only">Search</span>
        </button>
      </div>
    </>
  );
}
