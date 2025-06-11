import React, { useState } from 'react'
import styled from 'styled-components'
let Button = styled.button
`  background-color :black;
    color:white;
    font-size :20px;
    margin : 5px;
`

const Counter = () => {
    let [count,setCount] = useState(0)
    function onadd(){
        setCount(count+1);
    }
    function onminus(){
        setCount(count-1);
    }
    
  return (
    <>
    <h1>Increment and Decrement value is :{count}</h1>
    <Button onClick={onadd}>add +1</Button>
    <Button onClick={onminus}>minus -1</Button>
    </>
  )
}

export default Counter