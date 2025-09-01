import { useState } from "react";
import { FaRegEye, FaRegEyeSlash, FaSearch } from "react-icons/fa";
import Label from "./Label";
import Input from "./Input";
import Button from "../button/Button";

const InputForm = ({
  children,
  id,
  type,
  name,
  label,
  placeholder,
  required,
  value,
  onChange,
  readonly,
  disabled,
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
            className={`bg-gray-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
            placeholder={placeholder}
            {...(required ? { required: true } : {})}
            {...(disabled ? { disabled: true } : {})}
            {...(required ? { required: true } : {})}
            {...(readonly ? { readOnly: true } : {})}
            {...(disabled ? { disabled: true } : {})}
          />
        </div>
        <Button
          id={"btnDeleteProduct"}
          type={"button"}
          classname={
            "p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          }
        >
          {children}
        </Button>
      </div>
    </>
  );
};

export default InputForm;
