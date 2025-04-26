import React, { useEffect, useState } from "react";
import { FaArrowRight, FaUser } from "react-icons/fa";
import "../App.css";
import { adminGetNotifications } from "../api/api";
import { toast, ToastContainer } from "react-toastify";
import Spinner from "../components/Spinner";

const allNotifications = [
  {
    id: 1,
    name: "Jane Felicity",
    message: "New Lawyer registration \"Jane Felicity\" registered as lawyer",
    time: "26m ago",
    avatar: "https://randomuser.me/api/portraits/women/79.jpg",
    isNew: true,
  },
  {
    id: 2,
    name: "View Submission",
    message: "New Bail bond Entry \"View Submission\"",
    time: "40m ago",
    avatar: null,
    initial: "A",
    isNew: true,
  },
  {
    id: 3,
    name: "John adebayo",
    message: "New User registration \"John adebayo\" registered as User",
    time: "1 days ago",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    isNew: false,
  },
  {
    id: 4,
    name: "John adebayo",
    message: "New Lawyer registration \"John adebayo\" registered as lawyer",
    time: "26m ago",
    avatar: null,
    icon: <FaUser />,
    isNew: true,
  },
  {
    id: 5,
    name: "Samuel Bright",
    message: "New Bail bond Entry \"Samuel Bright\"",
    time: "2 days ago",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
    isNew: false,
  },
  {
    id: 6,
    name: "Blessing James",
    message: "New User registration \"Blessing James\" registered as User",
    time: "3 days ago",
    avatar: "https://randomuser.me/api/portraits/women/82.jpg",
    isNew: false,
  },
];

const NotificationPage = () => {
  const [visibleCount, setVisibleCount] = useState(4);
  const [loading, setLoading] = useState(true);
  const [notifications, setNotifications] = useState([]);   //Initial notifications state
  // const visibleNotifications = allNotifications.slice(0, visibleCount);
  const visibleNotifications = notifications.slice(0, visibleCount);

  const loadMore = () => {
    setVisibleCount((prev) => prev + 2);
  };

   const fetchAdminNotifications = async () => {
  
      setLoading(true);
      try {
        const resp = await adminGetNotifications();
        console.log("Admin notifications", resp);
        setNotifications(resp);
        
      } catch (error) {
        console.error("Error from fetching notifications ", error);
        const errorMessage = error.error || "Failed to fetch admin notifications";
        toast.error(errorMessage);
      } finally {
        setLoading(false);
      }
    }
  
    useEffect(() => {
      fetchAdminNotifications();
    }, []);
  

  return (
    <div className="notification-wrapper">
      <ToastContainer position="top-right" autoClose={3000} />

      <h2 className="notification-title">Notifications</h2>

      <div className="notification-list">
        {/* Shared Spinner */}
        <Spinner loading={loading} height="200px" />
                
        {!loading && visibleNotifications.map((n) => (
          <div key={n.id} className="notification-card">
            <div className="notification-avatar-wrapper">
              {n.avatar ? (
                <img src={n.avatar} alt="avatar" className="notification-avatar-img" />
              ) : n.initial ? (
                <span className="notification-initial">{n.initial}</span>
              ) : (
                <FaUser className="notification-icon" />
              )}
              {n.isNew && <span className="notification-status"></span>}
            </div>

            <div className="notification-message">
              <p className="notification-label">Notification</p>
              <p className="notification-text">
                {n.message.split(`"`).map((part, idx) =>
                  idx % 2 === 1 ? (
                    <span key={idx} className="notification-highlight">
                      {part}
                    </span>
                  ) : (
                    part
                  )
                )}
              </p>
              <p className="notification-time">{n.time}</p>
            </div>
          </div>
        ))}

      </div>

      <div className="notification-footer">
        <button onClick={loadMore} className="notification-button">
          Load More <FaArrowRight className="notification-button-icon" />
        </button>
      </div>
    </div>
  );
};

export default NotificationPage;
