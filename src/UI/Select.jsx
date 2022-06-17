import React from 'react'

const Select = ({name, id, value,onChange}) => {
   const style={padding:'10px'}

  return (
    <select
     style={style}
     name={name}
    id={id}
    value={clockCountry}
    onChange={handleChange}
    />
   
  )
}

export default Select