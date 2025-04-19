import React from 'react';
import { PiUsersThreeFill } from "react-icons/pi";
import { GiClawHammer } from "react-icons/gi";
import { BiSolidBusSchool } from "react-icons/bi";
import {
  BsFillBellFill,
} from 'react-icons/bs';




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
    </main>
  );
};

export default Home;
// import React from 'react';
// import { PiUsersThreeFill } from 'react-icons/pi';
// import { GiClawHammer } from 'react-icons/gi';
// import { BiSolidBusSchool } from 'react-icons/bi';
// import { BsFillBellFill } from 'react-icons/bs';
// import { XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';

// const Home = () => {
//   const data = [
//     { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
//     { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
//     { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
//     { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
//     { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
//     { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
//     { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
//   ];

//   return (
//     <main className="main-container p-6 space-y-6">
//       {/* Dashboard Title */}
//       <div className="main-title mb-6">
//         <h3 className="dashtitle text-2xl font-semibold">DASHBOARD</h3>
//       </div>

//       {/* Cards Section */}
//       <div className="main-cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
//         {/* Card 1: Registered Users */}
//         <div className="card bg-[#b91385] text-white p-6 rounded-lg shadow-md hover:scale-105 transition-all duration-300">
//           <div className="card-inner flex justify-between items-center mb-4">
//             <h3 className="text-lg">REGISTERED USERS</h3>
//             <PiUsersThreeFill className="card_icon text-3xl" />
//           </div>
//           <h1 className="text-4xl font-bold">300</h1>
//         </div>

//         {/* Card 2: Registered Lawyers */}
//         <div className="card bg-[#131269] text-white p-6 rounded-lg shadow-md hover:scale-105 transition-all duration-300">
//           <div className="card-inner flex justify-between items-center mb-4">
//             <h3 className="text-lg">REGISTERED LAWYERS</h3>
//             <GiClawHammer className="card_icon text-3xl" />
//           </div>
//           <h1 className="text-4xl font-bold">12</h1>
//         </div>

//         {/* Card 3: Registered Drivers */}
//         <div className="card bg-[#9c8d0a] text-white p-6 rounded-lg shadow-md hover:scale-105 transition-all duration-300">
//           <div className="card-inner flex justify-between items-center mb-4">
//             <h3 className="text-lg">REGISTERED DRIVERS</h3>
//             <BiSolidBusSchool className="card_icon text-3xl" />
//           </div>
//           <h1 className="text-4xl font-bold">33</h1>
//         </div>

//         {/* Card 4: Notifications */}
//         <div className="card bg-[#0079d5] text-white p-6 rounded-lg shadow-md hover:scale-105 transition-all duration-300">
//           <div className="card-inner flex justify-between items-center mb-4">
//             <h3 className="text-lg">NOTIFICATIONS</h3>
//             <BsFillBellFill className="card_icon text-3xl" />
//           </div>
//           <h1 className="text-4xl font-bold">42</h1>
//         </div>
//       </div>

//       {/* Charts Section */}
//       <div className="charts bg-white p-6 rounded-lg shadow-md">
//         <ResponsiveContainer width="100%" height={300}>
//           <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="name" />
//             <YAxis />
//             <Tooltip />
//             <Legend />
//             <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
//             <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
//           </LineChart>
//         </ResponsiveContainer>
//       </div>
//     </main>
//   );
// };

// export default Home;

