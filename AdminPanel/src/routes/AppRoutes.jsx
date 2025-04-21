// import { Routes, Route } from 'react-router-dom';
// import DashboardLayout from '../layouts/DashboardLayout';
// import Dashboard from '../pages/Dashboard';
// import Lawyers from '../pages/Lawyers';      
// import Bailbond from '../pages/Bailbond';
// import Users from '../pages/Users';
// import Drivers from '../pages/Drivers';
// import LawyerProfile from '../pages/LawyerProfile';

// const AppRoutes = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<DashboardLayout />}>
//         <Route index element={<Dashboard />} />      {/* Default route -> Dashboard */}
//         <Route path="lawyers" element={<Lawyers />} /> {/* Lawyers page */}
//         <Route path="bailbond" element={<Bailbond />} /> {/* bailbond page */}
//         <Route path="users" element={<Users/>} /> {/* users page */}
//         <Route path="drivers" element={<Drivers/>} /> {/* drivers page */}
//         <Route path="lawyerprofile" element={<LawyerProfile/>} /> {/* lawyerprofile page */}
//       </Route>
//     </Routes>
//   );
// };

// export default AppRoutes;
import { Routes, Route } from 'react-router-dom';
import DashboardLayout from '../layouts/DashboardLayout';
import Dashboard from '../pages/Dashboard';
import Lawyers from '../pages/Lawyers';      
import Bailbond from '../pages/Bailbond';
import Users from '../pages/Users';
import Drivers from '../pages/Drivers';
import LawyerProfile from '../pages/LawyerProfile';
import SignIn from '../auth/SiginIn';
import UserProfile from '../pages/UserProfile';
import AddLawyer from '../pages/AddLawyer';
import AddUser from '../pages/AddUser';

const AppRoutes = () => {
  return (
    <Routes>
      {/* 🔓 Public route - outside of layout */}
      <Route path="/signin" element={<SignIn />} />

      {/* 🔒 Protected routes - inside layout */}
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="lawyers" element={<Lawyers />} />
        <Route path="bailbond" element={<Bailbond />} />
        <Route path="users" element={<Users />} />
        <Route path="drivers" element={<Drivers />} />
        <Route path="lawyerprofile" element={<LawyerProfile />} />
        <Route path="userprofile" element={<UserProfile />} />
        <Route path="addlawyer" element={<AddLawyer/>} />
        <Route path="adduser" element={<AddUser/>} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;

