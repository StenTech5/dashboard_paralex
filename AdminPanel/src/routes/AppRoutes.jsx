// src/routes/AppRoutes.jsx
import { Routes, Route } from 'react-router-dom';
import DashboardLayout from '../layouts/DashboardLayout';
import Dashboard from '../pages/Dashboard';  // Dashboard page (will use Home inside)
import Lawyers from '../pages/Lawyers';      // Lawyers page

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />      {/* Default route -> Dashboard */}
        <Route path="lawyers" element={<Lawyers />} /> {/* Lawyers page */}
      </Route>
    </Routes>
  );
};

export default AppRoutes;
