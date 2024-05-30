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
    <div class="container">
    <div class="row">
    <div class="col-md-6  align-items-center">
    <div className='d-flex flex-column card m-0'>
       <h3 className='text-center m-2'>Demo Form</h3>
    <CForm noValidate validated={validated} onSubmit={handleSubmit} className='m-2'>
      <CustomInput 
        type="text"
        id="custom-text-input"
        label="Name"
        value={formData.textInput}
        onChange={(value) => handleChange('textInput', value)}
        placeholder="Enter Your Name"
        required
        feedbackInvalid="Please enter a valid text"
      />

      <CustomSelect className="mb-4"
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
        feedbackInvalid="Please select any one option"
      />

      <CustomFormRange className="pt-2 mb-4"
        id="custom-form-range"
        label="Range"
        min={0}
        max={10}
        value={formData.range}
        onChange={(value) => handleChange('range', value)}
        required
        feedbackInvalid="Please select a value between 0 and 10"
      />

      <CustomFormFloating className="pt-2 mb-4"
        id="custom-form-floating"
        type="email"
        label="Email address"
        value={formData.floating}
        onChange={(value) => handleChange('floating', value)}
        placeholder="Enter You Email"
        required
        feedbackInvalid="Please enter a valid email"
      />

      <CustomFormTextarea className="pt-2 mb-4"
        id="custom-form-textarea"
        label="Textarea"
        value={formData.textarea}
        onChange={(value) => handleChange('textarea', value)}
        rows={3}
        required
        feedbackInvalid="Please enter some text"
      />

      <CustomCheckbox className="pt-2 mb-4"
        id="custom-checkbox"
        label="agree all conditions"
        checked={formData.checkbox}
        onChange={(value) => handleChange('checkbox', value)}
        required
        feedbackInvalid="You must agree before submitting"
      />
    <div className='text-wrap'>
       <CustomButton className="w-100" type="submit" color="primary" label="Submit form" />
    </div>
    </CForm>
    </div>
    </div>
    </div>
    </div>
  );
};

export default FormExample;
