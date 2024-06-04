import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { CFormSwitch, CFormFeedback } from '@coreui/react';

const CustomFormSwitch = forwardRef(({ label, id, defaultChecked, disabled, required = false, ...rest }, ref) => {
  const [error, setError] = useState('');

  const validate = (checked) => {
    if (required && !checked) {
      return 'This field is required';
    }
    return '';
  };

  const handleChange = (checked) => {
    setError(validate(checked));
  };

  useImperativeHandle(ref, () => ({
    validate: () => {
      const errorMessage = validate(defaultChecked);
      setError(errorMessage);
      return !errorMessage;
    },
  }));

  return (
    <div>
      <CFormSwitch
        label={label}
        id={id}
        defaultChecked={defaultChecked}
        disabled={disabled}
        onChange={(evt) => handleChange(evt.target.checked)}
        {...rest}
      />
      {error && <CFormFeedback invalid>{error}</CFormFeedback>}
    </div>
  );
});

export default CustomFormSwitch;
