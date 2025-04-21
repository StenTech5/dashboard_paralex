import React from 'react';
import { PiUsersThreeFill } from "react-icons/pi";
import { GiClawHammer } from "react-icons/gi";
import { BiSolidBusSchool } from "react-icons/bi";
import {
  BsFillBellFill,
} from 'react-icons/bs';
import NewUsersTable from './NewUsersTable';




const Home = () => {
  

  return (
    <main className="main-container">
      <div className="main-title">
        <h3 className='dashtitle'>DASHBOARD</h3>
      </div>
      <div className="main-cards">
        <div className="card">
          <div className="card-inner">
            <h3>REGISTERED USERS</h3>
            <PiUsersThreeFill className="card_icon" />
          </div>
          <h1>300</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>REGISTERED LAWYERS</h3>
            <GiClawHammer className="card_icon" />
          </div>
          <h1>12</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>REGISTERED DRIVERS</h3>
            <BiSolidBusSchool className="card_icon"/>
          </div>
          <h1>33</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>NOTIFICATIONS</h3>
            <BsFillBellFill className="card_icon" />
          </div>
          <h1>42</h1>
        </div>
      </div>
{/* new users  */}
      <div>
        <NewUsersTable/>
      </div>
    </main>
  );
};

export default Home;

