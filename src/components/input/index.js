import React from 'react';
import { CFormCheck, CFormInput, CFormLabel, CFormSelect, CButton, CFormRange ,CFormFloating, CFormTextarea, CFormSwitch } from '@coreui/react';

const CustomCheckbox = ({ id, label, checked = false, onChange = () => {}, disabled = false, required = false, ...rest }) => {
  return (
    <div>
      <CFormCheck 
        id={id} 
        label={required ? `${label} ` : label}
        checked={checked} 
        onChange={onChange} 
        disabled={disabled}
        {...rest}
      />
    </div>
  );
};

const CustomInput = ({ id, label, value = '',onChange, disabled = false, required = false, type = 'text', ...rest }) => {
  return (
    <div>
      <CFormLabel htmlFor={id}>
        {label}{required}
      </CFormLabel>
     
      <CFormInput 
        id={id}
        type={type}
        value={value}
        disabled={disabled}
        onChange={(evt)=>{
            onChange(evt.target.value)
        }}
        required={required}
        {...rest}
      />
    </div>
  );
};

const CustomSelect = ({ id, label, options = [],onChange, value = '', disabled = false, required = false, ...rest }) => {
  return (
    <div>
      <CFormLabel htmlFor={id}>
        {label}{required}
      </CFormLabel>
      <CFormSelect 
        id={id}
        value={value}
        disabled={disabled}
        required={required}
        onChange={(evt)=>{
            onChange(evt.target.value)
        }}
        {...rest}
      >
        <option value="">Select an option</option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </CFormSelect>
    </div>
  );
};

const CustomRadio = ({ name, options = [], value = '', onChange, disabled = false, required = false, ...rest }) => {
  return (
    <div className=''>
      {options.map((option, index) => (
        <CFormCheck 
          key={index}
          type="radio"
          name={name}
          id={option.value}
          label={required ? `${option.label} *` : option.label}
          value={option.value}
          checked={value === option.value}
          onChange={(evt)=>{
            onChange(evt.target.value)
        }}
          disabled={disabled}
          {...rest}
        />
      ))}
    </div>
  );
};

const CustomButton = ({ label, onClick = () => {}, disabled = false, type = 'button', ...rest }) => {
  return (
    <CButton type={type} onClick={onClick} disabled={disabled} {...rest}>
      {label}
    </CButton>
  );
};

const CustomFormFloating = ({ id,type, onChange, placeholder, label,required,...rest }) => {
  return (
    <div>
    <CFormLabel htmlFor={id}>{label}{required}</CFormLabel>
    <CFormInput type={type} id={id} placeholder={placeholder} onChange={(evt)=>{onChange(evt.target.value) }} {...rest} />
    </div>
  );
};

const CustomFormRange = ({ min, max, label,onChange, defaultValue, id, ...rest }) => {
  return (
    <CFormRange min={min} max={max} label={label} defaultValue={defaultValue} onChange={(evt)=>{onChange(evt.target.value)
    }} id={id} {...rest} />
  );
};
  
const CustomFormSwitch = ({ label, id, defaultChecked, disabled, ...rest }) => {
  return (
    <CFormSwitch
      label={label}
      id={id}
      defaultChecked={defaultChecked}
      disabled={disabled}

      {...rest}
    />
  );
};

const CustomFormTextarea = ({ id, label, onChange ,rows, text, ...rest }) => {
  return (
    <CFormTextarea
      id={id}
      label={label}
      rows={rows}
      text={text}
      onChange={(evt)=>{
        onChange(evt.target.value)
      }}
      {...rest}
    />
  );
};

export { CustomCheckbox, CustomInput, CustomSelect, CustomRadio, CustomButton ,CustomFormRange,CustomFormFloating,CustomFormSwitch,CustomFormTextarea};
