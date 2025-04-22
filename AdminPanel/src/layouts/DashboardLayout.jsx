import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import "../App.css";

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="layout-container">
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />

      {/* Mobile backdrop */}
      {sidebarOpen && (
        <div
          className="sidebar-backdrop"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div className="layout-main">
        <Header toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
        <div className="layout-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;