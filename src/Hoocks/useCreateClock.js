
import { useState } from 'react'
import useCardData from './useCardData';


const initialData= {
    clockName:' ',
    clockDate:' ',
    clockCountry:' ',
    clockEvent:' ',
    clockEventTime:' '
  }
  
const useCreateClock =()=>{
    const {getDataForClock} = useCardData()
    const [clockData,setClockData] = useState({...initialData})
    const {clockName,clockDate,clockCountry,clockEvent,clockEventTime}= clockData
    
    const handleChange=(e)=>{
     setClockData({
       ...clockData,
       [e.target.name]:e.target.value
     })
    // console.log(clockData)
    }
    
    
    const createClock=(e)=>{console.log(clockData)
    e.preventDefault()
    getDataForClock(clockData)
     
    }
    
    return{clockName,clockDate,clockCountry,clockEvent,clockEventTime,
       clockData,
       createClock,
       handleChange,
      
    }
}
export default useCreateClock 