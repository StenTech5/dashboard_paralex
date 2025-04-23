import { createBrowserRouter, Outlet } from "react-router-dom";
import AdminProtectedRoute from "./layouts/AdminProtectedRoute";
import SignIn from "./auth/SiginIn";
import DashboardLayout from "./layouts/DashboardLayout";
import Dashboard from './pages/Dashboard';
import Lawyers from './pages/Lawyers';      
import Bailbond from './pages/Bailbond';
import Users from './pages/Users';
import Drivers from './pages/Drivers';
import LawyerProfile from './pages/LawyerProfile';
import UserProfile from './pages/UserProfile';
import AddLawyer from './pages/AddLawyer';
import AddUser from './pages/AddUser';
import DriverProfile from './pages/DriverProfile';
import AddDriver from './pages/AddDriver';
import ErrorPage from "./pages/ErrorPage";
import NotificationPage from "./pages/Notifications";
import DeliveryRequest from "./pages/DeliveryRequest";
import Transactions from "./pages/Transactions";
import BailBondDownload from "./pages/BailBondDownload";
import PostNewsForm from "./pages/PostNewsForm";

export const router = createBrowserRouter([
  // Route definition
  {
    path: "/", //Admin Login route
    element: <SignIn />,
  },
  {
    path: "/admin/login",
    element: <SignIn />,
  },
//   {
//     path: "/admin/forgot-password",
//     element: <AdminForgotPassword />
//   },
//   {
//     path: "/admin/reset-password",
//     element: <AdminResetPassword />
//   },
  {
    path: "/admin", //Every Admin related route is prefixed with '/admin'
    element: (
      <AdminProtectedRoute>
        <DashboardLayout />
        </AdminProtectedRoute>
    ),
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "settings",
        // element: <AdminSettings />,
        element: <h1> Admin Settings</h1>,
      },
      {
        path: "bailbond",
        element: <Bailbond />,
      },
      {
        path: "lawyers",
        element: <Lawyers />,
      },
      {
        path: "add-lawyer",
        element: <AddLawyer />,
      },
      {
        path: "lawyer/:lawyerId", // Lawyer details page
        element: <LawyerProfile />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "add-user",
        element: <AddUser />,
      },
      {
        path: "user/:userId", // User details page
        element: <UserProfile />,
      },
      {
        path: "drivers",
        element: <Drivers />,
      },
      {
        path: "add-driver",
        element: <AddDriver />,
      },
      {
        path: "driver/:driverId", // Lawyer details page
        element: <DriverProfile />,
      },
      {
        path: "notifications",
        element: <NotificationPage />,
      },
      {
        path: "logistics",
        element: <DeliveryRequest />,
      },
      {
        path: "transaction",
        element: <Transactions />,
      },
      {
        path: "bailbonddownload",
        element: <BailBondDownload />
      },
      {
        path: "post-news",
        element: <PostNewsForm />
      }
    
    ],
  },
  {
    path: "*",
    element: <ErrorPage />
  }

]);
