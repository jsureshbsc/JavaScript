import React, { useContext, useState } from "react";
import styled from "styled-components";
import { UserContext } from "./components/UserContext";
import { AddUserContext } from "./components/AddUserContext";
import DisplayDetails from "./components/DiplayDetials";
import AddUser from "./components/AddUser";

const Button = styled.button`
  background-color: purple;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  font-size: 18px;
  font-family: "Courier New", Courier, monospace;
  color: white;
  padding: 10px;
  width: 100px;
  margin: 10px;
  text-align: center;
  cursor: pointer;
`;

function App() {
  const [userList, setUserList] = useState([
    { name: "Suresh", age: 23, gender: "male" },
    { name: "Tamil", age: 24, gender: "male" },
  ]);

  const [displayComp, setDisplayComp] = useState("");

  return (
    <UserContext.Provider value={{ userList, setUserList }}>
      <AddUserContext.Provider value={{}}>
        <Button onClick={() => setDisplayComp("display")}>
          Display Details
        </Button>
        <Button onClick={() => setDisplayComp("add")}>Add Users</Button>

        {displayComp === "display" && <DisplayDetails />}
        {displayComp === "add" && <AddUser />}
      </AddUserContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
