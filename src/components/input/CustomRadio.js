import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { CFormCheck, CFormFeedback } from '@coreui/react';

const CustomRadio = forwardRef(({ name, options = [], value = '', onChange, disabled = false, required = false, ...rest }, ref) => {
  const [error, setError] = useState('');

  const validate = () => {
    if (required && !value) {
      return 'This field is required';
    }
    return '';
  };

  const handleChange = (value) => {
    onChange(value);
    setError(validate());
  };

  useImperativeHandle(ref, () => ({
    validate: () => {
      const errorMessage = validate();
      setError(errorMessage);
      return !errorMessage;
    },
  }));

  return (
    <div>
      {options.map((option, index) => (
        <CFormCheck 
          key={index}
          type="radio"
          name={name}
          id={option.value}
          label={required ? `${option.label} *` : option.label}
          value={option.value}
          checked={value === option.value}
          onChange={(evt) => handleChange(evt.target.value)}
          disabled={disabled}
          {...rest}
        />
      ))}
      {error && <CFormFeedback invalid>{error}</CFormFeedback>}
    </div>
  );
});

export default CustomRadio;
