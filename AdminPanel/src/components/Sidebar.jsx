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
          <Link to="/">
            <AiFillDashboard className="icon" /> Overview
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/users">
            <PiUsersThreeFill className="icon" /> Users
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/lawyers">
            <GiClawHammer className="icon" /> Lawyers
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/drivers">
            <BiSolidBusSchool className="icon" /> Drivers
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/bailbond">
            <FaUserShield className="icon" /> Bailbond
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/licsverification">
            <IoIosCheckmarkCircle className="icon" /> LICS Verification
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/bimssystem">
            <FaGears className="icon" /> BIMS System
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/verifylawyer">
            <GiClawHammer className="icon" /> Verify Lawyer
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/notification">
            <IoMdNotifications className="icon" /> Notification
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/settings">
            <BsFillGearFill className="icon" /> Settings
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
