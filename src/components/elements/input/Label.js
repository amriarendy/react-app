const Label = ({ label, type, htmlFor, required }) => {
  return (
    <>
      {type == "hidden" ? (
        ""
      ) : (
        <label
          htmlFor={htmlFor}
          className="block mb-2 font-semibold text-sm font-medium text-gray-900 dark:text-white"
        >
          {label}
          {required ? <span className="text-red-600"> *</span> : null}
        </label>
      )}
    </>
  );
};

export default Label;
