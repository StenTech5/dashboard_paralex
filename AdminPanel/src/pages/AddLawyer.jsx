import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../App.css";

const AddLawyer = () => {
  const [formData, setFormData] = useState({});
  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
      toast.success("Image selected successfully");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const required = ["firstName", "lastName", "email", "phone", "address", "scn", "about", "nba", "firm", "password", "practiceArea", "practiceState"];
    const isValid = required.every((key) => formData[key]?.trim());

    if (!isValid) {
      toast.error("Please fill in all fields.");
      return;
    }

    toast.success("Lawyer added successfully");
    console.log("Lawyer Data:", formData);
    console.log("Image:", image);
    setFormData({});
    setImage(null);
  };

  return (
    <div className="addlawyer-wrapper">
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
      <h2 className="addlawyer-title">Add Lawyer</h2>

      <div className="addlawyer-container">
        <form className="addlawyer-form-layout" onSubmit={handleSubmit}>
          <div className="addlawyer-form-row">
            <div className="addlawyer-form-group">
              <label>First name</label>
              <input name="firstName" type="text" placeholder="Lawyer first name" value={formData.firstName || ""} onChange={handleChange} />
            </div>
            <div className="addlawyer-form-group">
              <label>Last name</label>
              <input name="lastName" type="text" placeholder="Lawyer last name" value={formData.lastName || ""} onChange={handleChange} />
            </div>
          </div>

          <div className="addlawyer-form-row">
            <div className="addlawyer-form-group">
              <label>Email</label>
              <input name="email" type="email" placeholder="Enter email address" value={formData.email || ""} onChange={handleChange} />
            </div>
            <div className="addlawyer-form-group">
              <label>Phone number</label>
              <input name="phone" type="tel" placeholder="Enter phone number" value={formData.phone || ""} onChange={handleChange} />
            </div>
          </div>

          <div className="addlawyer-form-row">
            <div className="addlawyer-form-group">
              <label>Residence Address</label>
              <input name="address" type="text" placeholder="Enter lawyer address" value={formData.address || ""} onChange={handleChange} />
            </div>
            <div className="addlawyer-form-group">
              <label>SCN</label>
              <input name="scn" type="text" placeholder="Enter Supreme court number" value={formData.scn || ""} onChange={handleChange} />
            </div>
          </div>

          <div className="addlawyer-form-group">
            <label>About Lawyer</label>
            <textarea name="about" rows={3} placeholder="Enter short disc of the lawyer." value={formData.about || ""} onChange={handleChange}></textarea>
          </div>

          <div className="addlawyer-form-row">
            <div className="addlawyer-form-group">
              <label>NBA Affiliation</label>
              <input name="nba" type="text" placeholder="Enter NBA affiliated" value={formData.nba || ""} onChange={handleChange} />
            </div>
            <div className="addlawyer-form-group">
              <label>Law Firm</label>
              <input name="firm" type="text" placeholder="Enter Law firm" value={formData.firm || ""} onChange={handleChange} />
            </div>
            <div className="addlawyer-form-group">
              <label>Set Password</label>
              <input name="password" type="password" placeholder="Enter password" value={formData.password || ""} onChange={handleChange} />
            </div>
          </div>

          <div className="addlawyer-form-row addlawyer-align-end">
            <div className="addlawyer-form-group addlawyer-one-third">
              <label>Practice Area</label>
              <select name="practiceArea" value={formData.practiceArea || ""} onChange={handleChange}>
                <option value="">--Select practice area--</option>
                <option value="Criminal Law">Criminal Law</option>
                <option value="Family Law">Family Law</option>
              </select>
            </div>
            <div className="addlawyer-form-group addlawyer-one-third">
              <label>State of Practice</label>
              <select name="practiceState" value={formData.practiceState || ""} onChange={handleChange}>
                <option value="">--Select state of practice--</option>
                <option value="Lagos">Lagos</option>
                <option value="Abuja">Abuja</option>
              </select>
            </div>
            <div className="addlawyer-form-group addlawyer-one-third">
              <button type="submit" className="addlawyer-btn">
                <FaPlus className="addlawyer-icon" /> Add Lawyer
              </button>
            </div>
          </div>
        </form>

        <div className="addlawyer-upload-box">
          <div className="addlawyer-upload-card">
            <h3>Set profile image</h3>
            <div className="addlawyer-upload-area">
              <input type="file" id="lawyerImage" onChange={handleImageChange} />
              <label htmlFor="lawyerImage">
                Drop files here<br />
                <span>Supported format: PNG, JPG</span>
              </label>
              {image && <p className="addlawyer-upload-filename">{image.name}</p>}
            </div>
            <div className="addlawyer-upload-actions">
              <button className="addlawyer-cancel" onClick={() => setImage(null)}>Cancel</button>
              <label htmlFor="lawyerImage">
                <button type="button" className="addlawyer-upload">Upload</button>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddLawyer;
