import React, { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { IoEyeOffSharp, IoEyeSharp } from "react-icons/io5";
import "../App.css";
import logo from "../assets/favicon.png"; // Make sure your logo is placed correctly
import { useNavigate } from "react-router-dom";
import { handleAdminLogin } from "../api/api";
import { setAdminToken } from "../api/authHelper";
import { toast, ToastContainer } from "react-toastify";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate(); //Initialize the navigate function
  const [showPassword, setShowPassword] = useState(false); //For Password visibility

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    setLoading(true);   //Set loading to true
    setErrorMessage("");

    try {

      const response = await handleAdminLogin({ email, password })
      console.log("Response ", response);
      setAdminToken(response.token);
      setEmail("");
      setPassword("");
      navigate("/admin/dashboard", { replace: "true" });
    } catch (error) {
      console.log("Error ", error);
      const errMessage = error.error || "Failed to Login. Something went wrong";
      // alert(errMessage);
      toast.error(errMessage);
      
      setErrorMessage(errMessage);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="signin-ui-container">

      <ToastContainer position="top-right" autoClose={3000} />

      {/* Logo Image */}
      <img src={logo} alt="Paralex Logo" className="signin-ui-logo-img" />

        {/* Card */}
        <div className="signin-ui-card">

        <form onSubmit={handleSubmit} >

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
                name="email"
                id="email"
                value={email}
                onChange={ (evt) => setEmail(evt.target.value)}
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
                name="password"
                id="password"
                value={password}
                onChange={(evt) => setPassword(evt.target.value)}

              />
              <span
                className="signin-ui-eye"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <IoEyeSharp /> : <IoEyeOffSharp />}
              </span>
            </div>
          </div>

 
          {/* Remember Me */}
          <div className="signin-ui-options">
            <label className="signin-ui-remember">
              <input type="checkbox" className="signin-ui-checkbox" />
              <span>Remember me</span>
            </label>
          </div>

          {/* Sign In Button */}
          <button className="signin-ui-button"> { loading? "Loading..." : "Sign In"} </button>

      </form>

        </div>
    </div>
  );
};

export default SignIn;
