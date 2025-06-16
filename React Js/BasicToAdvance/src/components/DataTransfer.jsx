import React from "react";

const DataTransfer = ({ data }) => {
  return (
    <>
      <input
        type="text"
        name="name"
        value={data.name}
        onChange={data.updatevalue}
        placeholder="name"
      />
      <input
        type="text"
        name="password"
        value={data.password}
        onChange={data.updatevalue}
        placeholder="password"
      />
    </>
  );
};

export default DataTransfer;
