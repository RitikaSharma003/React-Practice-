import React, { useEffect ,useState} from 'react'

function TimerComponents() {
    const[seconds,setSeconds]=useState(0);
    useEffect(()=>{
        

        
        const intervalid=setInterval(()=>{
            console.log("set interval executed");
setSeconds(prevSeconds=>prevSeconds+1);


        },1000);
return()=>{
    console.log("set interval stop")
clearInterval(intervalid);


}
    },[]);
    //it will render only on first render 

  return (
   
    <h1>Seconds:{seconds}</h1>
  )
}

export default TimerComponents