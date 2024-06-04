import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { CFormInput, CFormLabel, CFormFeedback } from '@coreui/react';

const CustomInputs = forwardRef(({ id, label, value = '', onChange, disabled = false, required = false, type = 'text', pattern, minLength, maxLength, ...rest }, ref) => {
  const [error, setError] = useState('');

  const validate = (value) => {
    if (required && !value) {
      return 'This field is required';
    }
    if (pattern && !new RegExp(pattern).test(value)) {
      return 'Invalid format';
    }
    if (minLength && value.length < minLength) {
      return `Minimum length is ${minLength}`;
    }
    if (maxLength && value.length > maxLength) {
      return `Maximum length is ${maxLength}`;
    }
    return '';
  };

  const handleChange = (value) => {
    onChange(value);
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
    <div>
      <CFormLabel htmlFor={id}>
        {label}{required && ' *'}
      </CFormLabel>
      <CFormInput 
        id={id}
        type={type}
        value={value}
        disabled={disabled}
        onChange={(evt) => handleChange(evt.target.value)}
        invalid={!!error}
        {...rest}
      />
      {error && <CFormFeedback invalid>{error}</CFormFeedback>}
    </div>
  );
});

export default CustomInputs;
