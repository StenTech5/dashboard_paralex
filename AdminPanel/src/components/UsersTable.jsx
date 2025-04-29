import React, { useEffect, useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { HiArrowRight } from 'react-icons/hi';
import '../App.css';
import { Link } from 'react-router-dom';
import { adminGetUsers } from '../api/api';
import { dateTimeArrayToDate } from '../utils/getCurrentDateTime';
import { getDisplayName } from '../utils/userUtils';
import { toast, ToastContainer } from 'react-toastify';
import Spinner from './Spinner';            // ← import shared Spinner
import 'react-toastify/dist/ReactToastify.css';

const UsersTable = () => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const [users, setUsers] = useState([]);

  const filteredUsers = users.filter(
    user =>
      user?.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user?.email?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
  const paginatedUsers = filteredUsers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const goToPage = page => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const fetchUsers = async (page = currentPage, limit = itemsPerPage) => {
    setLoading(true);                     // ← start spinner
    try {
      const resp = await adminGetUsers(page, limit);
      console.log("Users ", resp);
      setUsers(resp.reverse());
    } catch (error) {
      console.error('Error fetching users', error);
      const msg = error.error || 'Failed to load users.';
      toast.error(msg, { toastId: 'fetchUsersError' });
    } finally {
      setLoading(false);                  // ← stop spinner
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  return (
    <div className="user-wrapper">
      <ToastContainer position="top-right" autoClose={3000} />

      <div className="user-header">
        <h2 className="user-title">Users</h2>
        {/* <Link to="/admin/add-user">
          <button className="user-add-btn">+ Add User</button>
        </Link> */}
      </div>

      <div className="user-search-box">
        <input
          type="text"
          placeholder="Search users..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="user-search-input"
        />
      </div>

      <div className="user-table-container">
        {/* Shared Spinner */}
        <Spinner loading={loading} height="200px" />

        {!loading && (
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
                    <Link to={`/admin/user/${user?.id}`}>
                      <FaEdit className="user-edit-icon" /> Edit
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
