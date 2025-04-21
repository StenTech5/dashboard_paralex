import React from "react";
import { FaMapMarkerAlt, FaCheckCircle, FaPhoneAlt, FaUser, FaPlay } from "react-icons/fa";
import "../App.css";

const DriverProfile = () => {
  return (
    <div className="driverprofile-wrapper">
      <div className="driverprofile-card">
        {/* Left - Driver Card */}
        <div className="driverprofile-left">
          <div className="driverprofile-avatar">
            <FaUser />
          </div>
          <h2 className="driverprofile-name">Omar Ganduje</h2>
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
                <input type="radio" name="bike" defaultChecked /> YES
              </label>
              <label>
                <input type="radio" name="bike" /> NO
              </label>
            </div>
          </div>

          <form className="driverprofile-form">
            <div>
              <label>First name</label>
              <input type="text" defaultValue="Omar" />
            </div>
            <div>
              <label>Last name</label>
              <input type="text" defaultValue="Ganduje" />
            </div>
            <div>
              <label>Email</label>
              <input type="email" defaultValue="omanduje@gmail.com" />
            </div>
            <div>
              <label>State of residence</label>
              <select>
                <option>Lagos state</option>
              </select>
            </div>
            <div>
              <label>Guarantor Full Name</label>
              <input type="text" defaultValue="Kasali balogun" />
            </div>
            <div>
              <label>Guarantor Phone No.</label>
              <input type="text" defaultValue="07088556432" />
            </div>
            <div>
              <label>Guarantor email address</label>
              <input type="email" defaultValue="Kasali balogun" />
            </div>
            <div>
              <label>Guarantor State of residence</label>
              <select>
                <option>Lagos state</option>
              </select>
            </div>
            <div>
              <label>Guarantor address</label>
              <input type="text" defaultValue="Kasali balogun" />
            </div>
            <div>
              <label>Reset Password</label>
              <input type="password" placeholder="Enter new password" />
            </div>
          </form>

          <div className="driverprofile-actions">
            <button className="update-btn">Update Profile</button>
            <div className="driverprofile-action-buttons">
              <button className="suspend-btn">Suspend Driver</button>
              <button className="delete-btn">Delete Profile</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverProfile;
