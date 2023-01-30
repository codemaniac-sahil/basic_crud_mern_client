import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <h1>MERN CRUD</h1>
        </div>
        <ul className="navlinks">
          <li>
            <Link to="/adduser">Add User</Link>{" "}
          </li>
          <li>
            <Link to="/alluser">All User</Link>{" "}
          </li>
        </ul>
      </div>
    </>
  );
}
