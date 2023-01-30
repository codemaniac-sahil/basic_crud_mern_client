import React, { useState, useEffect } from "react";
import { getUser, editUser } from "../service/api";
import { useParams, useNavigate } from "react-router-dom";

function EditUser() {
  const defaultUser = {
    name: "",
    username: "",
    email: "",
    phone: "",
  };
  const [user, setUser] = useState(defaultUser);

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    loadUserDetails();
  }, []);

  const loadUserDetails = async () => {
    const res = await getUser(id);
    setUser(res.data);
    console.log(user);
  };

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const editUserDetail = async () => {
    await editUser(user, id);
    navigate("/alluser");
  };
  return (
    <>
      <div className="add-form">
        <div className="form-heading">
          <h1>Edit User</h1>
        </div>
        <div className="form">
          <input
            type="text"
            placeholder="Enter name"
            onChange={(e) => onValueChange(e)}
            name="name"
            value={user.name}
          />
          <input
            type="text"
            placeholder="Enter Email"
            onChange={(e) => onValueChange(e)}
            name="email"
            value={user.email}
          />
          <input
            type="text"
            placeholder="Enter Username"
            onChange={(e) => onValueChange(e)}
            name="username"
            value={user.username}
          />
          <input
            type="text"
            placeholder="Enter Phone number"
            onChange={(e) => onValueChange(e)}
            name="phone"
            value={user.phone}
          />
          <button onClick={editUserDetail}>Edit User</button>
        </div>
      </div>
    </>
  );
}

export default EditUser;
