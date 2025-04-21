import React from "react";
import { FaPlus, FaUpload } from "react-icons/fa";
import "../App.css";

const AddDriver = () => {
  return (
    <div className="adddriver-wrapper">
      <h2 className="adddriver-title">Add Driver</h2>

      <div className="adddriver-container">
        <div className="adddriver-content-wrapper">
          {/* Form Section */}
          <div className="adddriver-form-section">
            <form className="adddriver-form" style={{ width: "100%" }}>
              <div className="adddriver-top-row">
                <div className="adddriver-radio-group">
                  <label className="adddriver-label">Do you have a bike</label>
                  <div className="adddriver-radio-options">
                    <label className="adddriver-radio-option">
                      <input type="radio" name="bike" defaultChecked /> YES
                    </label>
                    <label className="adddriver-radio-option">
                      <input type="radio" name="bike" /> NO
                    </label>
                  </div>
                </div>

                <div className="adddriver-input-group">
                  <label className="adddriver-label">How many Bike</label>
                  <input
                    type="number"
                    min="1"
                    max="20"
                    defaultValue={10}
                  />
                </div>

                <div className="adddriver-input-group">
                  <label className="adddriver-label">Bike Make</label>
                  <input
                    type="text"
                    placeholder="e.g Q-link"
                  />
                </div>
              </div>

              <div className="adddriver-grid">
                {[
                  ["First name", "Driver first name"],
                  ["Last name", "Driver last name"],
                  ["Email", "Enter email address"],
                  ["State of residence", "--Driver state of residence--", true],
                  ["Phone number", "Driver phone No."],
                  ["Driver email address", "Driver email address"],
                  ["Guarantor Full Name", "Guarantor name"],
                  ["Guarantor Phone No.", "Guarantor phone number"],
                  ["Guarantor email address", "Guarantor email address"],
                  ["Guarantor State of residence", "--Select guarantor state of residence--", true],
                  ["Guarantor address", "Guarantor address"],
                  ["Reset Password", "Enter new password", false, true]
                ].map(([label, placeholder, isSelect, isPassword], idx) => (
                  <div className="adddriver-input-group" key={idx}>
                    <label className="adddriver-label">{label}</label>
                    {isSelect ? (
                      <select>
                        <option>{placeholder}</option>
                      </select>
                    ) : (
                      <input
                        type={isPassword ? "password" : "text"}
                        placeholder={placeholder}
                      />
                    )}
                  </div>
                ))}
              </div>

              <div className="adddriver-submit">
                <button className="adddriver-btn">
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
                <FaUpload className="adddriver-upload-icon" />
              </div>
              <div className="adddriver-upload-actions">
                <button className="cancel">Cancel</button>
                <button className="upload">Upload</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddDriver;
