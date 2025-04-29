import { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import './App.css'
import { decrement,increment,incrementByAmount,reset } from './features/counter/counterSlice';
function App() {
const [amount,setAmount]=useState(0);

  const count=useSelector((state)=>
    state.counter.value

  );

  const dispatch=useDispatch();


 function handleIncrementClick(){
dispatch(increment());

 }
 function handleDecrementClick(){
dispatch(decrement());

 }
 function handleamountClick(){
  dispatch(incrementByAmount(amount));

 }
 function handlerreset(){
dispatch(reset());

 }
  return (
    <>
      <div className='container'>
        <button onClick={handleIncrementClick}> + </button>
     <p>Count:{count}</p>
     <button onClick={handlerreset}>Reset</button>
     <br />
     <br />


     <button onClick={handleDecrementClick}> - </button>
     
     
     <input type="text" value={amount} placeholder='Enter Amount' onChange={(e)=>setAmount(e.target.value)} />
     
     <button onClick={handleamountClick}> Increment amount </button>
     
      </div>
    </>
  )
}

export default App
