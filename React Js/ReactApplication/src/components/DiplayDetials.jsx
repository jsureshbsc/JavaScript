import React, { useContext, useState } from "react";
import { UserContext } from "./UserContext";
import AddUser from "./AddUser";

const DisplayDetails = () => {
  const { userList } = useContext(UserContext);
  const [formShow, setformShow] = useState(false);
  const [selectedUser, setSelectedUser] = useState("");
  function addUser() {
    setformShow(true);
  }
  function closeAdduserfield() {
    setformShow(false);
  }
  const singleUserDetails = (name) => {
    const user = userList.find((user) => user.name === name);
    if (user) {
      setSelectedUser(user); // ✅ Set state to display user details
    }
  };
  return (
    <div>
      {selectedUser && (
        <div>
          <h3>User Details:</h3>
          <p>Name: {selectedUser.name}</p>
          <p>Age: {selectedUser.age}</p>
          <p>Gender: {selectedUser.gender}</p>
        </div>
      )}
      <h3>Users List:</h3>
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>view</th>
          </tr>
        </thead>
        <tbody>
          {userList?.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.gender}</td>
              <td>
                <button
                  key={index}
                  onClick={() => singleUserDetails(user.name)}
                >
                  {user.name}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button onClick={addUser}>Add User</button>
      <button onClick={closeAdduserfield}>Close AdduserField</button>
      {formShow && <AddUser />}
    </div>
  );
};
export default DisplayDetails;
