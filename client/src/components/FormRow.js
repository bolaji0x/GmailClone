import React from 'react'

const FormRow = ({ type, name, labelText, value, handleChange, min, max }) => {
  return (
    <div className='form-row'>
      <input
        type={type}
        value={value}
        name={name}
        min={min}
        max={max}
        onChange={handleChange}
        className='form-input'
      />
      <label htmlFor={name} className="form-label">{labelText || name}</label>
    </div>
  )
}

export default FormRow