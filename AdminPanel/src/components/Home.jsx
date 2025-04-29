import "../App.css";
import { PiUsersThreeFill } from "react-icons/pi";
import { GiClawHammer } from "react-icons/gi";
import { IoMdNotifications } from "react-icons/io";
import { BiSolidBusSchool } from "react-icons/bi";
import { Link } from "react-router-dom";
import NewUsersTable from "./NewUsersTable";
import { FaGavel } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { adminGetBailBonds, adminGetLawyers, adminGetUsers } from "../api/api";



const Home = () => {
  const [statsCount, setStatsCount] = useState({
    users: 0,
    lawyers: 0,
    drivers: 0,
    bailbonds: 0,
  });

  const statData = [
    {
      title: "Users",
      count: statsCount.users,
      icon: <PiUsersThreeFill />,
      class: "bg-users",
      route: "/admin/users",
    },
    {
      title: "Lawyers",
      count: statsCount.lawyers,
      icon: <FaGavel />,
      class: "bg-lawyers",
      route: "/admin/lawyers",
    },
    {
      title: "Bail Bond",
      count: statsCount.bailbonds,
      icon: <IoMdNotifications />,
      class: "bg-bailbond",
      route: "/admin/bailbond",
    },
    {
      title: "Drivers",
      count: statsCount.drivers,
      icon: <BiSolidBusSchool />,
      class: "bg-drivers",
      route: "/admin/drivers",
    },
  ];

  const fetchStats = async () => {
    try {
      const [usersResp, lawyersResp, bailBondsResp] = await Promise.all([
        adminGetUsers(),
        adminGetLawyers(),
        adminGetBailBonds(),
      ]);

      // console.log("Users resp ", usersResp);
      // console.log("Lawyers resp ", lawyersResp);
      // console.log("Bail bonds resp ", bailBondsResp);

      setStatsCount({
        users: usersResp.length,
        lawyers: lawyersResp?.data.length,
        bailbonds: bailBondsResp.length,
        drivers: 8
      })
    } catch (error) {
      console.error("Error fetching dashboard stats", error);
      const msg = error.error || "Failed to load fetch dashboard stats.";
      toast.error(msg, { toastId: "fetchStatsError" });
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Dashboard</h1>

      <div className="card-grid">
        {statData.map((stat, idx) => (
          <div key={idx} className={`stat-card ${stat.class}`}>
            <div className="stat-card-header">
              <div>
                <p className="stat-title">{stat.title}</p>
                <h2 className="stat-count">{stat.count}</h2>
              </div>
              <div className="stat-icon">{stat.icon}</div>
            </div>
            <Link to={stat.route} className="stat-view">
              View <span className="stat-view-arrow">▼</span>
            </Link>
          </div>
        ))}
      </div>

      {/* new users */}
      <div>
        <ToastContainer position="top-right" autoClose={3000} />

        <NewUsersTable />
      </div>
    </div>
  );
};

export default Home;
