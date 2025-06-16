import { useState } from "react";
import StudentForm from "./StudentForm";
import StudentList from "./StudentList";

const StudentMain = () => {
  const [studentData, setStudentData] = useState([]); // ✅ Starts empty
  const [formData, setFormData] = useState({
    s_name: "",
    s_age: "",
    s_gender: "",
  }); // ✅ Separate state for input handling

  const updateData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value }); // ✅ Updates input values
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStudentData([...studentData, formData]); // ✅ Adds new student entry
    setFormData({ s_name: "", s_age: "", s_gender: "" }); // ✅ Clears input after submission
  };

  return (
    <>
      <StudentForm
        updateData={updateData}
        studentData={formData}
        handleSubmit={handleSubmit}
      />
      {studentData.length > 0 && <StudentList studentlist={studentData} />}{" "}
    </>
  );
};

export default StudentMain;
