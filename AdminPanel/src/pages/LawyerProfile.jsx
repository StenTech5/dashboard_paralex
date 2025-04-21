import React from 'react';
import { FaCaretDown } from 'react-icons/fa';
import '../App.css';

const LawyerProfile = () => {
  return (
    <div className="lawyer-profile">
      {/* Left Section */}
      <div className="left-section">
        <div className="profile-summary">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="Profile"
            className="profile-img"
          />
          <h2 className="profile-name">Bisola Akinlade</h2>
          <span className="profile-role">Lawyer</span>
        </div>

        {/* Practice Areas */}
        <div className="practice-box-wrapper">
          <div className="practice-box-caret"></div>
          <div className="practice-box">
            <h3 className="practice-title">Practice Areas</h3>
            <ul className="practice-list">
              <li>
                <input type="checkbox" checked readOnly /> Employment
              </li>
              <li>
                <input type="checkbox" checked readOnly /> Human Rights
              </li>
              <li>
                <input type="checkbox" checked readOnly /> International trade
              </li>
              <li>
                <input type="checkbox" checked readOnly /> Intellectual property
              </li>
              <li>
                <input type="checkbox" checked readOnly /> Litigation
              </li>
            </ul>
          </div>
        </div>

        {/* Add Practice Area styled like dropdown card */}
        <div
          className="practice-dropdown"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <h3
            className="practice-title"
            style={{ textAlign: 'center', marginBottom: '0.1rem', fontSize: '18px' }}
          >
            Add Practice Areas
          </h3>
          <label htmlFor="practice-select" className="visually-hidden">
            Select practice area
          </label>
          <div
            className="dropdown-wrapper"
            style={{ width: '100%', maxWidth: '220px' }}
          >
            <select id="practice-select">
              <option>--Select practice area--</option>
              <option value="criminal">Criminal Lawyer</option>
              <option value="real-estate">Real Estate</option>
              <option value="corporate">Corporate Law</option>
              <option value="tax">Tax Law</option>
              <option value="family">Family Law</option>
              <option value="environmental">Environmental Law</option>
            </select>

            <FaCaretDown className="dropdown-icon" />
          </div>
          <div className="dropdown-options-card">
            <div className="dropdown-option">Criminal Lawyer</div>
            <div className="dropdown-option">Real Estate</div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="right-section">
        <h2 className="section-title">Lawyer Profile Setting</h2>
        <div className="info-grid">
          <div>
            <label className='label' htmlFor="firstName">First name</label>
            <input id="firstName" type="text" value="Bisola" readOnly />
          </div>
          <div>
            <label className='label' htmlFor="lastName">Last name</label>
            <input id="lastName" type="text" value="Akinlade" readOnly />
          </div>
          <div>
            <label className='label' htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value="bisolaakin@gmail.com"
              readOnly
            />
          </div>
          <div>
            <label className='label' htmlFor="phone">Phone number</label>
            <input id="phone" type="text" value="09087878666" readOnly />
          </div>
          <div>
            <label className='label' htmlFor="state">State of Practice</label>
            <select id="state" value="Lagos State" readOnly>
              <option>Lagos State</option>
            </select>
          </div>
          <div>
            <label className='label' htmlFor="scn">SCN No.</label>
            <input id="scn" type="text" value="SCN009895" readOnly />
          </div>
          <div style={{ gridColumn: '1 / -1', marginBottom: '2rem' }}>
            <label className='label' htmlFor="bio">About Lawyer</label>
            <textarea
              id="bio"
              value="There are many variations of passages of Lorem Ipsum available..."
              readOnly
            />
          </div>
        </div>

        <div className="label-grid">
          <div>
            <label className='label' htmlFor="nba">NBA Affiliation</label>
            <input id="nba" type="text" value="Eti-Osa Branch" readOnly />
          </div>
          <div>
            <label className='label' htmlFor="firm">Law Firm</label>
            <input id="firm" type="text" value="Synergy Attornies" readOnly />
          </div>
          <div>
            <label className='label' htmlFor="password">Reset Password</label>
            <input
              id="password"
              type="password"
              placeholder="Enter new password"
            />
          </div>
        </div>

        <div className="button-row">
          <button className="btn purple">Verify Lawyer</button>
          <button className="btn fuchsia">Update Profile</button>
          <button className="btn red">Remove Lawyer</button>
        </div>
      </div>
    </div>
  );
};

export default LawyerProfile;
