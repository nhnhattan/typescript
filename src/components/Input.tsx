import React, { InputHTMLAttributes } from 'react'
type InputProps = {
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
const Input = (props: InputProps) => {
  return (
    <input type="text" onChange={props.handleChange} />
  )
}

export default Input
