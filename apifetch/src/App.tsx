import React ,{useEffect,useState} from "react";
import './App.css';

import axios from "axios"
import Getaxios from "./Getaxios";

interface TodoItem{
  completed:boolean ;
  id:number ;
  title:string ;
  userId:number ;

}
function App() {
  const[todos,setTodos]=useState<TodoItem[]>([]);

useEffect(()=>{
  axios.get<TodoItem[]>('https://jsonplaceholder.typicode.com/todos').then((response)=>setTodos(response.data));


},[]);



  return (
    <>
      <Getaxios/>
{


    todos.map((todo)=>
   ( <li key={todo.id}>{todo.title}</li>))}
    </>
  );
}

export default App;
