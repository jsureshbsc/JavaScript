import React from "react";
import { useState } from "react";

const Form = () => {
  let [email, setEmail] = useState();
  function formSubmit() {
    console.log("successfully submited");
  }
  return (
    <>
      <form onSubmit={formSubmit} action="">
        <h1>Form</h1>
        <input
          type="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <button type="submit">submit</button>
      </form>
    </>
  );
};

export default Form;
