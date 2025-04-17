import React from 'react'
import {BsFillGearFill } from 'react-icons/bs'
import { AiFillDashboard } from "react-icons/ai";
import { PiUsersThreeFill } from "react-icons/pi";
import { GiClawHammer } from "react-icons/gi";
import { BiSolidBusSchool } from "react-icons/bi";
import { FaUserShield } from "react-icons/fa6";
import { IoIosCheckmarkCircle , IoMdNotifications } from "react-icons/io";
import { FaGears } from "react-icons/fa6";
import logo from "./assets/logz.png";
import "./App.css";
import { IoIosCloseCircle } from "react-icons/io";

const Sidebar = ({openSidebarToggle, OpenSidebar}) => {
  return (
    <aside id='sidebar' className={openSidebarToggle ? "sidebar-responsive" : ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
            <img src={logo} alt="Paralex Logo" className="logo" />
            </div>
            <span className='' onClick={OpenSidebar}><IoIosCloseCircle className='icon close_icon' /></span>
        </div>
        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="">
                    <AiFillDashboard className='icon' />Overview
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <PiUsersThreeFill className='icon'/>Users
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <GiClawHammer  className='icon' />Lawyers
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BiSolidBusSchool className='icon' />Drivers
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <FaUserShield className='icon' />Bailbond
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <IoIosCheckmarkCircle  className='icon' />LICS Verification
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <FaGears className='icon' />BIMS System
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                <GiClawHammer  className='icon' />Verify Lawyer
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <IoMdNotifications className='icon'/>Notification
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillGearFill className='icon'/>Settings
                </a>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar