
import useCardData from './../../Hoocks/useCardData';


const Card =({props})=>{ 

  const {  getState, handleDelete,handleEdit}= useCardData({...props})
  console.log(getState)
       //console.log(getState,handleDelete,handleEdit)
    return(
      <div style={{width:'70%',height:'auto',float:'right',padding:'10px'}}>
      <div style={{ width:'100%',height:'100%',display:'flex',flexWrap:'wrap', justifContent: 'spaceAround',gap:'10px',alignItems:'center',}}>
      
    {getState.map((item,index)=>(
       <div key={index}
        style={{listStyleType:'none',padding:'10px', height:'150px',width:'150px',backgroundColor:'lightblue',textAlign:'start'}}> 
        <li>Clock:{item.clockName}</li>
        <li>from: {item.clockCountry} </li>
        <li>differ:item.clo</li>
        <li>Events:{item.clockEvent}</li>
        <li>events-time:{item.clockEventTime}</li>
        <h3>hello card</h3>
        <button onClick={handleEdit}>edit</button>
        <button onClick={handleDelete}>delete</button>
        </div> 
    ))}
       
      </div>
      </div>
    )
    
  }
       
  export default Card


