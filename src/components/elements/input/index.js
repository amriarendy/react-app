import Label from "./Label"

const InputGroup = (props) => {
    const {id,label,type,
        name,
        placeholder,
        required,
        value,
        onChange,
        readonly,
        disabled,} = props;
    return (
        <>
            <div>
                <Label htmlFor={id}>{children}</Label>
                <Input        type={type}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder}
        {...(required ? { required: true } : {})}
        {...(readonly ? { readOnly: true } : {})}
        {...(disabled ? { disabled: true } : {})}/>
            </div>
        </>
    )
}

export default InputGroup;