import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaCheckCircle,
  FaPhoneAlt,
  FaUser,
  FaPlay,
} from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../App.css";

const DriverProfile = () => {
  const [formData, setFormData] = useState({
    firstName: "Omar",
    lastName: "Ganduje",
    email: "omanduje@gmail.com",
    state: "Lagos state",
    guarantorName: "Kasali balogun",
    guarantorPhone: "07088556432",
    guarantorEmail: "kasali@example.com",
    guarantorState: "Lagos state",
    guarantorAddress: "Kasali balogun",
    password: "",
    bike: "yes",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Driver profile updated successfully!");
    console.log("Updated Profile:", formData);
    setFormData((prev) => ({ ...prev, password: "" }));
  };

  return (
    <div className="driverprofile-wrapper">
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />

      <div className="driverprofile-card">
        {/* Left - Driver Card */}
        <div className="driverprofile-left">
          <div className="driverprofile-avatar">
            <FaUser />
          </div>
          <h2 className="driverprofile-name">{formData.firstName} {formData.lastName}</h2>
          <span className="driverprofile-role">Driver</span>

          <div className="driverprofile-status-list">
            <div className="driverprofile-status-item">
              <FaMapMarkerAlt /> Bale rd, Ipaja Lagos
            </div>
            <div className="driverprofile-status-item">
              <FaPlay /> Active
            </div>
            <div className="driverprofile-status-item">
              <FaCheckCircle /> Verified
            </div>
            <div className="driverprofile-status-item">
              <FaPhoneAlt /> 09027878686
            </div>
          </div>
        </div>

        {/* Right - Form */}
        <div className="driverprofile-right">
          <h2 className="driverprofile-form-title">Driver Profile Setting</h2>

          <div className="driverprofile-radio-group">
            <p>Do you have a bike</p>
            <div className="driverprofile-radio-options">
              <label>
                <input
                  type="radio"
                  name="bike"
                  value="yes"
                  checked={formData.bike === "yes"}
                  onChange={handleChange}
                /> YES
              </label>
              <label>
                <input
                  type="radio"
                  name="bike"
                  value="no"
                  checked={formData.bike === "no"}
                  onChange={handleChange}
                /> NO
              </label>
            </div>
          </div>

          <form className="driverprofile-form" onSubmit={handleSubmit}>
            <div>
              <label>First name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Last name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>State of residence</label>
              <select
                name="state"
                value={formData.state}
                onChange={handleChange}
                required
              >
                <option value="Lagos state">Lagos state</option>
              </select>
            </div>
            <div>
              <label>Guarantor Full Name</label>
              <input
                type="text"
                name="guarantorName"
                value={formData.guarantorName}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Guarantor Phone No.</label>
              <input
                type="text"
                name="guarantorPhone"
                value={formData.guarantorPhone}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Guarantor email address</label>
              <input
                type="email"
                name="guarantorEmail"
                value={formData.guarantorEmail}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Guarantor State of residence</label>
              <select
                name="guarantorState"
                value={formData.guarantorState}
                onChange={handleChange}
                required
              >
                <option value="Lagos state">Lagos state</option>
              </select>
            </div>
            <div>
              <label>Guarantor address</label>
              <input
                type="text"
                name="guarantorAddress"
                value={formData.guarantorAddress}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Reset Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter new password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            <div className="driverprofile-actions">
              <button type="submit" className="update-btn">
                Update Profile
              </button>
              <div className="driverprofile-action-buttons">
                <button type="button" className="suspend-btn">
                  Suspend Driver
                </button>
                <button type="button" className="delete-btn">
                  Delete Profile
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DriverProfile;
