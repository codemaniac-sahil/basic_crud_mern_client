import React, { useState } from "react";
import { addUser } from "../service/api";
import { useNavigate } from "react-router-dom";

function AddUser() {
  const defaultUser = {
    name: "",
    username: "",
    email: "",
    phone: "",
  };

  const navigate = useNavigate();
  const [user, setUser] = useState(defaultUser);
  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const addUserDetail = async () => {
    await addUser(user);
    navigate("/alluser");
  };
  return (
    <>
      <div className="add-form">
        <div className="form-heading">
          <h1>Add User</h1>
        </div>
        <div className="form">
          <input
            type="text"
            placeholder="Enter name"
            onChange={(e) => onValueChange(e)}
            name="name"
          />
          <input
            type="text"
            placeholder="Enter Email"
            onChange={(e) => onValueChange(e)}
            name="email"
          />
          <input
            type="text"
            placeholder="Enter Username"
            onChange={(e) => onValueChange(e)}
            name="username"
          />
          <input
            type="text"
            placeholder="Enter Phone number"
            onChange={(e) => onValueChange(e)}
            name="phone"
          />
          <button onClick={addUserDetail}>Add User</button>
        </div>
      </div>
    </>
  );
}

export default AddUser;
