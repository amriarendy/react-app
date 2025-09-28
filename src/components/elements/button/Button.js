const Button = (props) => {
  const { children, id, type, onClick, classname } = props;
  return (
    <>
      <button
        id={id}
        type={type}
        onClick={onClick}
        className={`font-semibold shadow-sm ${classname} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
