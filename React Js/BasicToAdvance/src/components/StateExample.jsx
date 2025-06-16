import React from "react";
import { useState } from "react";

const StateExample = () => {
  const [count, setCount] = useState();
  var isVisible = true;

  function increment() {
    setCount(count + 1);
  }
  function countValue(event) {
    setCount(Number(event.target.value));
  }
  return (
    <>
      {isVisible && <input type="number" value={count} onChange={countValue} />}
      <h1>count : {count}</h1>
      <button
        onClick={() => {
          increment();
        }}
      >
        increament
      </button>
    </>
  );
};

export default StateExample;
