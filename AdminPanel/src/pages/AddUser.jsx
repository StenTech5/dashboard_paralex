import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../App.css";

const AddUser = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const requiredFields = ["firstName", "lastName", "email", "phone", "state", "address", "password"];
    const isValid = requiredFields.every((field) => formData[field]?.trim());

    if (!isValid) {
      toast.error("Please fill in all fields.");
      return;
    }

    toast.success("User added successfully!");
    console.log("User Data:", formData);
    setFormData({});
  };

  return (
    <div className="adduser-wrapper">
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
      <h2 className="adduser-title">Add User</h2>

      <div className="adduser-card">
        <form className="adduser-form" onSubmit={handleSubmit}>
          <div className="adduser-form-group">
            <label>First name</label>
            <input
              type="text"
              name="firstName"
              placeholder="User first name"
              value={formData.firstName || ""}
              onChange={handleChange}
            />
          </div>

          <div className="adduser-form-group">
            <label>Last name</label>
            <input
              type="text"
              name="lastName"
              placeholder="User last name"
              value={formData.lastName || ""}
              onChange={handleChange}
            />
          </div>

          <div className="adduser-form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter user email address"
              value={formData.email || ""}
              onChange={handleChange}
            />
          </div>

          <div className="adduser-form-group">
            <label>Phone number</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter user phone number"
              value={formData.phone || ""}
              onChange={handleChange}
            />
          </div>

          <div className="adduser-form-group">
            <label>State of residence</label>
            <select
              name="state"
              value={formData.state || ""}
              onChange={handleChange}
            >
              <option value="">--Select State--</option>
              <option value="Ogun State">Ogun State</option>
              <option value="Edo State">Edo State</option>
              <option value="Lagos State">Lagos State</option>
            </select>
          </div>

          <div className="adduser-form-group">
            <label>Residence Address</label>
            <input
              type="text"
              name="address"
              placeholder="Enter user address"
              value={formData.address || ""}
              onChange={handleChange}
            />
          </div>

          <div className="adduser-form-group">
            <label>Set Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter new password"
              value={formData.password || ""}
              onChange={handleChange}
            />
          </div>

          <div className="adduser-btn-wrapper">
            <button type="submit" className="adduser-btn">
              <FaPlus className="adduser-btn-icon" />
              Add User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
