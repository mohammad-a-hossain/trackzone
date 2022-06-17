import React from 'react'
import PropsTypes from 'prop-types'
const Option = ({value}) => {
  return (
    <option value={value}/>
  )
}
Option.propsTypes={
    value:PropsTypes.string.isRequired
}
export default Option