import React, { useState } from 'react';

function withFormHandling(WrappedComponent) {
  return function FormHandler(props) {
    const [formData, setFormData] = useState({});
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);

    const handleFormSubmit = async (event) => {
      event.preventDefault();
      setLoading(true);
      setSuccess(null);
      setError(null);

      try {
        if (props.onSubmit) {
          // Call the dynamic form submission logic function passed in the props
          await props.onSubmit(formData);
        }

        setLoading(false);
        setSuccess(true);
        setError(null);
      } catch (error) {
        setLoading(false);
        setSuccess(false);
        setError(error.message);
      }
    };

    const handleFormChange = (event) => {
      const { name, value } = event.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };

    return (
      <WrappedComponent
        {...props}
        formData={formData}
        loading={loading}
        success={success}
        error={error}
        onFormSubmit={handleFormSubmit}
        onFormChange={handleFormChange}
      />
    );
  };
}

export default withFormHandling;
