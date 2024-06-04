import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { CFormTextarea, CFormLabel, CFormFeedback } from '@coreui/react';

const CustomFormTextarea = forwardRef(({ id, label, value = '', onChange, rows, required = false, minLength, maxLength, ...rest }, ref) => {
  const [error, setError] = useState('');

  const validate = (value) => {
    if (required && !value) {
      return 'This field is required';
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
      <CFormTextarea 
        id={id}
        value={value}
        rows={rows}
        onChange={(evt) => handleChange(evt.target.value)}
        invalid={!!error}
        {...rest}
      />
      {error && <CFormFeedback invalid>{error}</CFormFeedback>}
    </div>
  );
});

export default CustomFormTextarea;
