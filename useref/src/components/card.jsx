import React from 'react'

// const card = (props) => {
//   return (
//     <div>{props.name}</div>
//   )
// }
// or


//  const card = ({name}) => {
//       return (
//         <div>{name}</div>
//       )
//     }



 const card = (props) => {
      return (
        // <div>{props.children}</div>
<div>
<input type="text" onChange={(e)=>props.setName(e.target.value)} />



<p>Name state variable Card{ props.title}:{props.name}</p>
</div>      
      )
    }




export default card