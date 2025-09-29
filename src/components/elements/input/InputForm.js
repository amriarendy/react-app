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
  onSubmit,
  classname,
  readonly,
  disabled,
}) => {
  return (
    <>
      <form action={onSubmit}>
        {label == null ? "" : <Label htmlFor={id} label={label} />}
        <div className="flex items-center">
          <div className="relative w-full">
            <Input
              value={value}
              onChange={onChange}
              id={id}
              type={type}
              name={name}
              className={classname}
              placeholder={placeholder}
              {...(required ? { required: true } : {})}
              {...(disabled ? { disabled: true } : {})}
              {...(required ? { required: true } : {})}
              {...(readonly ? { readOnly: true } : {})}
              {...(disabled ? { disabled: true } : {})}
            />
          </div>
          {children}
        </div>
      </form>
    </>
  );
};

export default InputForm;
