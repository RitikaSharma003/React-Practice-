
import { render } from '@testing-library/react';
import './App.css';
import LoggerComponents from './components/LoggerComponents';
import { use, useEffect,useState } from 'react';
import TimerComponents from './components/TimerComponents';
import Datafetcher from './components/Datafetcher';
import ResizeComponent from './components/ResizeComponent';
import MultipleuseEffect from './components/MultipleuseEffect';




function App() {


  const [user,setUser]=useState({name:"Love"});
  // const[count,setCount]=useState(0);
  //  const [total,setTotal]=useState(1);

  // //that runs on every render 
  
  // useEffect(()=>{
  //   alert("I will run on each render");



  //  })
  
// that runs on  first render
//useEffect(()=>{

  //   alert(" i will run on only every render")
  // },[]);
  
  //  function handleClick(){
  //      setCount(count+1);
  
  //     }




//that runs on every render
// useEffect(()=>{

//   alert(" i will run on only every render")
// },[count]);



// multiple dependencies
// useEffect(()=>{
// alert("i will run every time when count/total is rendered ")
// },[count,total])




// let's add up a clean up function
// useEffect(()=>{
//   alert("count is updated ");
//   return ()=>{
// alert("count is unmounted from ui")
//   }
// },[count])



//  function handleClick(){
//        setCount(count+1);


//       }

      
//  function handleTotalClick(){
  
// setTotal(total+1);

//  }




  return (
    <>
      <LoggerComponents/>
<TimerComponents/>
<Datafetcher/>
<ResizeComponent/>
<MultipleuseEffect/>


 </>
  )
//     <>
//     <div>
//       <button onClick={handleClick}>Click me </button>
//       <br/>
//       Count is : {count}

// <br/>
//       <button onClick={handleTotalClick}>Click me </button>
//       <br/>
//       Total is:{total}
//     </div>
//     </>

  
}

export default App;
