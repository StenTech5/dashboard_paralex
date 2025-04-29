import React, { useEffect, useState } from 'react';
import { FaCaretDown } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../App.css';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { adminGetLawyerByUserId } from '../api/api';
import { practiceAreas } from '../utils/practiceAreas';
import Spinner from '../components/Spinner';
import Loader from '../components/Loader';

const LawyerProfile = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    state: "",
    supremeCourtNumber: "",
    bio: 'There are many variations of passages of Lorem Ipsum available...',
    aboutLawyer: "",
    nba: 'Eti-Osa Branch',
    nbabranchAffiliation: "",
    firm: 'Synergy Attornies',
    password: "",
    practiceArea: "",
  });

  const [lawyerData, setLawyerData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    toast.success('Lawyer profile updated successfully!');
    console.log('Updated Lawyer Data:', formData);
    setFormData((prev) => ({ ...prev, password: '' }));
  };

  const { userId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  const fetchLawyerByUserId = async () => {
    try {
      
      const resp = await adminGetLawyerByUserId(userId);
      console.log("Lawyer profile - ", resp);
      const lawyerData = resp.data;
      setLawyerData(lawyerData);

      setFormData({
        firstName: lawyerData?.user?.firstName,
        lastName: lawyerData?.user?.lastName,
        email: lawyerData?.user?.email,
        phoneNumber: lawyerData?.user?.phoneNumber || "Not Captured",
        state: lawyerData?.state,
        supremeCourtNumber: lawyerData?.supremeCourtNumber,
        aboutLawyer: lawyerData?.aboutLawyer || "Not Captured",
        nbabranchAffiliation: lawyerData?.nbabranchAffiliation || "Not Captured"
      })

    } catch (error) {
        const errorMessage = error.error || "Something went wrong in retrieving lawyers details";
        toast.error(errorMessage, { toastId: "fetchLawyerByUserIdError"});
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchLawyerByUserId()
  }, [])

  return (
    <div className="lawyer-profile">
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />

      {/* Left Section */}
      <div className="left-section">
        <div className="profile-summary">
          <img
            src="https://sbcf.fr/wp-content/uploads/2018/03/sbcf-default-avatar.png"
            alt="Profile"
            className="profile-img"
          />
          <h2 className="profile-name">{formData.firstName} {formData.lastName}</h2>
          <span className="profile-role">Lawyer</span>
        </div>

        {/* Practice Areas */}
        <div className="practice-box-wrapper">
          <div className="practice-box-caret"></div>
          <div className="practice-box">
            <h3 className="practice-title">Practice Areas</h3>
            <ul className="practice-list">
              {lawyerData?.practiceAreas?.map((practiceArea) => (
                <li><input type="checkbox" checked readOnly /> {practiceArea} </li>
              ))}

            </ul>
          </div>
        </div>

        <div className="practice-dropdown" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h3 className="practice-title" style={{ textAlign: 'center', marginBottom: '1rem', fontSize: '18px' }}>Add Practice Areas</h3>
          {/* <label htmlFor="practice-select" className="visually-hidden">Select practice area</label> */}
          <div className="dropdown-wrapper" style={{ width: '100%', maxWidth: '220px' }}>
            <select id="practice-select" name="practiceArea" value={formData.practiceArea} onChange={handleChange}>
              <option value="" aria-invalid>--Select practice area--</option>
              {practiceAreas
                .filter((practiceArea) => 
                  !lawyerData.practiceAreas?.some(
                    (selectedArea) => selectedArea?.toLowerCase() === practiceArea?.toLowerCase()
                  )
                ).map((practiceArea) => (
                  <option value={practiceArea}> {practiceArea} </option>
                ))}

            </select>
            <FaCaretDown className="dropdown-icon" />
          </div>
          {/* <div className="dropdown-options-card">
            <div className="dropdown-option">Criminal Lawyer</div>
            <div className="dropdown-option">Real Estate</div>
          </div> */}
        </div>
      </div>

      {/* Right Section */}
      <div className="right-section">
        {/* Loading state - show loader */}
        {loading ? <Loader /> : null}

        <h2 className="section-title">Lawyer Profile Setting</h2>
        <form onSubmit={handleSubmit}>
          <div className="info-grid">
            <div>
              <label className='label' htmlFor="firstName">First name</label>
              <input id="firstName" name="firstName" type="text" value={formData.firstName} onChange={handleChange} required />
            </div>
            <div>
              <label className='label' htmlFor="lastName">Last name</label>
              <input id="lastName" name="lastName" type="text" value={formData.lastName} onChange={handleChange} required />
            </div>
            <div>
              <label className='label' htmlFor="email">Email</label>
              <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div>
              <label className='label' htmlFor="phoneNumber">Phone number</label>
              <input id="phoneNumber" name="phoneNumber" type="text" value={formData.phoneNumber} onChange={handleChange} required />
            </div>
            <div>
              <label className='label' htmlFor="state">State of Practice</label>
              <select id="state" name="state" value={formData.state} onChange={handleChange} required>
                <option>Lagos State</option>
              </select>
            </div>
            <div>
              <label className='label' htmlFor="supremeCourtNumber">SCN No.</label>
              <input id="supremeCourtNumber" name="supremeCourtNumber" type="text" value={formData.supremeCourtNumber} onChange={handleChange} required />
            </div>
            <div style={{ gridColumn: '1 / -1', marginBottom: '2rem' }}>
              <label className='label' htmlFor="aboutLawyer">About Lawyer</label>
              <textarea id="aboutLawyer" name="aboutLawyer" value={formData.aboutLawyer} onChange={handleChange} required />
            </div>
          </div>

          <div className="label-grid">
            <div>
              <label className='label' htmlFor="nbabranchAffiliation">NBA Affiliation</label>
              <input id="nbabranchAffiliation" name="nbabranchAffiliation" type="text" value={formData.nbabranchAffiliation} onChange={handleChange} required />
            </div>
            {/* <div>
              <label className='label' htmlFor="firm">Law Firm</label>
              <input id="firm" name="firm" type="text" value={formData.firm} onChange={handleChange} required />
            </div> */}
       
          </div>

          <div className="button-row">
            <button type="button" className="btn purple">Enable</button>
            <button type="submit" className="btn purple">Block</button>
            <button type="button" className="btn red">Update Profile</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LawyerProfile;