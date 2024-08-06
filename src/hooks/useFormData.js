const useFormData = (initialValues) => {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    
    const handleChange = (e) => {
      const { name, value, type, files } = e.target;
      setValues({
        ...values,
        [name]: type === 'file' ? files[0] : value,
      });
    };
  
    const handleSubmit = async (endpoint, navigate) => async (e) => {
      e.preventDefault();
      
      const formData = new FormData();
      Object.keys(values).forEach((key) => {
        if (values[key]) {
          formData.append(key, values[key]);
        }
      });
  
      formData.append('createdAt', new Date().toISOString());
      formData.append('updatedAt', new Date().toISOString());
      
      try {
        await SERVER_API(endpoint, {
          method: 'POST',
          data: formData,
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        navigate('/user');
      } catch (error) {
        if (error.response) {
          console.error('Server responded with an error:', error.response.data);
          console.error('Server status code:', error.response.status);
          console.error('Server headers:', error.response.headers);
        } else if (error.request) {
          console.error('No response received:', error.request);
        } else {
          console.error('Error message:', error.message);
        }
      }
    };
  
    return {
      values,
      handleChange,
      handleSubmit,
      errors,
      setErrors,
    };
  };
  
  export default useFormData;