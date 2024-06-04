import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { CFormFloating, CFormInput, CFormLabel, CFormFeedback } from '@coreui/react';

const CustomFormFloating = forwardRef(({ id, type, placeholder, label, required = false, ...rest }, ref) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const validate = (value) => {
    if (required && !value) {
      return 'This field is required';
    }
    return '';
  };

  const handleChange = (value) => {
    setValue(value);
    setError(validate(value));
  };

  useImperativeHandle(ref, () => ({
    validate: () => {
      const errorMessage = validate(value);
      setError(errorMessage);
      return !errorMessage;
    },
  }));

  return (
    <CFormFloating className="mb-3" {...rest}>
      <CFormInput type={type} id={id} placeholder={placeholder} value={value} onChange={(e) => handleChange(e.target.value)} />
      <CFormLabel htmlFor={id}>{label}{required && ' *'}</CFormLabel>
      {error && <CFormFeedback invalid>{error}</CFormFeedback>}
    </CFormFloating>
  );
});

export default CustomFormFloating;
