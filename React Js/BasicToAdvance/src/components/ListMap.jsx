import React from "react";

const ListMap = ({ userList }) => {
  return (
    <>
      <ul>
        {userList.length < 0 ? (
          <ul>
           {
            userList.map((user)=>{
                return(
                    <li key={user}>{user}</li>
                )
            })
           }
          </ul>
        ) : (
          <p>No users found</p>
        )}
      </ul>
    </>
  );
};

export default ListMap;
