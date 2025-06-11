import React, { useState } from "react";
import styled from "styled-components";
import Counter from "./Counter";
import Shop from "./Shop";
import ProductItem from "./ProductItem"; // ✅ Import here if you want to use it

let Title = styled.h1`
  background-color: blue;
  color: yellow;
`;

let ButtonAdd = styled.button`
  background-color: black;
  color: white;
  font-size: 20px;
  margin: 5px;
`;

const Content = () => {
  let [action, setAction] = useState("nothing Happend");

  function singleClick(e) {
    setAction("Single Click Action");
  }

  function twoClick(e) {
    setAction("Double Click Action");
  }

  return (
    <main>
      <Title>To List</Title>
      <Title>{action}</Title>
      <ButtonAdd onClick={singleClick}>Single Click</ButtonAdd>
      <ButtonAdd onDoubleClick={twoClick}>Double Click</ButtonAdd>
      <Counter />
      <Shop />
      <ProductItem /> {/* ✅ Using context here */}
    </main>
  );
};

export default Content;