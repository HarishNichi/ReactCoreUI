import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { CFormCheck, CFormFeedback } from '@coreui/react';

const CustomCheckbox = forwardRef(({ id, label, checked = false, onChange, disabled = false, required = false, ...rest }, ref) => {
  const [error, setError] = useState('');

  const validate = () => {
    if (required && !checked) {
      return 'This field is required';
    }
    return '';
  };

  const handleChange = (evt) => {
    onChange(evt.target.checked);
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
      <CFormCheck 
        id={id} 
        label={required ? `${label} *` : label}
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
        {...rest}
      />
      {error && <CFormFeedback invalid>{error}</CFormFeedback>}
    </div>
  );
});

export default CustomCheckbox;
