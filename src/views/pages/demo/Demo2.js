import React, { useRef, useState } from 'react'
import { CForm, CButton, CFormLabel } from '@coreui/react'
import { CustomInput,CustomSelect,CustomFormTextarea } from '../../../components/custom/custom'

const MyForm = () => {
  const [formData, setFormData] = useState({
    input: '',
    select:'',
    textarea:'',
  })

  const refs = {
    firstname: useRef(),
    lastname: useRef(),
    nickname: useRef(),
    email: useRef(),
    street: useRef(),
    city: useRef(),
    state: useRef(),
    country: useRef(),
    pincode: useRef(),
    street1: useRef(),
    city1: useRef(),
    state1: useRef(),
    country1: useRef(),
    pincode1: useRef(),
    select:useRef(),
    select1:useRef(),
  }

  const nonValidaterefs={
    textarea:useRef(),
    textarea1:useRef()
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    const validationStatuses = Object.values(refs,nonValidaterefs).map((ref) => {
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
        firstname: refs.firstname.current.getValue(),
        lastname: refs.lastname.current.getValue(),
        nickname: refs.nickname.current.getValue(),
        email: refs.email.current.getValue(),
        street: refs.street.current.getValue(),
        city: refs.city.current.getValue(),
        state: refs.state.current.getValue(),
        country: refs.country.current.getValue(),
        pincode: refs.pincode.current.getValue(),
        street1: refs.street1.current.getValue(),
        city1: refs.city1.current.getValue(),
        state1: refs.state1.current.getValue(),
        country1: refs.country1.current.getValue(),
        pincode1: refs.pincode1.current.getValue(),
        select:refs.select.current.getValue(),
        select1:refs.select1.current.getValue(),
        textarea:nonValidaterefs.textarea.current.getValue(),
        textarea1:nonValidaterefs.textarea1.current.getValue()
      }
      console.log(nonValidaterefs.textarea.current.getValue())
      console.log('Form Data:', formData)
      setFormData(formData)
    } else {
      console.log('Form is invalid. Please correct the errors.')
    }
  }

  return (
    <CForm onSubmit={handleSubmit}>
      <div className='text-center'>
        <h3 className=''>Address Form</h3>
      </div>
      <div className="d-md-flex d-lg-flex d-sm-flex flex-sm-column flex-md-row flex-lg-row">
        <div className="w-100 m-2">
          <CustomInput
            id="custom-input"
            ref={refs.firstname}
            label="FirstName"
            value={formData.input}
            onChange={(value) => setFormData({ ...formData, input: value })}
            required
            pattern="^[A-Za-z]+$"
            minLength={3}
            maxLength={20}
          />
          <CustomInput
            id="custom-input"
            ref={refs.lastname}
            label="LastName"
            value={formData.input}
            onChange={(value) => setFormData({ ...formData, input: value })}
            required
            pattern="^[A-Za-z]+$"
            minLength={3}
            maxLength={20}
          />
        </div>
        <div className="w-100 m-2">
          <CustomInput
            id="custom-input"
            ref={refs.nickname}
            label="NickName"
            value={formData.input}
            onChange={(value) => setFormData({ ...formData, input: value })}
            required
            pattern="^[A-Za-z]+$"
            minLength={3}
            maxLength={20}
          />
          <CustomInput
            id="custom-input"
            ref={refs.email}
            label="Email"
            value={formData.input}
            onChange={(value) => setFormData({ ...formData, input: value })}
            required
            pattern="^[A-Za-z]+$"
            minLength={3}
            maxLength={20}
          />
        </div>
      </div>

      <div className="d-md-flex d-lg-flex d-sm-flex flex-sm-column flex-md-row flex-lg-row">
        <div className="w-100 card  m-2">
          <CFormLabel className='text-center'>Resedential Address</CFormLabel>
          <div className='m-2'>
          <CustomInput
            id="custom-input"
            ref={refs.street}
            label="Street Name"
            value={formData.input}
            onChange={(value) => setFormData({ ...formData, input: value })}
            required
            pattern="^[A-Za-z]+$"
            minLength={3}
            maxLength={20}
          />
          <CustomInput
            id="custom-input"
            ref={refs.city}
            label="City"
            value={formData.input}
            onChange={(value) => setFormData({ ...formData, input: value })}
            required
            pattern="^[A-Za-z]+$"
            minLength={3}
            maxLength={20}
          />
          <CustomInput
            id="custom-input"
            ref={refs.state}
            label="State"
            value={formData.input}
            onChange={(value) => setFormData({ ...formData, input: value })}
            required
            pattern="^[A-Za-z]+$"
            minLength={3}
            maxLength={20}
          />
          <CustomInput
            id="custom-input"
            ref={refs.country}
            label="Country"
            value={formData.input}
            onChange={(value) => setFormData({ ...formData, input: value })}
            required
            pattern="^[A-Za-z]+$"
            minLength={3}
            maxLength={20}
          />
          <CustomInput
            id="custom-input"
            ref={refs.pincode}
            label="PinCode"
            value={formData.input}
            onChange={(value) => setFormData({ ...formData, input: value })}
            required
            pattern="^[A-Za-z]+$"
            minLength={3}
            maxLength={20}
          />
          </div>
        </div>
        <div className="w-100  card m-2">
          <CFormLabel className='text-center'>Company Address</CFormLabel>
          <div className='m-2'>
          <CustomInput
            id="custom-input"
            ref={refs.street1}
            label="Street Name"
            value={formData.input}
            onChange={(value) => setFormData({ ...formData, input: value })}
            required
            pattern="^[A-Za-z]+$"
            minLength={3}
            maxLength={20}
          />
          <CustomInput
            id="custom-input"
            ref={refs.city1}
            label="City"
            value={formData.input}
            onChange={(value) => setFormData({ ...formData, input: value })}
            required
            pattern="^[A-Za-z]+$"
            minLength={3}
            maxLength={20}
          />
          <CustomInput
            id="custom-input"
            ref={refs.state1}
            label="State"
            value={formData.input}
            onChange={(value) => setFormData({ ...formData, input: value })}
            required
            pattern="^[A-Za-z]+$"
            minLength={3}
            maxLength={20}
          />
          <CustomInput
            id="custom-input"
            ref={refs.country1}
            label="Country"
            value={formData.input}
            onChange={(value) => setFormData({ ...formData, input: value })}
            required
            pattern="^[A-Za-z]+$"
            minLength={3}
            maxLength={20}
          />
          <CustomInput
            id="custom-input"
            ref={refs.pincode1}
            label="PinCode"
            value={formData.input}
            onChange={(value) => setFormData({ ...formData, input: value })}
            required
            pattern="^[A-Za-z]+$"
            minLength={3}
            maxLength={20}
          />
        </div>
        </div>
      </div> 
      <div className='d-md-flex d-lg-flex d-sm-flex flex-sm-column flex-md-row flex-lg-row'>
        <div className='w-100 m-2'>
        <CustomSelect 
        id="custom-select"
        ref={refs.select}
        label="Select Your Interest"
        options={[
          { value: '1', label: 'Playing ' },
          { value: '2', label: 'Reading' },
          { value: '3', label: 'Dancing' },
          { value: '4', label: 'Singing' },
        ]}
        value={formData.select}
        onChange={(value) => setFormData({ ...formData, select: value })}
        required
        />
        </div>
        <div className='w-100 m-2'>
         <CustomSelect 
        id="custom-select"
        ref={refs.select1}
        label="Select Your Religion"
        options={[
          { value: '1', label: 'Hindu ' },
          { value: '2', label: 'Muslim' },
          { value: '3', label: 'Cristian' },
          { value: '4', label: 'Jain' },
        ]}
        value={formData.select}
        onChange={(value) => setFormData({ ...formData, select: value })}
        required
        />
        </div>
      </div> 
      <div className='d-md-flex d-lg-flex d-sm-flex flex-sm-column flex-md-row flex-lg-row m-2'>
        <div className='w-100 m-2'>
        <CFormLabel>AnySuggestions</CFormLabel>
       <CustomFormTextarea
        id="custom-textarea"
        ref={nonValidaterefs.textarea}
        value={formData.textarea}
        rows={3}
        onChange={(value) => setFormData({ ...formData, textarea: value })}
      />
        </div>
        <div className='w-100 m-2'>
        <CFormLabel>Any Ideas</CFormLabel>
        <CustomFormTextarea
        id="custom-textarea"
        ref={nonValidaterefs.textarea1}
        value={formData.textarea}
        rows={3}
        onChange={(value) => setFormData({ ...formData, textarea: value })}
      />
        </div>
      </div>
      <div className="m-2">
        <CButton type="submit" onClick={handleSubmit} color="primary" className="w-100">
          Submit
        </CButton>
      </div>
    </CForm>
  )
}

export default MyForm
