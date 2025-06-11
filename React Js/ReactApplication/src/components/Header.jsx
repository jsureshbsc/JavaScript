import React, { useContext } from "react";
import { userContext } from "../App";

function Header(props) {
  let { user } = useContext(userContext);
  const userlogo = {
    backgroundColor: "black",
    fontSize: "60px",
    fontWeight: "bold",
    color: "#ff5733",
    textShadow: "3px 3px 5px rgba(0, 0, 0, 0.3)",
    borderRadius: "50%",
    height: "70px",
    width: "70px",
    textAlign:"center"
  };
  return (
    <header>
      <header>Todo List - {user.name}</header>
      <p style={userlogo}>{user.name.slice(0, 1)}</p>
    </header>
  );
}

export default Header;
