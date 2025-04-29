import React, { useEffect,useState } from 'react'

function MultipleuseEffect() {

    const [count,setCount]=useState(0);
    const[seconds,setSeconds]=useState(0);
    useEffect(()=>{
        console.log("count changed",count);

    },[count]);


    useEffect(()=>{
        const intervalid=setInterval(()=>{
            console.log("setinterval started");
            setSeconds(prevSeconds=>prevSeconds+1);
        },1000)
        


    return ()=>clearInterval(intervalid);
},[]);
  return (
    <div>
      <br/>
        Count:{count}
        <button onClick={()=>setCount(count+1)}>Increment COunt</button>
    </div>
  )
}

export default MultipleuseEffect