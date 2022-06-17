
 import { useState } from 'react'
import './App.css'
import suhel from './photo/Image1.jpeg'
//import {format} from 'date-fns'
import { zonedTimeToUtc, utcToZonedTime, format }from 'date-fns-tz'

      
 // creaeing clock form
 const initialData= {
  clockName:' ',
  clockDate:' ',
  clockCountry:' ',
  clockEvent:' ',
  clockEventTime:' '
}


const CreateClockForm =({getDataForClock})=>{
const [clockData,setClockData] = useState({...initialData})
const {clockName,clockDate,clockCountry,clockEvent,clockEventTime}= clockData



const handleChange=(e)=>{
 setClockData({
   ...clockData,
   [e.target.name]:e.target.value
 })
// console.log(clockData)
}


const createClock=(e)=>{
// console.log(alert('ik'))

e.preventDefault()
getDataForClock(clockData)


}
const countryObj =[
  {id:1, cName:'Asia/Dhaka',country:'Bangladesh'},
  {id:2, cName:'America/Adak',country:'America'},
  {id:3, cName:'Asia/Kolkata',country:'India'},
  {id:4, cName:'Europe/London',country:'London'},
] 

   
function getSpecificCountryTime(getCountry){//console.log(timeZone)
  const timeInBrisbane = utcToZonedTime(today, getCountry);
  const countryTime=format(timeInBrisbane, 'yyyy-MM-dd HH:mm:ss a')
 setStartDay(countryTime)
  
}  

  // console.log(e.target.value) 
      


    
return(
  <div style={{width:'22%',height:'auto',float:'left',padding:'10px',backgroundColor:'lightblue'}}>
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
     {
      countryObj.map((item)=> {
       return <option key={item.id} value={item.cName}>{item.country}</option>
     }) 
    }
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
)
}

const Card =({getState})=>{ 

  const handleEdit=(e)=>{
    alert('edot')
  }
   const handleDelete=(e)=>{
    alert('delete')
   }
  return(
    <div style={{ width:'100%',height:'100%',display:'flex',flexWrap:'wrap', justifContent: 'spaceAround',gap:'10px',alignItems:'center',}}>
     
  {getState.map((item,index)=>(
     <div key={index}
      style={{listStyleType:'none',padding:'10px', height:'150px',width:'150px',backgroundColor:'lightblue',textAlign:'start'}}> 
      <li>Clock:{item.clockName}</li>
      <li>from: {item.clockCountry} </li>
    
      <li>differ:item.clo</li>
      <li>Events:{item.clockEvent}</li>
      <li>date:{item.clockDate}</li>
      <li>events-time:{item.clockEventTime}</li>
      <button onClick={handleEdit}>edit</button>
      <button onClick={handleDelete}>delete</button>
      </div> 
  ))}
     
    </div>
  )
  
}
     
function App1(){
  const today = new Date(); 
 const dateFormatted= format(today,"dd-MM-yy, h:mm:ss a")
    const [startDay,setStartDay]= useState(dateFormatted) 

   function getSpecificCountryTime(getCountry){//console.log(timeZone)
    const timeInBrisbane = utcToZonedTime(today, getCountry);
    const countryTime=format(timeInBrisbane, 'yyyy-MM-dd HH:mm:ss a')
    setInterval(setStartDay(countryTime), 1000);
    
  }   
        const handleUserTime=(e)=>{
         // console.log(e.target.value) 
             getSpecificCountryTime(e.target.value)
        }

       const countryObj =[
        {id:1, cName:'Asia/Dhaka',country:'Bangladesh'},
        {id:2, cName:'America/Adak',country:'America'},
        {id:3, cName:'Asia/Kolkata',country:'India'},
        {id:4, cName:'Europe/London',country:'London'},
      ] 
   
   const [getState, setGetState] =useState([])
  
       const getDataForClock=(clockData)=>{
          setGetState([].concat(getState,clockData))
       }
    
  return (
    <div className="App">
    <h1> Track Zone</h1>

    <div style={{width:'100%',height:'20%',padding:'0px',background:"lightgray",display:'flex',justifyContent:'center',justifyItems:'center'}}>
     

    <form>
     <img src={suhel} alt="user" style={{height:'50px',width:'40px',borderRadius:'50px',backgroundColor:'red'}} />
        <span>user time:-{startDay} </span> 
         <select onChange={handleUserTime} name="getCountry">
       
        
         {
           countryObj.map((item)=> {
            return <option key={item.id} value={item.cName}>{item.country}</option>
          }) 
         }
        
        
         </select>
     
     
      </form>

    </div>
          
    
 
    <div style={{width:'100%',height:'auto',boxSizing:'border-box'}}>

      <CreateClockForm getDataForClock={getDataForClock}/>
 


    <div style={{width:'74%',height:'auto',float:'right',padding:'10px',backgroundColor:'lightcoral'}}>
    <h1>list of clients</h1>
    
   <Card getState={getState}/>
   

   { /* <div style={{ width:'100%',height:'100%',display:'flex',flexWrap:'wrap', justifContent: 'spaceAround',gap:'10px',alignItems:'center',}}>
    
  
      <div 
      style={{listStyleType:'none',padding:'10px', height:'150px',width:'150px',backgroundColor:'lightblue',textAlign:'start'}}> 
      name:item.clockName 
      from: aus time: 5.36pm 
      differ: 6hr-30mn
      Events:
      events name time:666.555 <br></br>
      <button>edit</button>
      <button>delete</button>
      </div> 
     
     
    
    </div> */ }
  </div>
    </div>
    
     
    </div>
  )
}

export default App1
