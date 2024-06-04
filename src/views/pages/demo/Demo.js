import React, { useRef, useState } from 'react';
import { CForm, CButton } from '@coreui/react';
import {
  CustomCheckbox,
  CustomInput,
  CustomSelect,
  CustomRadio,
  CustomFormRange,
  CustomFormFloating,
  CustomFormSwitch,
  CustomFormTextarea,
} from '../../../components/custom/custom';
import { Link } from 'react-router-dom';

const MyForm = () => {
  const [formData, setFormData] = useState({
    input: '',
    select: '',
    // radio: '',
    // checkbox: false,
    // range: 50,
    // floating: '',
    // switch: false,
    // textarea: '',
  });

  const refs = {
    input: useRef(),
    select: useRef(),
    // radio: useRef(),
    // checkbox: useRef(),
    // range: useRef(),
    // floating: useRef(),
    // switch: useRef(),
    // textarea: useRef(),
  };

  const handleSubmit = (evt) => {
    evt.preventDefault()
    const validationStatuses = Object.values(refs).map((ref) => {
      try {
        return ref.current.validate()
      } catch (error) {
        // console.error(`Error validating ${ref.current.id}:`, error)
        return false
      }
    })

    console.log(validationStatuses)

    const isFormValid = validationStatuses.every((isValid) => isValid)

    if (isFormValid) {
      console.log('Form is valid. Submitting data...')
      const formData = {
        input: refs.input.current.getValue(),
        select:refs.select.current.getValue(),
      }
      console.log('Form Data:', formData)
      setFormData(formData)
    } else {
      console.log('Form is invalid. Please correct the errors.')
    }
  }

  return (
    <div className='container '>
    <div className='row'>
    <div className='col-6 '>
    <CForm onSubmit={handleSubmit}>
      <CustomInput  
      className="mb-4"
        id="custom-input"
        ref={refs.input}
        label="Custom Input"
        value={formData.input}
        onChange={(value) => setFormData({ ...formData, input: value })}
        required
        pattern="^[A-Za-z]+$"
        minLength={3}
        maxLength={20}
      />
      <CustomSelect
        className="mb-4"
        id="custom-select"
        ref={refs.select}
        label="Custom Select"
        options={[
          { value: '1', label: 'Option 1' },
          { value: '2', label: 'Option 2' },
        ]}
        value={formData.select}
        onChange={(value) => setFormData({ ...formData, select: value })}
        required
      />
      <CButton type="submit" color='primary' className='w-100' onClick={handleSubmit}><Link to={"/demo1"} className='link-light'>Submit</Link></CButton>
    </CForm>
    </div>
    </div>
    </div>
  );
};

export default MyForm;
