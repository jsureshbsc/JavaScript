import React, { use, useState } from "react";
import PropsExample from "./PropsExample";
import StateExample from "./StateExample";
import Form from "./Form";
import ListMap from "./ListMap";
import ControlledForm from "./ControlledForm";
import UncontrolledForm from "./UncontrolledForm";
import MultipleValueForm from "./MultipleValueForm";
import DataTransfer from "./DataTransfer";
const BasicComponents = () => {
  const propsValue = "Hello world ";
  const userList = ["suresh", "tamil", "nandha", "hari"];
  const [formdata, setFormdata] = useState({ name: "", password: "" });

  const updatevalue = (event) => {
    setFormdata({ ...formdata, [event.target.name]: event.target.value });
  };

  return (
    <>
      <div>
        <h1>
          username:{formdata.name} <br /> password :{formdata.password}
        </h1>
        <PropsExample propsvalue={propsValue} />
        <StateExample />
        <Form />
        <ListMap userList={userList} />
        <ControlledForm />
        <UncontrolledForm />
        <MultipleValueForm />
        <DataTransfer data={{ formdata, updatevalue }} />
      </div>
    </>
  );
};

export default BasicComponents;
