import React, { useState } from 'react';
import {
  CustomCheckbox,
  CustomInput,
  CustomSelect,
  CustomButton,
  CustomFormRange,
  CustomFormFloating,
  CustomFormTextarea
} from '../../../components/input'; // Import your custom components here
import { CForm } from '@coreui/react';

const FormExample = () => {
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    checkbox: false,
    textInput: '',
    select: '',
    range: 5,
    floating: '',
    textarea: ''
  });

  const handleChange = (name, value) => {
    console.log(value)
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <CForm noValidate validated={validated} onSubmit={handleSubmit}>
      <CustomCheckbox
        id="custom-checkbox"
        label="Check me out"
        checked={formData.checkbox}
        onChange={(value) => handleChange('checkbox', value)}
        required
        feedbackInvalid="You must agree before submitting"
      />

      <CustomInput
        type="text"
        id="custom-text-input"
        label="Text input"
        value={formData.textInput}
        onChange={(value) => handleChange('textInput', value)}
        placeholder="Enter text"
        required
        feedbackInvalid="Please enter a valid text"
      />

      <CustomSelect
        id="custom-select"
        label="Select"
        value={formData.select}
        onChange={(value) => handleChange('select', value)}
        options={[
          { value: '1', label: 'Option 1' },
          { value: '2', label: 'Option 2' },
          { value: '3', label: 'Option 3' }
        ]}
        required
        feedbackInvalid="Please select an option"
      />

      <CustomFormRange
        id="custom-form-range"
        label="Range"
        min={0}
        max={10}
        value={formData.range}
        onChange={(value) => handleChange('range', value)}
        required
        feedbackInvalid="Please select a value between 0 and 10"
      />

      <CustomFormFloating
        id="custom-form-floating"
        type="email"
        label="Email address"
        value={formData.floating}
        onChange={(value) => handleChange('floating', value)}
        placeholder="name@example.com"
        required
        feedbackInvalid="Please enter a valid email"
      />

      <CustomFormTextarea
        id="custom-form-textarea"
        label="Textarea"
        value={formData.textarea}
        onChange={(value) => handleChange('textarea', value)}
        rows={3}
        required
        feedbackInvalid="Please enter some text"
      />

    <CustomButton type="submit" color="primary" label="Submit form" />

    </CForm>
  );
};

export default FormExample;
