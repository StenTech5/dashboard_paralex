import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillGearFill } from 'react-icons/bs';
import { AiFillDashboard } from 'react-icons/ai';
import { PiUsersThreeFill } from 'react-icons/pi';
import { GiClawHammer } from 'react-icons/gi';
import { BiSolidBusSchool } from 'react-icons/bi';
import { FaUserShield } from 'react-icons/fa6';
import { IoIosCheckmarkCircle, IoMdNotifications } from 'react-icons/io';
import { FaGears } from 'react-icons/fa6';
import logo from '../assets/logz.png';
import '../App.css';
import { IoIosCloseCircle } from 'react-icons/io';
import { ADMIN_BAILBOND_URL, ADMIN_BIMSSYSTEM_URL, ADMIN_DASHBOARD_URL, ADMIN_DRIVERS_URL, ADMIN_LAWYERS_URL, ADMIN_LICSVERIFICATION_URL, ADMIN_NOTIFICATIONS_URL, ADMIN_SETTINGS_URL, ADMIN_USERS_URL, ADMIN_VERIFYLAWYER_URL } from '../utils/constants';

const Sidebar = ({ openSidebarToggle, OpenSidebar }) => {
  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? 'sidebar-responsive' : ''}
    >
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <Link to="/">
            <img src={logo} alt="Paralex Logo" className="logo" />
          </Link>
        </div>
        <span className="" onClick={OpenSidebar}>
          <IoIosCloseCircle className="icon close_icon" />
        </span>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <Link to={ADMIN_DASHBOARD_URL}>
            <AiFillDashboard className="icon" /> Overview
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to={ADMIN_USERS_URL}>
            <PiUsersThreeFill className="icon" /> Users
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to={ADMIN_LAWYERS_URL}>
            <GiClawHammer className="icon" /> Lawyers
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to={ADMIN_DRIVERS_URL}>
            <BiSolidBusSchool className="icon" /> Drivers
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to={ADMIN_BAILBOND_URL}>
            <FaUserShield className="icon" /> Bailbond
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to={ADMIN_LICSVERIFICATION_URL}>
            <IoIosCheckmarkCircle className="icon" /> LICS Verification
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to={ADMIN_BIMSSYSTEM_URL}>
            <FaGears className="icon" /> BIMS System
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to={ADMIN_VERIFYLAWYER_URL}>
            <GiClawHammer className="icon" /> Verify Lawyer
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to={ADMIN_NOTIFICATIONS_URL}>
            <IoMdNotifications className="icon" /> Notification
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to={ADMIN_SETTINGS_URL}>
            <BsFillGearFill className="icon" /> Settings
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
