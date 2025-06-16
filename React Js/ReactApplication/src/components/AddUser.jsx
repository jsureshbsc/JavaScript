import React, { useContext, useState } from "react";
import { UserContext } from "./UserContext";

const AddUser = () => {
  const { setUserList } = useContext(UserContext);
  const [inputName, setInputName] = useState("");
  const [inputAge, setInputAge] = useState("");
  const [inputGender, setInputGender] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); // ✅ Prevents page reload
    console.log("Name:", inputName);
    console.log("Age:", inputAge);
    console.log("Gender:", inputGender);

    // ✅ Updates user list in context
    setUserList((prevUsers) => [
      ...prevUsers,
      { name: inputName, age: inputAge, gender: inputGender },
    ]);

    // ✅ Clears input fields after submission
    setInputName("");
    setInputAge("");
    setInputGender("");
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-3">User Details Form</h2>
      <form className="form-container" onSubmit={handleSubmit}>
        {" "}
        {/* ✅ Added onSubmit */}
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your name"
            value={inputName}
            required
            onChange={(event) => setInputName(event.target.value)} // ✅ Added onChange
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Age</label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter your age"
            value={inputAge}
            required
            onChange={(event) => setInputAge(event.target.value)} // ✅ Added onChange
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Gender</label>
          <select
            className="form-select"
            value={inputGender}
            required
            onChange={(event) => setInputGender(event.target.value)} // ✅ Fixed select event
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Submit
        </button>{" "}
        {/* ✅ Calls handleSubmit */}
      </form>
    </div>
  );
};

export default AddUser;
