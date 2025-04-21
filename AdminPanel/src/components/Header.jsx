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