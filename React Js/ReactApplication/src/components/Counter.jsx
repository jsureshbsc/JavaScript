import React, { useState } from 'react'
import styled from 'styled-components'
//button
const Button = styled.button`
  background-color: red;
  color: yellow;
  font-size: 45px;
  padding: 10px;
  border: none;
  cursor: pointer;
`;

const Counter = () => {

  let [count, setCount] = useState(0);
  let increacseCount= ()=>{
    setCount(count+1);
  }
  let rewards=() =>{
    if(count===10){
       return(
        <div>
        <p>congrations you got 10% discount😎✌</p> 
        <p>Next rewards remaning 10 click only 😁🤞🐱😜</p>
       </div>
       )
    }else if(count ===20){
         return (
          <div>
        <p>congrations you got 10% discount😎✌</p> 
        <p>Next rewards remaning 10 click only 😁🤞🐱😜</p>
         </div>
         )
    }else if(count>=20){
        return <After20></After20>
    }
    
  }
  return (
    <>
    <h1>Click to rewards🎉✨</h1>
    <p>Total time clicked the button {count}</p>
    <div>
      {rewards()}
      <p>total count is :{count}</p>
    </div>
    <Button onClick={()=>{increacseCount()}}>Click me</Button>
    </>
  )
}

export default Counter


function After20() {
  return (
    <div>
      <p>Sorry, guys! That’s it for the rewards... 👀😃</p>
      <p>Goodbye! 😂😂</p>
    </div>
  );
}

