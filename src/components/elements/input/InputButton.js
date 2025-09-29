import Label from "./Label";
import Input from "./Input";
import Button from "../button/Button";

const InputButton = ({
  children,
  id,
  type,
  name,
  label,
  placeholder,
  required,
  value,
  onChange,
  onClick,
  classname,
  readonly,
  disabled,
  caption,
  validate,
}) => {
  return (
    <>
      {label == null ? "" : <Label htmlFor={id} label={label} />}
      <div className="flex items-center">
        <div className="relative w-full">
          <Input
            id={id}
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            classname={classname}
            placeholder={placeholder}
            {...(required ? { required: true } : {})}
            {...(disabled ? { disabled: true } : {})}
            {...(required ? { required: true } : {})}
            {...(readonly ? { readOnly: true } : {})}
            {...(disabled ? { disabled: true } : {})}
          />
        </div>
        <Button
          id={id}
          type={type}
          onClick={onClick}
          classname={
            "p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          }
        >
          {children}
        </Button>
      </div>
      {caption && (
        <p className="text-sm text-gray-500 dark:text-gray-300">{caption}</p>
      )}
      {validate && (
        <p className="font-semibold text-red-600 mt-2 text-sm">{validate}</p>
      )}
    </>
  );
};

export default InputButton;
