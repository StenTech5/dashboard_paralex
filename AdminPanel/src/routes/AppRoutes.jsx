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
import DriverProfile from '../pages/DriverProfile';
import AddDriver from '../pages/AddDriver';
import AdminSettings from '../pages/AdminSettings';
import NotificationPage from '../pages/Notifications';
import PostNewsForm from '../pages/PostNewsForm';
import BailBondDownload from '../pages/BailBondDownload';
import DeliveryRequest from '../pages/DeliveryRequest';
import Transactions from '../pages/Transactions';
import ErrorPage from '../pages/ErrorPage';

const AppRoutes = () => {
  return (
    <Routes>
      {/*  Public route - outside of layout */}
      <Route path="/signin" element={<SignIn />} />

      {/*  Protected routes - inside layout */}
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="lawyers" element={<Lawyers />} />
        <Route path="bailbond" element={<Bailbond />} />
        <Route path="users" element={<Users />} />
        <Route path="drivers" element={<Drivers />} />
        <Route path="lawyerprofile" element={<LawyerProfile />} />
        <Route path="userprofile" element={<UserProfile />} />
        <Route path="driverprofile" element={<DriverProfile/>} />
        <Route path="addlawyer" element={<AddLawyer/>} />
        <Route path="adduser" element={<AddUser/>} />
        <Route path="adddriver" element={<AddDriver/>} />
        <Route path="settings" element={<AdminSettings/>} />
        <Route path="notification" element={<NotificationPage/>} />
        <Route path="postnews" element={<PostNewsForm/>} />
        <Route path="bailbonddownload" element={<BailBondDownload/>} />
        <Route path="logistics" element={<DeliveryRequest/>} />
        <Route path="transaction" element={<Transactions/>} />
        <Route path="error" element={<ErrorPage/>} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;

