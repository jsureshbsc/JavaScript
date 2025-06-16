import React from "react";
import { useState } from "react";

const ControlledForm = () => {
  let [name, setName] = useState("");
  let [password, setPassword] = useState("");
  function submitForm() {
    console.log("name : " + name);
    console.log("password : " + password);
  }
  return (
    <>
      <form onSubmit={submitForm}>
        <h1>Controlled Form</h1>
        <input
          type="text"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <input
          type="password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default ControlledForm;
