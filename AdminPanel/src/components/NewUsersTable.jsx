import React, { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import "../App.css";
import { Link } from "react-router-dom";
import { adminGetUsers } from "../api/api";
import { dateTimeArrayToDate } from "../utils/getCurrentDateTime";
import { getDisplayName } from "../utils/userUtils";
import Spinner from "./Spinner";           // ← import shared Spinner
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UsersTable = () => {
  const [bgLoading, setBgLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const [users, setUsers] = useState([]);

  const totalPages = Math.ceil(users.length / itemsPerPage);
  const paginatedUsers = users.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const fetchUsers = async (page = currentPage, limit = itemsPerPage) => {
    setBgLoading(true);
    try {
      const usersResponse = await adminGetUsers(page, limit);
      setUsers(usersResponse.reverse());
    } catch (error) {
      console.error("Error fetching recent users", error);
      const errorMessage = error.error || "Something went wrong retrieving users.";
      toast.error(errorMessage, { toastId: "fetchUsersError" });
    } finally {
      setBgLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [currentPage]);

  return (
    <div className="user-wrapper">
      <ToastContainer position="top-right" autoClose={3000} />

      <div className="user-header">
        <h2 className="user-title">New Users</h2>
      </div>

      <div className="user-table-container">
        {/* Spinner shows while loading */}
        <Spinner loading={bgLoading} height="200px" />

        {/* Table only renders once loading is false */}
        {!bgLoading && (
          <table className="user-table">
            <thead>
              <tr className="user-table-head-row">
                <th><input type="checkbox" className="user-checkbox" /></th>
                <th>Name</th>
                <th>Date</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {paginatedUsers.map((user, idx) => (
                <tr key={user.id || idx} className="user-table-body-row">
                  <td>
                    <input
                      type="checkbox"
                      className="user-checkbox"
                      defaultChecked={user.selected}
                    />
                  </td>
                  <td className="user-name">{getDisplayName(user)}</td>
                  <td className="user-date">{dateTimeArrayToDate(user?.time)}</td>
                  <td className="user-email">{user.email}</td>
                  <td><span className="user-role-badge">{user.userType}</span></td>
                  <td className="user-edit">
                    <Link to={`/admin/user/${user.id}`}>
                      <FaEdit className="user-edit-icon" />
                      Edit
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <div className="user-pagination">
        <button
          type="button"
          onClick={() => goToPage(currentPage - 1)}
          className="user-btn-prev"
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <button
          type="button"
          onClick={() => goToPage(currentPage + 1)}
          className="user-btn-next"
          disabled={currentPage === totalPages}
        >
          Next <HiArrowRight className="user-arrow-icon" />
        </button>
      </div>
    </div>
  );
};

export default UsersTable;
