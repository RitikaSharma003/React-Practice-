import React ,{useEffect,useRef, useState} from 'react';
import './App.css';
import Button from './components/Button';
import Card from './components/card';
import Logout from './components/Logout';
import Login from './components/Login';
function App() {
  const[count,setCount]=useState(0);
  const [name,setName]=useState('');
  


  const [isloggedin ,setLoggedin]=useState(true);
//   let value=useRef(0);
//   let btnRef=useRef();
// const[time,setTime]=useState(0);
// let timeRef=useRef(null);

//   function handleIncrement(){
//     setCount(count+1);
  
// value.current=value.current+1;
// console.log("value:",value.current);

//   }
//   function changeColor(){
// btnRef.current.style.backgroundColor="red";

//   }


//   function startTimer(){
// timeRef.current=setInterval(()=>{
//   // timREf useREf hook is used here its value will persist at every render
// setTime(time=>time+1);
// //every settime there will be re-render
// },1000);
//   }

//   function stopTimer(){
// clearInterval(timeRef.current);
// timeRef.current=null;

//   }

//   function resetTimer(){
// stopTimer();
// setTime(0);
//   }
//   useEffect(()=>{
// console.log("main ferse render hogayahu ")
//   })

function handleClick(){
  setCount(count+1);

}

  // return (
    // <>
{/* <button  ref={btnRef}onClick={handleIncrement}>
  Increment
</button>
<br />
<br />
<button onClick={changeColor}>Change color </button>
<br />
<div>
  Count:{count};

</div>

<div>
  <h1>Stopwatch:{time} seconds</h1>
  <button onClick={startTimer}>Start</button>
  <br />
  <br />
<button onClick={stopTimer}>Stop</button>
<br />
<br />
<button onClick={resetTimer}>Reset</button>
<br />
<br />
</div>


<div> */}

  {/* <Card name="ritika sharma">
<h1>Best Web Dev Course</h1>
<p>njkdanjknkdnkfdff</p>
<p>dnnnnfnr</p>
  </Card>
  <Card children="main hu ek children">
    Lorem ipsum dolor sit amet.
    </Card>
</div>

<div>
  <Button incrementCount={handleClick}/> */}



{/* <Card title="card1"name={name} setName={setName}/>
<p>I am inside parent cpmponent and value of a a name is {name}</p>


<Card title="card2" name={name} setName={setName}/>
<p>I am inside parent cpmponent and value of a a name is {name}</p> */}

// {isloggedin?<Logout/>:<Login/>}
// if(isloggedin)
// {
// return(
//   <Logout/>

// )

// }
// else{
//   return (
//     <Login/>

//   )
// }
<div>
  <h1>Welcome everyone to codehelp web dev course . </h1>

<div>
  {isloggedin && <Logout/>}
</div>

</div>

 }
{/* </div> */}
    // </>
  // );
// }

export default App;
