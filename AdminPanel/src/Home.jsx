import React from 'react';
import { PiUsersThreeFill } from "react-icons/pi";
import { GiClawHammer } from "react-icons/gi";
import { BiSolidBusSchool } from "react-icons/bi";
import {
  BsFillBellFill,
} from 'react-icons/bs';
import {XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';



const Home = () => {
  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

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

      <div className="charts">
        {/* Space made for another box item  */}
        <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
      </div>
    </main>
  );
};

export default Home;
