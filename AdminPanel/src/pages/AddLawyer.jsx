import React from "react";
import { FaPlus } from "react-icons/fa";
import "../App.css";

const AddLawyer = () => {
  return (
    <div className="addlawyer-wrapper">
      <h2 className="addlawyer-title">Add Lawyer</h2>

      <div className="addlawyer-container">
        {/* Left - Full Form Stack */}
        <form className="addlawyer-form-layout">
          <div className="addlawyer-form-row">
            <div className="addlawyer-form-group">
              <label>First name</label>
              <input type="text" placeholder="Lawyer first name" />
            </div>
            <div className="addlawyer-form-group">
              <label>Last name</label>
              <input type="text" placeholder="Lawyer last name" />
            </div>
          </div>

          <div className="addlawyer-form-row">
            <div className="addlawyer-form-group">
              <label>Email</label>
              <input type="email" placeholder="Enter email address" />
            </div>
            <div className="addlawyer-form-group">
              <label>Phone number</label>
              <input type="tel" placeholder="Enter phone number" />
            </div>
          </div>

          <div className="addlawyer-form-row">
            <div className="addlawyer-form-group">
              <label>Residence Address</label>
              <input type="text" placeholder="Enter lawyer address" />
            </div>
            <div className="addlawyer-form-group">
              <label>SCN</label>
              <input type="text" placeholder="Enter Supreme court number" />
            </div>
          </div>

          <div className="addlawyer-form-group">
            <label>About Lawyer</label>
            <textarea rows={3} placeholder="Enter short disc of the lawyer." />
          </div>

          <div className="addlawyer-form-row">
            <div className="addlawyer-form-group">
              <label>NBA Affiliation</label>
              <input type="text" placeholder="Enter NBA affiliated" />
            </div>
            <div className="addlawyer-form-group">
              <label>Law Firm</label>
              <input type="text" placeholder="Enter Law firm" />
            </div>
            <div className="addlawyer-form-group">
              <label>Set Password</label>
              <input type="password" placeholder="Enter password" />
            </div>
          </div>

          <div className="addlawyer-form-row addlawyer-align-end">
            <div className="addlawyer-form-group addlawyer-one-third">
              <label>Practice Area</label>
              <select>
                <option>--Select practice area--</option>
              </select>
            </div>
            <div className="addlawyer-form-group addlawyer-one-third">
              <label>State of Practice</label>
              <select>
                <option>--Select state of practice--</option>
              </select>
            </div>
            <div className="addlawyer-form-group addlawyer-one-third">
              <button className="addlawyer-btn">
                <FaPlus className="addlawyer-icon" /> Add Lawyer
              </button>
            </div>
          </div>
        </form>

        {/* Right - Upload Section */}
        <div className="addlawyer-upload-box">
          <div className="addlawyer-upload-card">
            <h3>Set profile image</h3>
            <div className="addlawyer-upload-area">
              Drop files here
              <br />
              <span>Supported format: PNG, JPG</span>
            </div>
            <div className="addlawyer-upload-actions">
              <button className="addlawyer-cancel">Cancel</button>
              <button className="addlawyer-upload">Upload</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddLawyer;
