import { useState,useEffect } from 'react'
import {  utcToZonedTime,format }from 'date-fns-tz'


        
               const today = new Date(); 
              const dateFormatted= format(today,"dd-MM-yy, h:mm:ss a")
 const useClock =()=>{



         const [startDay,setStartDay]= useState(dateFormatted)

       

        function getSpecificCountryTime(getCountry){//console.log(timeZone)
        const timeInBrisbane = utcToZonedTime(today, getCountry);
        const countryTime=format(timeInBrisbane, 'yyyy-MM-dd HH:mm:ss a')
        setStartDay(countryTime)
       }   
     
    /*    const today = new Date().toLocaleString("en-US",{
           timeZone:'Europe/london',timeStyle:'full',hourCycle:'h12'
        }) 
         
         console.log(today)
        */

     
         const handleUserTime=(e)=>{
              getSpecificCountryTime(e.target.value)
         }
   
         const countryObj =[
             {id:1, zone:'Asia/Dhaka',name:'Bangladesh'},
             {id:2, zone:'America/Adak',name:'America',},
             {id:3, zone:'Asia/Kolkata',name:'India'},
             {id:4, zone:'Europe/London',name:'London'},
           ] 
         
           return {
             startDay,
             handleUserTime,
             countryObj,
             getSpecificCountryTime
           }
              
 }

 export default useClock