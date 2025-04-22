import React, { useState } from "react";
import { FaPlus, FaUpload } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../App.css";

const AddDriver = () => {
  const [formData, setFormData] = useState({});
  const [image, setImage] = useState(null);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
      toast.success("Image selected successfully");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple validation
    if (!formData.firstName || !formData.lastName) {
      toast.error("Please fill in the required fields.");
      return;
    }
    toast.success("Driver added successfully");
    console.log("Form Data:", formData);
    console.log("Selected Image:", image);
    setFormData({});
    setImage(null);
  };

  return (
    <div className="adddriver-wrapper">
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
      <h2 className="adddriver-title">Add Driver</h2>

      <div className="adddriver-container">
        <div className="adddriver-content-wrapper">
          {/* Form Section */}
          <div className="adddriver-form-section">
            <form className="adddriver-form" onSubmit={handleSubmit}>
              <div className="adddriver-top-row">
                <div className="adddriver-radio-group">
                  <label className="adddriver-label">Do you have a bike</label>
                  <div className="adddriver-radio-options">
                    <label className="adddriver-radio-option">
                      <input
                        type="radio"
                        name="bike"
                        value="yes"
                        checked={formData.bike === "yes"}
                        onChange={handleInputChange}
                      /> YES
                    </label>
                    <label className="adddriver-radio-option">
                      <input
                        type="radio"
                        name="bike"
                        value="no"
                        checked={formData.bike === "no"}
                        onChange={handleInputChange}
                      /> NO
                    </label>
                  </div>
                </div>

                <div className="adddriver-input-group">
                  <label className="adddriver-label">How many Bike</label>
                  <input
                    type="number"
                    name="bikeCount"
                    min="1"
                    max="20"
                    value={formData.bikeCount || ""}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="adddriver-input-group">
                  <label className="adddriver-label">Bike Make</label>
                  <input
                    type="text"
                    name="bikeMake"
                    placeholder="e.g Q-link"
                    value={formData.bikeMake || ""}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="adddriver-grid">
                {[
                  ["First name", "firstName", "Driver first name"],
                  ["Last name", "lastName", "Driver last name"],
                  ["Email", "email", "Enter email address"],
                  ["State of residence", "state", "--Driver state of residence--", true],
                  ["Phone number", "phone", "Driver phone No."],
                  ["Driver email address", "driverEmail", "Driver email address"],
                  ["Guarantor Full Name", "guarantorName", "Guarantor name"],
                  ["Guarantor Phone No.", "guarantorPhone", "Guarantor phone number"],
                  ["Guarantor email address", "guarantorEmail", "Guarantor email address"],
                  ["Guarantor State of residence", "guarantorState", "--Select guarantor state of residence--", true],
                  ["Guarantor address", "guarantorAddress", "Guarantor address"],
                  ["Reset Password", "password", "Enter new password", false, true],
                ].map(([label, name, placeholder, isSelect, isPassword], idx) => (
                  <div className="adddriver-input-group" key={idx}>
                    <label className="adddriver-label">{label}</label>
                    {isSelect ? (
                      <select
                        name={name}
                        value={formData[name] || ""}
                        onChange={handleInputChange}
                      >
                        <option value="">{placeholder}</option>
                        <option value="Lagos">Lagos</option>
                        <option value="Abuja">Abuja</option>
                      </select>
                    ) : (
                      <input
                        type={isPassword ? "password" : "text"}
                        name={name}
                        placeholder={placeholder}
                        value={formData[name] || ""}
                        onChange={handleInputChange}
                      />
                    )}
                  </div>
                ))}
              </div>

              <div className="adddriver-submit">
                <button type="submit" className="adddriver-btn">
                  <FaPlus className="adddriver-icon" /> Add Driver
                </button>
              </div>
            </form>
          </div>

          {/* Upload Section */}
          <div className="adddriver-upload-section">
            <div className="adddriver-upload-card">
              <h3>Upload Image</h3>
              <div className="adddriver-upload-box">
                <input type="file" id="driverImage" onChange={handleImageChange} />
                <label htmlFor="driverImage">
                  <FaUpload className="adddriver-upload-icon" />
                </label>
                {image && <p className="adddriver-upload-filename">{image.name}</p>}
              </div>
              <div className="adddriver-upload-actions">
                <button className="cancel" onClick={() => setImage(null)}>Cancel</button>
                <label htmlFor="driverImage">
                  <button className="upload">Upload</button>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddDriver;
