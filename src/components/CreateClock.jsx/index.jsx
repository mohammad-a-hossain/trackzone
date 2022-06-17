import React from 'react'

import useCreateClock from '../../Hoocks/useCreateClock'




      
    const ClockForm =(props)=>{


      const {createClock,handleChange,
        clockName,clockDate,clockCountry,clockData,
        clockEvent,clockEventTime} = useCreateClock({...props})



      

    return(
        <div style={{width:'22%',height:'auto',float:'left',padding:'10px'}}>

          <span>create your clock</span>
   
        <div style={{backgroundColor:'lightgray',padding:'10px'}}>
       
        <form
           onSubmit={createClock}>
           <input type='text'
            id='clockName'
             name='clockName'
             value={clockName}
             placeholder='clock name' 
             onChange={handleChange}
             /> <br/> 
            
            <input
             type='date'
             id='clockDate'
             name='clockDate'
             value={clockDate}
             onChange={handleChange}
             /> <br/>
        
            <select style={{padding:'10px'}}
             name='clockCountry'
             id='clockCountry'
             value={clockCountry}
             onChange={handleChange}
             >
            <option value="bangladesh">select country</option>
            <option value="india">india</option>
            <option value="america">america</option>
            <option value="london">london</option>
            </select> <br></br>
        
            <input type='text'
             name='clockEvent'
             id='clockEvent'
             value={clockEvent}
              placeholder='eventName'
              onChange={handleChange}
              />
            <span><input type='time'
             name='clockEventTime'
             id='clockEventTime'
             value={clockEventTime}
              placeholder='event time'
              onChange={handleChange}
              /></span>
            <br></br> <br></br>
            <button type='submit'>create clock</button>
            </form>
            </div>
        
           
           
            </div>
        )

}

export default ClockForm

 
  
 
