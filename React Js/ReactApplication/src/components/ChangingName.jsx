import { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../App";
import DiplayDetials from "./DiplayDetials";

const ChangingName = () => {
  const { userList, selectedUser, setSelectedUser } = useContext(UserContext);

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

  return (
    <>
      <h1>
        {selectedUser
          ? `Name: ${selectedUser.name}, Age: ${selectedUser.age}, Gender: ${selectedUser.gender}`
          : "Click a button to see details"}
      </h1>

      {userList.map((user, index) => (
        <div key={index}>
          <Button onClick={() => setSelectedUser(user)}>{user.name}</Button>
        </div>
      ))}

      <DiplayDetials />
    </>
  );
};

exp;
