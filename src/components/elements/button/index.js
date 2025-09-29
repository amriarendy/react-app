import Button from "./Button";

const ButtonGroup = ({ children, id, type, onClick, classname }) => {
  return  (
    <>
      <div className="mt-2">
        <Button
          id={id}
          type={type}
          onClick={onClick}
          classname={classname}
        >
          {children}
        </Button>
      </div>
    </>
  )
};

export default ButtonGroup;
