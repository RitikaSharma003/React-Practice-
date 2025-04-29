import React from 'react'
import { useNavigate } from 'react-router-dom'

function About() {
    const navigate=useNavigate();
    function handleClick(){
        navigate('/dashboard');

    }
  return (
    <>
      <div>About</div>
      <button onClick={handleClick}>Move to dashboard</button>
    </>
  
  )
}

export default About