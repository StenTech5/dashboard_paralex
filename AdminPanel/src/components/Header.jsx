// import '../App.css';
// import { useState } from "react";
// import { IoMdNotificationsOutline } from "react-icons/io";
// import { FaUserCircle, FaSearch, FaBars } from "react-icons/fa";

// const Header = ({ toggleSidebar }) => {
//   const [searchTerm, setSearchTerm] = useState("");

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//     console.log("Search:", e.target.value);
//   };

//   return (
//     <header className="header-container">
//       {/* Hamburger toggle (mobile only) */}
//       <button className="menu-toggle" onClick={toggleSidebar}>
//         <FaBars />
//       </button>

//       <div className="header-left">
//         <div className="header-search">
//           <FaSearch className="search-icon" />
//           <input
//             type="text"
//             placeholder="Search ..."
//             value={searchTerm}
//             onChange={handleSearch}
//             className="search-input"
//           />
//         </div>
//       </div>

//       <div className="header-controls">
//         <div className="header-icon header-notification">
//           <IoMdNotificationsOutline />
//         </div>
//         <div className="header-icon header-profile">
//           <FaUserCircle />
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;
import '../App.css';
import { useState } from 'react';
import { IoMdNotificationsOutline } from 'react-icons/io';
import {
  FaUserCircle,
  FaSearch,
  FaBars,
  FaSignOutAlt,
  FaCog,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = ({ toggleSidebar }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <header className="header-container">
      <button className="menu-toggle" onClick={toggleSidebar}>
        <FaBars />
      </button>

      <div className="header-left">
        <div className="header-search">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search ..."
            value={searchTerm}
            onChange={handleSearch}
            className="search-input"
          />
        </div>
      </div>

      <div className="header-controls">
        <div className="header-icon header-notification">
          <Link to="notification">
            <IoMdNotificationsOutline />
          </Link>
        </div>

        <div className="header-icon header-profile" onClick={toggleDropdown}>
          <FaUserCircle />
          {showDropdown && (
            <div className="profile-dropdown">
              <div className="profile-caret" />
              <div
                className={`profile-card ${showDropdown ? 'profile-show' : ''}`}
              >
                <div className="profile-header">
                  <div className="profile-avatar">
                    <FaUserCircle className="profile-avatar-icon" />
                    <span className="profile-status-dot" />
                  </div>
                  <div className="profile-info">
                    <div className="profile-name">Zainab S.</div>
                    <div className="profile-email">
                      zainab.sidiku@paralexlogistics.com
                    </div>
                  </div>
                </div>
                <hr className="profile-divider" />
                <Link to="settings">
                  <div className="profile-item">
                    <FaCog className="profile-item-icon" />
                    <span>Account Setting</span>
                  </div>
                </Link>
                <Link to="error">
                  <div className="profile-item">
                    <FaSignOutAlt className="profile-item-icon" />
                    <span>Log out</span>
                  </div>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
