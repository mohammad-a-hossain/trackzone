import React from 'react'
import suhel from '../../photo/Image1.jpeg'
import useClock from './../../Hoocks/useClock';

import { useEffect } from 'react';

     

const UserForm = (props) => {
  const { startDay,handleUserTime,countryObj} = useClock({...props})


  return (
  
    <div style={{width:'100%',height:'20%',padding:'0px',background:"lightgray",display:'flex',justifyContent:'center',justifyItems:'center'}}>
  
    <form>
     <img src={suhel} alt="user" style={{height:'50px',width:'40px',borderRadius:'50px',backgroundColor:'red'}} />
        <span>user time:{startDay} </span> 
         <select onChange={handleUserTime}  id="getCountry" name="getCountry">
      
         {
           countryObj.map((item)=> {
            return <option key={item.id} value={item.zone}>{item.name}</option>
          }) 
          
         }
        
         </select>

    
      </form>

    </div>
  )
}

export default UserForm
