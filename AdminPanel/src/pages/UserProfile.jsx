import React, { useEffect, useState } from "react";
import "../App.css";
import { toast, ToastContainer } from "react-toastify";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { adminGetUserByUserId } from "../api/api";
import Loader from "../components/Loader";


const UserProfile = () => {

  const { userId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      userType: "User"
    });
  
    const [userData, setUserData] = useState(null);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    };

  const fetchUserByUserId = async () => {
    try {
      
      const resp = await adminGetUserByUserId(userId);
      console.log("User profile - ", resp);
      const userData = resp;
      setUserData(userData);

      setFormData({
        firstName: userData?.firstName,
        lastName: userData?.lastName,
        email: userData?.email,
        phoneNumber: userData?.phoneNumber || "Not Captured",
        userType: userData?.userType || "User"
      })

    } catch (error) {
      console.log("ERror ", error);
        const errorMessage = error.error || "Something went wrong in retrieving users details";
        toast.error(errorMessage, { toastId: "fetchUserByUserIdError"});
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchUserByUserId()
  }, [])

  return (
    <div className="user-profile-wrapper">

      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />

      <div className="user-profile-container">
        {/* Left Section - Avatar */}
        <div className="user-profile-avatar-section">
          <div className="user-avatar">{userData?.firstName?.charAt(0)}</div>
          <h2 className="userp-name">{userData?.firstName} </h2>
          <span className="user-role"> {userData?.userType} </span>
        </div>

        {/* Right Section - Form */}
        <div className="user-profile-form-section">
          <h2 className="form-title">User Profile Setting</h2>


          {/* Loading state - show loader */}
          {loading ? <Loader /> : null}

          <form className="user-form">
            <div className="form-group">
              <label>First name</label>
              <input id="firstName" name="firstName" type="text" value={formData.firstName} readonly />
            </div>

            <div className="form-group">
              <label>Last name</label>
              <input id="lastName" name="lastName" type="text" value={formData.lastName} readOnly />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input id="email" name="email" type="email" value={formData.email} readOnly />
            </div>

            <div className="form-group">
              <label>Phone number</label>
              <input id="phoneNumber" name="phoneNumber" type="text" value={formData.phoneNumber} readOnly />
            </div>

            {/* <div className="form-group">
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
            </div> */}
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
