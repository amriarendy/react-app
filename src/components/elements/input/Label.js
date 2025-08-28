const Label = (children, props) => {
  const { type, htmlFor, required } = props;
  return (
    <>
      {type == "hidden" ? (
        ""
      ) : (
        <label
          htmlFor={htmlFor}
          className="block mb-2 font-semibold text-sm font-medium text-gray-900 dark:text-white"
        >
          {children}
          {required ? <span className="text-red-600"> *</span> : null}
        </label>
      )}
    </>
  );
};

export default Label;
