import React from "react";
import { useState } from "react";

const MultipleValueForm = () => {
  let [formdata, setFormata] = useState({ name: "", email: "", password: "" });
  function handleEvent(e) {
    setFormata(
      { ...formdata, [e.target.name]: e.target.value },
      { ...formdata, [e.target.email]: e.target.value },
      { ...formdata, [e.target.password]: e.target.value }
    );
  }
  function submitForm() {
    console.log("successfully submit");
  }
  return (
    <>
      <form onSubmit={submitForm}>
        <h1>multiple field form</h1>
        <input type="text" value={formdata.name} onChange={handleEvent} />
        <input type="email" value={formdata.email} onChange={handleEvent} />
        <input
          type="password"
          value={formdata.password}
          onChange={handleEvent}
        />
        <button type="submit">submit</button>
      </form>
    </>
  );
};

export default MultipleValueForm;
