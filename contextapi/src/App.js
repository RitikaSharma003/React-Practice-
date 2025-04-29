import React from 'react'
// { createContext,useState,useEffect } from 'react';
import './App.css';
//import ChildA from './Components/ChildA';
import Home from './Components/Home'
import Dashboard from './Components/Dashboard';
import About from './Components/About';
import {createBrowserRouter,RouterProvider} from"react-router-dom";
import Navbar from './Components/Navbar';
import ParamComp from './Components/ParamComp';
import Courses from './Components/Courses';
import Mocktests from './Components/Mocktests';
//const ThemeContext=createContext();
import Reports from './Components/Reports';

const router=createBrowserRouter(
  [{
    path:"/",
    element:(<div>
      <Navbar/>
      <Home/>

    </div>),
  },
  {
    path:"/about",
    element:
    (<div>
      <Navbar/>
     
      <About/>
    </div>),
  },
  {
    path:"/dashboard",
    element:
   ( <div>
      <Navbar/>
   
      <Dashboard/>
      
    </div>),
    children:
    [
      {path:'courses',
        element:<Courses/>
      },
      {
        path:'mock-tests',
        elements:<Mocktests/>
      },
      {
        path:'reports',
        elements:<Reports/>
      }
    ]
  }
  ,{
    path:"/student/:id",
element:( <div>
  <Navbar/>

  <ParamComp/>
  
</div>),
  }

]
)

//create Context
// const UserContext=createContext();
//step1-//create context api

//step-2 wrap all the child inside the provider 
 //step3-pass value
function App() {
// const [user,setUser]=useState({name:"Love"})
 //const [theme,setTheme]=useState("light");


return (
    <>
    {/* <UserContext.Provider value={user}>
    <ChildA/>

    </UserContext.Provider> */}

{/* top most parent for usecontext */}
{/* 
<ThemeContext.Provider value={{theme,setTheme}}>
<div id="Container" style={{backgroundColor:theme==='light'?"beige":"black"}}> <ChildA/></div>
 
</ThemeContext.Provider> */}

<div>
<RouterProvider router={router}/>
</div>




    </>
    
  );
}

export default App;
// export {UserContext};
//export {ThemeContext};
