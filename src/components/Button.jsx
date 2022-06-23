import React from 'react'

const Button = ({onClick, children, className}) => {
  return (
   <button onClick={onClick} className={`w-max h-10 py-2 px-3 rounded-md border border-gray-200 shadow-md font-semibold hover:bg-sky-800 hover:text-white ${className}`}>{children}</button>
  )
}

export default Button