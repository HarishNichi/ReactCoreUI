import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { CFormSelect, CFormLabel, CFormFeedback } from '@coreui/react';

const CustomSelect = forwardRef(({ id, label, options = [], onChange, value = '', disabled = false, required = false, ...rest }, ref) => {
  const [error, setError] = useState('');

  const validate = (value) => {
    if (required && !value) {
      return 'This field is required';
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
      <CFormSelect 
        id={id}
        value={value}
        onChange={(evt) => handleChange(evt.target.value)}
        disabled={disabled}
        required={required}
        invalid={!!error}
        {...rest}
      >
        <option value="">Select an option</option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </CFormSelect>
      {error && <CFormFeedback invalid>{error}</CFormFeedback>}
    </div>
  );
});

export default CustomSelect;
