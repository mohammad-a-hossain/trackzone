import React from 'react'
import PropsTypes  from 'prop-types'


const Button = ({onClick}) => {
  return (
    <button onClick={onClick}  />
  )
}

Button.propTypes ={
  onclick:PropsTypes.func.isRequired
}
export default Button