const Button = ({ children, id, type, label, icon, color, onClick }) => {
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

const ButtonIcon = ({ children, id, type, color, onClick }) => {
  return (
    <>
      <button
        id={id}
        type={type}
        onClick={onClick}
        className={`text-${color}-600 bg-transparent hover:bg-${color}-200 hover:text-${color}-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-${color}-700 dark:hover:text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-xs px-3 py-1.5 me-2 text-center inline-flex items-center`}
      >
        {children}
      </button>
    </>
  );
};

const ButtonDynamic = ({ children, id, type, className, onClick }) => {
  return (
    <>
      <button id={id} type={type} onClick={onClick} className={className}>
        {children}
      </button>
    </>
  );
};

export { Button, ButtonIcon, ButtonDynamic };
