import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { CFormRange, CFormFeedback } from '@coreui/react';

const CustomFormRange = forwardRef(({ min, max, label, onChange, defaultValue, id, required = false, ...rest }, ref) => {
  const [error, setError] = useState('');

  const validate = (value) => {
    if (required && (value < min || value > max)) {
      return `Value must be between ${min} and ${max}`;
    }
    return '';
  };

  const handleChange = (value) => {
    onChange(value);
    setError(validate(value));
  };

  useImperativeHandle(ref, () => ({
    validate: () => {
      const value = parseInt(defaultValue);
      const errorMessage = validate(value);
      setError(errorMessage);
      return !errorMessage;
    },
  }));

  return (
    <div>
      <label htmlFor={id}>
        {label}{required && ' *'}
      </label>
      <CFormRange
        min={min}
        max={max}
        id={id}
        defaultValue={defaultValue}
        onChange={(evt) => handleChange(evt.target.value)}
        {...rest}
      />
      {error && <CFormFeedback invalid>{error}</CFormFeedback>}
    </div>
  );
});

export default CustomFormRange;
