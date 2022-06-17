import React from 'react'
import { useState } from 'react'

const useCardData =()=>{
    const [getState, setGetState] =useState([])
     
    const getDataForClock=(clockData)=>{console.log(clockData)
     setGetState([].concat(getState,clockData))
    // setGetState([...clockData])
  }  
  console.log(getState)

   const handleEdit=(e)=>{
     alert('edot')
   }
    const handleDelete=(e)=>{
     alert('delete')
    }

    return{
        getState,
        getDataForClock,
        handleDelete,
        handleEdit
    }
}
export default useCardData