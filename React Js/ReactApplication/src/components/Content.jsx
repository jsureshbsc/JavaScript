import React, { act, useState } from "react";
import styled from "styled-components";
import Counter from "./Counter";
import Shop from "./Shop";

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
  //   let action = "nothing Happend"

  let [action, setAction] = useState("nothing Happend");

  function singleClick(e) {
    setAction("single Click Action");
  }

  function twoClick(e) {
    setAction("Double Click Action");
  }
  return (
    <main>
      {/* <Title>To List</Title>
    <Title>{action}</Title>
    <ButtonAdd onClick={singleClick}>single Click</ButtonAdd>
    <ButtonAdd onDoubleClick={(e)=>twoClick(e)}>Double Click</ButtonAdd> */}
      {/* <Counter></Counter> */}
      <Shop />
    </main>
  );
};

export default Content;
