import React from "react";
import { useRef } from "react";

const UncontrolledForm = () => {
  let refname = useRef();
  let refPassword = useRef();
  function submitForm() {
    console.log(refname.current.value);
  }
  return (
    <>
      <form onSubmit={submitForm} action="">
        <h1>UnControlled Form</h1>
        <input type="text" ref={refname} />
        <input type="password" ref={refPassword} />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default UncontrolledForm;
