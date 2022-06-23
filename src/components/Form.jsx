import React from 'react'

const Form = ({ onSubmit, children, className }) => {
  return (
    <form className={`w-full flex flex-col justify-center items-center ${className}`} onSubmit={onSubmit}>
      {children}
    </form>
  )
}

export default Form

export const Input = ({ className, value, name, onChange }) => {
  return (
    <input type='text' className={` py-2 px-4 border border-gray-200 shadow-sm rounded-sm ${className}`}
      onChange={onChange} value={value} name={name} required />
  )
}