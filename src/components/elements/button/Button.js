const Button = (props) => {
  const { children, id, type, color, onClick, classname } = props;
  return (
    <>
      <button
        id={id}
        type={type}
        onClick={onClick}
        className={`inline-flex items-center justify-center w-1/2 text-sm font-medium text-center text-${color}-600 bg-${color}-600 rounded-lg bg-${color}-700 hover:bg-${color}-800 focus:ring-4 focus:ring-${color}-300 sm:w-auto dark:bg-${color}-600 dark:hover:bg-${color}-700 dark:focus:ring-${color}-800`}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
