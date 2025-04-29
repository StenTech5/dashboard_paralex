import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AiFillDashboard } from 'react-icons/ai';
import { PiUsersThreeFill } from 'react-icons/pi';
import { BiSolidBusSchool } from 'react-icons/bi';
import { IoShieldCheckmark } from 'react-icons/io5';
import { IoIosCheckmarkCircle, IoMdNotifications } from 'react-icons/io';
import { FaUserShield } from 'react-icons/fa6';
import { BsFillGearFill } from 'react-icons/bs';
import { MdPostAdd } from 'react-icons/md';
import { GrTransaction } from 'react-icons/gr';
import { FaGavel } from 'react-icons/fa';
import { FaGears } from 'react-icons/fa6';
import logo from '../assets/logz.png';
import '../App.css';
import {
  ADMIN_BAILBOND_URL,
  ADMIN_BIMSSYSTEM_URL,
  ADMIN_DASHBOARD_URL,
  ADMIN_DRIVERS_URL,
  ADMIN_LAWYERS_URL,
  ADMIN_LICSVERIFICATION_URL,
  ADMIN_LOGISTICS_URL,
  ADMIN_SETTINGS_URL,
  ADMIN_USERS_URL,
  ADMIN_VERIFYLAWYER_URL
} from '../utils/constants';
import { logoutAdmin } from '../api/authHelper';

const navLinks = [
  { to: ADMIN_DASHBOARD_URL, label: 'Dashboard', icon: <AiFillDashboard />, external: false },
  { to: ADMIN_LAWYERS_URL, label: 'Lawyers', icon: <FaGavel />, external: false },
  { to: ADMIN_USERS_URL, label: 'Users', icon: <PiUsersThreeFill />, external: false },
  { to: ADMIN_DRIVERS_URL, label: 'Drivers', icon: <BiSolidBusSchool />, external: false },
  { to: ADMIN_BAILBOND_URL, label: 'Bail Bond', icon: <IoMdNotifications />, external: false },
  { to: ADMIN_LOGISTICS_URL, label: 'Logistics', icon: <FaUserShield />, external: false },
  { to: ADMIN_LICSVERIFICATION_URL, label: 'LICS Verification', icon: <IoIosCheckmarkCircle />, external: true },
  { to: ADMIN_BIMSSYSTEM_URL, label: 'BIMS', icon: <BsFillGearFill />, external: false },
  { to: '/admin/transaction', label: 'Transactions', icon: <GrTransaction />, external: false },
  { to: ADMIN_VERIFYLAWYER_URL, label: 'Verify Lawyer', icon: <IoShieldCheckmark />, external: true },
  { to: '/admin/post-news', label: 'Post News', icon: <MdPostAdd />, external: false },
  { to: ADMIN_SETTINGS_URL, label: 'Admin Settings', icon: <FaGears />, external: false }
];

export default function Sidebar({ open, setOpen }) {
  const navigate = useNavigate();
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  const handleLogoutClick = (e) => {
    e.preventDefault();
    setShowLogoutConfirm(true);
  };

  const handleConfirmLogout = () => {
    logoutAdmin();
    setOpen(false);
    navigate('/');
  };

  const handleCancelLogout = () => {
    setShowLogoutConfirm(false);
  };

  return (
    <>
      <aside className={`sidebar ${open ? 'sidebar-open' : ''}`}>  
        {open && (
          <button
            className="sidebar-close"
            aria-label="Close sidebar"
            onClick={() => setOpen(false)}
          >
            ✕
          </button>
        )}

        <div className="sidebar-top">
          <div className="sidebar-logo">
            <Link to="/admin/dashboard">
              <img src={logo} alt="Logo" className="logo-img" />
            </Link>
          </div>

          <nav className="sidebar-nav">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                target={link.external ? '_blank' : '_self'}
                rel={link.external ? 'noopener noreferrer' : undefined}
                className={({ isActive }) =>
                  `sidebar-link ${isActive ? 'active' : ''}`
                }
                onClick={() => setOpen(false)}
              >
                <span className="sidebar-icon">{link.icon}</span>
                <span className="sidebar-label">{link.label}</span>
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="sidebar-bottom">
          <div className="avatar-wrapper">
            <div className="admin-avatar">
              <span className="avatar-icon">👤</span>
              <span className="status-dot"></span>
            </div>
          </div>

          <div className="admin-info">
            <p className="admin-name">Admin</p>
            <a
              href="/"
              className="logout-link"
              onClick={handleLogoutClick}
            >
              Log out
            </a>
          </div>
        </div>
      </aside>

      {showLogoutConfirm && (
        <div className="logout-modal-overlay" role="dialog" aria-modal="true">
          <div className="logout-modal">
            <h3 className="logout-modal-title">Confirm Logout</h3>
            <p className="logout-modal-message">Are you sure you want to log out?</p>
            <div className="logout-modal-actions">
              <button
                type="button"
                className="btn-cancel"
                onClick={handleCancelLogout}
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn-confirm"
                onClick={handleConfirmLogout}
              >
                Log Out
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
