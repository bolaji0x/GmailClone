import React from 'react'

const FormRowSelect = ({ labelText, name, value, handleChange, list }) => {
  return (
    <div className='select-row'>
      <select
        name={name}
        value={value}
        onChange={handleChange}
        className='select-input'
      >
        {list.map((itemValue, index) => {
          return (
            <option key={index} value={itemValue}>
              {itemValue}
            </option>
          )
        })}
      </select>
      <label className='select-label' htmlFor={name}>
        {labelText || name}
      </label>
    </div>
  )
}

export default FormRowSelect