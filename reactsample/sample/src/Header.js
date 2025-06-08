import React, { useState } from 'react'
 function h1element(){
    return{
        backgroundColor : 'blue'
    }
 }
const Header = () => {
  
  let [username,setUsername]=useState("");
  let [count,setcount] = useState(1);
  let addUsername=(value)=>{
      setUsername(value);
  }
  let  countsno=()=>{
    setcount ( count+1);
   }
  return (
    <div>
        <h1 style={h1element()}>Table </h1>
        <input type="text" name="text" id="text"onChange={(e)=>{addUsername(e.target.value)}}/>
        <button onClick={() => username} >Click</button>
        <table className="table table-striped-columns">
        <thead>
         <tr>
           <th>Serial No</th>
          <th>Username</th>
         </tr>
        </thead>
        <tbody>
          <tr>
            <td>{count}</td>
            <td>{username}</td>
          </tr>
        </tbody>
    </table>
        
         
    </div>
   
  )
}

export default Header