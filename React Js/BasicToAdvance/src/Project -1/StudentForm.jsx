import React from "react";

const StudentForm = ({ updateData, studentData, handleSubmit }) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Student Form</h1>
        <div className="mb-3">
          <label className="form-label">Student Name</label>
          <input
            type="text"
            className="form-control"
            name="s_name"
            value={studentData.s_name}
            onChange={updateData} // ✅ Sends updates to parent
          />

          <label className="form-label">Age</label>
          <input
            type="text"
            className="form-control"
            name="s_age"
            value={studentData.s_age}
            onChange={updateData} // ✅ Updates "Age"
          />

          <label className="form-label">Gender</label>
          <select
            name="s_gender"
            className="form-select"
            value={studentData.s_gender}
            onChange={updateData} // ✅ Updates "Gender"
          >
            <option value="">--Select Gender--</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Others">Others</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default StudentForm;
