import { useState } from "react";
import styled from "styled-components";

const ChangingName = () => {
  const usernameList = [
    { name: "suresh", age: 23, gender: "male" },
    { name: "tamil", age: 23, gender: "male" },
  ];

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

  const [selectDetails, setDetails] = useState(null);

  const userDetails = (name, age, gender) => {
    setDetails({ name, age, gender });
  };

  return (
    <>
      <h1>
        {selectDetails
          ? `Name: ${selectDetails.name}, Age: ${selectDetails.age}, Gender: ${selectDetails.gender}`
          : "Click a button to see details"}
      </h1>

      {usernameList.map((user, index) => (
        <div key={index}>
          <Button onClick={() => userDetails(user.name, user.age, user.gender)}>
            {user.name}
          </Button>
        </div>
      ))}
    </>
  );
};

export default ChangingName;
 