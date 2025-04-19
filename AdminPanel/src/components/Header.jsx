import React from 'react'
import { BsFillBellFill,BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify } from "react-icons/bs";

const Header = ({OpenSidebar}) => {
  return (
    <header className='header'>
        <div className='menu-icon'>
            <BsJustify className='icon2' onClick={OpenSidebar}/>
        </div>
        <div className='header-left'>
            <BsSearch className='icon2'/>
        </div>
        <div className='header-right'>
            <BsFillBellFill className='icon2'/>
            <BsFillEnvelopeFill className='icon2'/>
            <BsPersonCircle className='icon2'/>
        </div>
    </header>
  )
}

export default Header
// import React from 'react';
// import { BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify } from 'react-icons/bs';

// const Header = ({ OpenSidebar }) => {
//   return (
//     <header className="header flex justify-between items-center p-6 bg-white shadow-md">
//       {/* Menu Icon for mobile */}
//       <div className="menu-icon md:hidden">
//         <BsJustify className="icon2 text-2xl" onClick={OpenSidebar} />
//       </div>

//       {/* Left section with search icon */}
//       <div className="header-left flex items-center space-x-4">
//         <BsSearch className="icon2 text-xl" />
//       </div>

//       {/* Right section with notification, mail, and profile */}
//       <div className="header-right flex items-center space-x-4">
//         <BsFillBellFill className="icon2 text-xl text-gray-700" />
//         <BsFillEnvelopeFill className="icon2 text-xl text-gray-700" />
//         <BsPersonCircle className="icon2 text-xl text-gray-700" />
//       </div>
//     </header>
//   );
// };

// export default Header;
