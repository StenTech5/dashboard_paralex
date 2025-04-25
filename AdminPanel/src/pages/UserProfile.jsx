import React from "react";
import "../App.css";

const UserProfile = () => {
  return (
    <div className="user-profile-wrapper">
      <div className="user-profile-container">
        {/* Left Section - Avatar */}
        <div className="user-profile-avatar-section">
          <div className="user-avatar">A</div>
          <h2 className="userp-name">Abiodun Emeka</h2>
          <span className="user-role">User</span>
        </div>

        {/* Right Section - Form */}
        <div className="user-profile-form-section">
          <h2 className="form-title">User Profile Setting</h2>

          <form className="user-form">
            <div className="form-group">
              <label>First name</label>
              <input type="text" defaultValue="Abiodun" />
            </div>

            <div className="form-group">
              <label>Last name</label>
              <input type="text" defaultValue="Emeka" />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input type="email" defaultValue="abemeka@gmail.com" />
            </div>

            <div className="form-group">
              <label>Phone number</label>
              <input type="text" defaultValue="09087878666" />
            </div>

            <div className="form-group">
              <label>State of residence</label>
              <select defaultValue="Ogun state">
                <option>Ogun state</option>
                <option>Lagos</option>
                <option>Abuja</option>
              </select>
            </div>

            <div className="form-group">
              <label>Reset Password</label>
              <input type="password" placeholder="Enter new password" />
            </div>
          </form>

          <div className="form-buttons">
            <button className="update-btn">Update Profile</button>
            <button className="btn purple">Block User</button>
            <button className="delete-btn">Delete Profile</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
