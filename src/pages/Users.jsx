import React from "react";

function Users({ name, email, position, age }) {
  return (
    <div>
      <li>
        <strong>{name}</strong>
        <strong>{email}</strong>
        <strong>{position}</strong>
        <strong>{age}</strong>
      </li>
    </div>
  );
}

export default Users;
