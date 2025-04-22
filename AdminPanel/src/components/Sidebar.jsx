import '../App.css';
import logo from '../assets/logz.png';
import { Link, NavLink } from 'react-router-dom';
import { AiFillDashboard, AiOutlineSetting } from 'react-icons/ai';
import { PiUsersThreeFill } from 'react-icons/pi';
import { GiClawHammer } from 'react-icons/gi';
import { BiSolidBusSchool } from 'react-icons/bi';
import { FaUserShield, FaGears } from 'react-icons/fa6';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import { IoMdNotifications } from 'react-icons/io';
import { BsFillGearFill } from 'react-icons/bs';
import { MdPostAdd } from 'react-icons/md';
import { GrTransaction } from "react-icons/gr";
import { IoIosLogOut } from "react-icons/io";

const navLinks = [
  { to: '/', label: 'Dashboard', icon: <AiFillDashboard /> },
  { to: '/lawyers', label: 'Lawyers', icon: <GiClawHammer /> },
  { to: '/users', label: 'Users', icon: <PiUsersThreeFill /> },
  { to: '/drivers', label: 'Drivers', icon: <BiSolidBusSchool /> },
  { to: '/bailbond', label: 'Bail Bond', icon: <IoMdNotifications /> },
  { to: '/logistics', label: 'Logistics', icon: <FaUserShield /> },
  {
    to: '/licsverification',
    label: 'LICS Verification',
    icon: <IoIosCheckmarkCircle />,
  },
  { to: '/bimssystem', label: 'BIMS', icon: <BsFillGearFill /> },
  { to: '/transaction', label: 'Transactions', icon: <GrTransaction/> },
  { to: '/verifylawyer', label: 'Verify Lawyer', icon: <GiClawHammer /> },
  { to: '/postnews', label: 'Post News', icon: <MdPostAdd /> },
  { to: '/settings', label: 'Admin Settings', icon: <FaGears /> },
  { to: '/error', label: 'Logout', icon: <IoIosLogOut/> },
];

const Sidebar = ({ open, setOpen }) => {
  return (
    <aside className={`sidebar ${open ? 'sidebar-open' : ''}`}>
      {open && (
        <button className="sidebar-close" onClick={() => setOpen(false)}>
          ✕
        </button>
      )}

      <div className="sidebar-top">
        <div className="sidebar-logo">
          <Link to="/"><img src={logo} alt="Logo" className="logo-img" /></Link>
        </div>

        <nav className="sidebar-nav">
          {navLinks.map((link, index) => (
            <NavLink
              key={index}
              to={link.to}
              className={({ isActive }) =>
                `sidebar-link ${isActive ? 'active' : ''}`
              }
              onClick={() => setOpen(false)} // closes sidebar on mobile link click
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
          <p className="admin-name">Paralex Admin</p>
          <a href="#" className="admin-link">
            View profile
          </a>
        </div>

        <AiOutlineSetting className="admin-settings-icon" />
      </div>
    </aside>
  );
};

export default Sidebar;
