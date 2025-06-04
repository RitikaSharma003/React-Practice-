import React ,{useState,useEffect} from 'react'

import  Axios  from 'axios';

const baseURL="https://jsonplaceholder.typicode.com/posts";

function Getaxios() {
    // jo bhi response aata hai vo ham apne useState ka andar save krte hai 
  const[mydata,setData] = useState([]);
useEffect(()=>{
Axios.get(baseURL).then((response)=>{
setData(response.data);
//returns the data in json format
},[]);

})

  return (
    <>
    {
        mydata.map((item)=>{
            const{id,title,body}=item;
            return (
                <div className="data">
   <h1>{id}</h1>
                <h2>{title} </h2>
                    <h3>{body}</h3>
                </div>
             
            )

        })
    }
   
   
    </>
  
  )
}

export default Getaxios