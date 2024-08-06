import { useState } from "react";

const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setValues({
        ...values,
        [name]: files[0], // Menyimpan file input
      });
    } else {
      setValues({
        ...values,
        [name]: value,
      });
    }
  };
  return {
    values,
    handleChange,
  };
};

export default useForm;
