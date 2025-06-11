import React, { useState } from "react";

const Counter = () => {
  let [count, setCount] = useState(0);
  function onadd() {
    setCount(count + 1);
  }
  function onminus() {
    setCount(count - 1);
  }

  return (
    <>
      <h1>Increment and Decrement value is :{count}</h1>
      <button onClick={onadd}>add +1</button>
      <button onClick={onminus}>minus -1</button>
    </>
  );
};

export default Counter;
