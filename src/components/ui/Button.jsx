const Button = ({ id, type, label, icon, color, onClick }) => {
  return (
    <>
      <button
        id={id}
        type={type}
        onClick={onClick}
        className={`inline-flex justify-center w-1/2 px-3 py-2 text-sm font-medium text-center text-white bg-${color}-600 rounded-lg bg-${color}-700 hover:bg-${color}-800 focus:ring-4 focus:ring-${color}-300 sm:w-auto dark:bg-${color}-600 dark:hover:bg-${color}-700 dark:focus:ring-${color}-800`}
      >
        {icon}
        {label}
      </button>
    </>
  );
};

export default Button;
