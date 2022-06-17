import React from 'react'
import PropsTypes from 'prop-types'

const Input = ({value, name, id, onChange}) => {
  return (
    <input type='text'
     id={id}
     name={name}
     value={value}
     onChange={onChange}
     />
  )
 
}
 Input.propTypes={
    value:PropsTypes.string.isRequired,
    onChange:PropsTypes.func.isRequired,
    id:PropsTypes.string.isRequired,
    name:PropsTypes.string.isRequired
  }
export default Input