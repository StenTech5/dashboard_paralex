import React, { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { IoEyeOffSharp, IoEyeSharp } from "react-icons/io5";
import "../App.css";
import logo from "../assets/favicon.png"; // Make sure your logo is placed correctly

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="signin-ui-container">
      {/* Logo Image */}
      <img src={logo} alt="Paralex Logo" className="signin-ui-logo-img" />

      {/* Card */}
      <div className="signin-ui-card">
        <h2 className="signin-ui-title">Sign in</h2>

        {/* Email */}
        <div className="signin-ui-group">
          <label className="signin-ui-label">Email</label>
          <div className="signin-ui-input-wrapper">
            <span className="signin-ui-icon">
              <FaEnvelope />
            </span>
            <input
              type="email"
              placeholder="info@paralexlogistics.com"
              className="signin-ui-input"
            />
          </div>
        </div>

        {/* Password */}
        <div className="signin-ui-group">
          <label className="signin-ui-label">Password</label>
          <div className="signin-ui-input-wrapper">
            <span className="signin-ui-icon">
              <FaLock />
            </span>
            <input
              type={showPassword ? "text" : "password"}
              className="signin-ui-input"
              placeholder="***************"
            />
            <span
              className="signin-ui-eye"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <IoEyeSharp /> : <IoEyeOffSharp />}
            </span>
          </div>
        </div>

        {/* Remember Me and Forgot */}
        <div className="signin-ui-options">
          <label className="signin-ui-remember">
            <input type="checkbox" className="signin-ui-checkbox" />
            <span>Remember me</span>
          </label>
        </div>

        {/* Sign In Button */}
        <button className="signin-ui-button">
          Sign in
        </button>
      </div>
    </div>
  );
};

export default SignIn;

