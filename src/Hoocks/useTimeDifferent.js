const useTimeDifferent =()=>{


   /*  const d =new Date()
    log('now'+d)
    const  utc_offset = d.getTimezoneOffset()
    d.setMinutes(d.getMinutes() + utc_offset)
    console.log('UTC' + d)
    const dhaka_offset = +6
    d.setMinutes(d.getMinutes()+ dhaka_offset)
    console.log('dhaka'+ d)
 */
    // another way

   /*  dateOne = new Date()
    dateTwo = new Date()
    const time = Math.abs(dateTwo - dateOne)
    const day = Math.ceil(time/(1000*60*60*24))

 */

    // another way
  /*  const getLocalTime=  function(){
      const date=  new Date().toLocaleString('en-us',{
            timeZone:'Asia/Kolkata',timeStyle:'medium',hourCycle:'h24'
        })
        return date
    }
    getLocalTime()
    setInterval(getLocalTime,1000)
 */


// another way
    // const today = new Date().toLocaleString("en-US",{
    //     timeZone:'Asia/Kolkata',timeStyle:'full',hourCycle:'h24'
    //   })
     
    // console.log(today)




    

       // <option value='{"foo":"bar","one":"two"}'>Option two</option>
        /*   function getSpecificCountryTime(TimeZone,offset){
            let b= new Date()
            let utc= b.getTime()+(b.getTimezoneOffset()*60000)
            let nd =new Date(utc+(3600000*offset))
          
            setStartDay(city,nd.toLocaleString())
              
          } */

      //  console.log(getSpecificCountryTime('argentina','-3'))
        // console.log(getSpecificCountryTime('afganistan','+4'))
        // console.log(getSpecificCountryTime('india','+5.30'))
        // console.log(getSpecificCountryTime('America/Detroit','-5.30'))
}


export default useTimeDifferent