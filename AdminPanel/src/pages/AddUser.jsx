import React from "react";
import { FaPlus } from "react-icons/fa";
import "../App.css";

const AddUser = () => {
  return (
    <div className="adduser-wrapper">
      <h2 className="adduser-title">Add User</h2>

      <div className="adduser-card">
        <form className="adduser-form">
          <div className="adduser-form-group">
            <label>First name</label>
            <input type="text" placeholder="User first name" />
          </div>

          <div className="adduser-form-group">
            <label>Last name</label>
            <input type="text" placeholder="user last name" />
          </div>

          <div className="adduser-form-group">
            <label>Email</label>
            <input type="email" placeholder="Enter user email address" />
          </div>

          <div className="adduser-form-group">
            <label>Phone number</label>
            <input type="tel" placeholder="Enter user phone number" />
          </div>

          <div className="adduser-form-group">
            <label>State of residence</label>
            <select>
              <option>Ogun state</option>
              <option>Edo State</option>
              <option>Lagos State</option>
            </select>
          </div>

          <div className="adduser-form-group">
            <label>Residence Address</label>
            <input type="text" placeholder="Enter user address" />
          </div>

          <div className="adduser-form-group">
            <label>Set Password</label>
            <input type="password" placeholder="Enter new password" />
          </div>
        </form>

        <div className="adduser-btn-wrapper">
          <button className="adduser-btn">
            <FaPlus className="adduser-btn-icon" />
            Add User
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
