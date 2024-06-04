import React, { forwardRef, useImperativeHandle, useState } from 'react';
import {
  CFormCheck,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CButton,
  CFormRange,
  CFormFloating,
  CFormTextarea,
  CFormSwitch,
  CFormFeedback,
} from '@coreui/react';

const CustomCheckbox = forwardRef(({ id, label, checked = false, onChange = () => {}, disabled = false, required = false, ...rest }, ref) => {
  const [error, setError] = useState('');
  const [value, setValue] = useState(checked);

  const validate = (checked) => {
    if (required && !checked) {
      return 'This field is required';
    }
    return '';
  };

  const handleChange = (evt) => {
    const isChecked = evt.target.checked;
    setValue(isChecked);
    onChange(isChecked);
    setError(validate(isChecked));
  };

  useImperativeHandle(ref, () => ({
    validate: () => {
      const errorMessage = validate(value);
      setError(errorMessage);
      return !errorMessage;
    },
    getValue: () => value,
  }));

  return (
    <div>
      <CFormCheck
        id={id}
        label={required ? `${label} *` : label}
        checked={value}
        onChange={handleChange}
        disabled={disabled}
        {...rest}
      />
      {error && <CFormFeedback invalid>{error}</CFormFeedback>}
    </div>
  );
});

const CustomInput = forwardRef(({ id, label, value = '', onChange, disabled = false, required = false, type = 'text', pattern, minLength, maxLength, ...rest }, ref) => {
  const [error, setError] = useState('');
  const [inputValue, setInputValue] = useState(value);

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
    setInputValue(value);
    onChange(value);
    setError(validate(value));
  };

  useImperativeHandle(ref, () => ({
    validate: () => {
      const errorMessage = validate(inputValue);
      setError(errorMessage);
      return !errorMessage;
    },
    getValue: () => inputValue,
  }));

  return (
    <div>
      <CFormLabel htmlFor={id}>
        {label}{required && ' *'}
      </CFormLabel>
      <CFormInput
        id={id}
        type={type}
        value={inputValue}
        disabled={disabled}
        onChange={(evt) => handleChange(evt.target.value)}
        invalid={!!error}
        {...rest}
      />
      {error && <CFormFeedback invalid>{error}</CFormFeedback>}
    </div>
  );
});

const CustomSelect = forwardRef(({ id, label, options = [], onChange, value = '', disabled = false, required = false, ...rest }, ref) => {
  const [error, setError] = useState('');
  const [selectValue, setSelectValue] = useState(value);

  const validate = (value) => {
    if (required && !value) {
      return 'This field is required';
    }
    return '';
  };

  const handleChange = (value) => {
    setSelectValue(value);
    onChange(value);
    setError(validate(value));
  };

  useImperativeHandle(ref, () => ({
    validate: () => {
      const errorMessage = validate(selectValue);
      setError(errorMessage);
      return !errorMessage;
    },
    getValue: () => selectValue,
  }));

  return (
    <div>
      <CFormLabel htmlFor={id}>
        {label}{required && ' *'}
      </CFormLabel>
      <CFormSelect
        id={id}
        value={selectValue}
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

const CustomRadio = forwardRef(({ name, options = [], value = '', onChange, disabled = false, required = false, ...rest }, ref) => {
  const [error, setError] = useState('');
  const [radioValue, setRadioValue] = useState(value);

  const validate = () => {
    if (required && !radioValue) {
      return 'This field is required';
    }
    return '';
  };

  const handleChange = (value) => {
    setRadioValue(value);
    onChange(value);
    setError(validate());
  };

  useImperativeHandle(ref, () => ({
    validate: () => {
      const errorMessage = validate();
      setError(errorMessage);
      return !errorMessage;
    },
    getValue: () => radioValue,
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
          checked={radioValue === option.value}
          onChange={(evt) => handleChange(evt.target.value)}
          disabled={disabled}
          {...rest}
        />
      ))}
      {error && <CFormFeedback invalid>{error}</CFormFeedback>}
    </div>
  );
});

const CustomFormRange = forwardRef(({ min, max, label, onChange, defaultValue, id, required = false, ...rest }, ref) => {
  const [error, setError] = useState('');
  const [rangeValue, setRangeValue] = useState(defaultValue);

  const validate = (value) => {
    if (required && (value < min || value > max)) {
      return `Value must be between ${min} and ${max}`;
    }
    return '';
  };

  const handleChange = (value) => {
    setRangeValue(value);
    onChange(value);
    setError(validate(value));
  };

  useImperativeHandle(ref, () => ({
    validate: () => {
      const errorMessage = validate(rangeValue);
      setError(errorMessage);
      return !errorMessage;
    },
    getValue: () => rangeValue,
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
        value={rangeValue}
        onChange={(evt) => handleChange(evt.target.value)}
        {...rest}
      />
      {error && <CFormFeedback invalid>{error}</CFormFeedback>}
    </div>
  );
});

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
    getValue: () => value,
  }));

  return (
    <CFormFloating className="mb-3">
      <CFormInput
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={(evt) => handleChange(evt.target.value)}
        invalid={!!error}
        {...rest}
      />
      <CFormLabel htmlFor={id}>{label}</CFormLabel>
      {error && <CFormFeedback invalid>{error}</CFormFeedback>}
    </CFormFloating>
  );
});

const CustomFormSwitch = forwardRef(({ label, id, defaultChecked, disabled, required = false, ...rest }, ref) => {
  const [error, setError] = useState('');
  const [checked, setChecked] = useState(defaultChecked);

  const validate = (checked) => {
    if (required && !checked) {
      return 'This field is required';
    }
    return '';
  };

  const handleChange = (checked) => {
    setChecked(checked);
    setError(validate(checked));
  };

  useImperativeHandle(ref, () => ({
    validate: () => {
      const errorMessage = validate(checked);
      setError(errorMessage);
      return !errorMessage;
    },
    getValue: () => checked,
  }));

  return (
    <div>
      <CFormSwitch
        label={label}
        id={id}
        checked={checked}
        disabled={disabled}
        onChange={(evt) => handleChange(evt.target.checked)}
        {...rest}
      />
      {error && <CFormFeedback invalid>{error}</CFormFeedback>}
    </div>
  );
});

const CustomFormTextarea = forwardRef(({ id, label, value = '', onChange, rows, required = false, minLength, maxLength, ...rest }, ref) => {
  const [error, setError] = useState('');
  const [textareaValue, setTextareaValue] = useState(value);

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
    setTextareaValue(value);
    onChange(value);
    setError(validate(value));
  };

  useImperativeHandle(ref, () => ({
    validate: () => {
      const errorMessage = validate(textareaValue);
      setError(errorMessage);
      return !errorMessage;
    },
    getValue: () => textareaValue,
  }));

  return (
    <div>
      <CFormLabel htmlFor={id}>
        {label}{required && ' *'}
      </CFormLabel>
      <CFormTextarea
        id={id}
        value={textareaValue}
        rows={rows}
        onChange={(evt) => handleChange(evt.target.value)}
        invalid={!!error}
        {...rest}
      />
      {error && <CFormFeedback invalid>{error}</CFormFeedback>}
    </div>
  );
});

const CustomButton = ({ label, onClick = () => {}, disabled = false, type = 'button', ...rest }) => {
  return (
    <CButton type={type} onClick={onClick} disabled={disabled} {...rest}>
      {label}
    </CButton>
  );
};

export {
  CustomCheckbox,
  CustomInput,
  CustomSelect,
  CustomRadio,
  CustomFormRange,
  CustomFormFloating,
  CustomFormSwitch,
  CustomFormTextarea,
  CustomButton,
};
