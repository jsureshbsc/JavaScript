import React, { useState } from "react";

const StudentList = ({ studentlist }) => {
  if (!studentlist || studentlist.length === 0) {
    return <p>No students available.</p>; // ✅ Prevents errors before accessing `s_name`
  }

  return (
    <>
      <h1>Student List</h1>
      {studentlist.map((student, index) => (
        <div key={index}>
          <h3>
            {index + 1}) {student.s_name}
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              view
            </button>
          </h3>
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
            key={index}
          >
            {/* model */}
            <div className="modal-dialog" key={index}>
              <div className="modal-content">
                <div className="modal-header">
                  <h1
                    className="modal-title fs-5"
                    id="exampleModalLabel"
                    key={index}
                  >
                    {student.s_name}
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* //view model */}
    </>
  );
};

export default StudentList;
