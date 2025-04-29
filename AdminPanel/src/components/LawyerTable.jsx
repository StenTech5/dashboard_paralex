import React, { useEffect, useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { HiArrowRight } from 'react-icons/hi';
import '../App.css';
import { Link } from 'react-router-dom';
import { adminGetLawyers } from '../api/api';
import { getDisplayName } from '../utils/userUtils';
import { dateTimeArrayToDate } from '../utils/getCurrentDateTime';
import { toast, ToastContainer } from 'react-toastify';
import Spinner from './Spinner';  
import 'react-toastify/dist/ReactToastify.css';

const LawyerTable = () => {
  const [bgLoading, setBgLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const [lawyers, setLawyers] = useState([]);

  const filteredLawyers = lawyers.filter(
    lawyer =>
      lawyer?.user?.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lawyer?.user?.email?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredLawyers.length / itemsPerPage);
  const paginatedLawyers = filteredLawyers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const goToPage = page => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const fetchLawyers = async (page = currentPage, limit = itemsPerPage) => {
    setBgLoading(true);
    try {
      const resp = await adminGetLawyers(page, limit);
      console.log("Lawyers ", resp);
      const data = resp.data;
      setLawyers(data);
    } catch (error) {
      const msg = error.error || 'Something went wrong retrieving lawyers.';
      toast.error(msg, { toastId: 'fetchLawyersError' });
    } finally {
      setBgLoading(false);
    }
  };

  useEffect(() => {
    fetchLawyers();
  }, [currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  return (
    <div className="lawyer-wrapper">
      <ToastContainer position="top-right" autoClose={3000} />

      <div className="lawyer-header">
        <h2 className="lawyer-title">Lawyers</h2>
        <Link to="/admin/add-lawyer">
          <button className="lawyer-add-btn">+ Add Lawyer</button>
        </Link>
      </div>

      <div className="lawyer-search-box">
        <input
          type="text"
          placeholder="Search lawyers..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="lawyer-search-input"
        />
      </div>

      <div className="lawyer-table-container">
        {/* Shared Spinner component */}
        <Spinner loading={bgLoading} height="200px" />

        {!bgLoading && (
          <table className="lawyer-table">
            <thead>
              <tr className="lawyer-table-head-row">
                <th><input type="checkbox" className="lawyer-checkbox" /></th>
                <th>Name</th>
                <th>Date</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {paginatedLawyers.map((lawyer, idx) => (
                <tr key={lawyer.id || idx} className="lawyer-table-body-row">
                  <td>
                    <input
                      type="checkbox"
                      className="lawyer-checkbox"
                      defaultChecked={lawyer.selected}
                    />
                  </td>
                  <td className="lawyer-name">{getDisplayName(lawyer?.user)}</td>
                  <td className="lawyer-name">{dateTimeArrayToDate(lawyer?.time)}</td>
                  <td className="lawyer-email">{lawyer.user?.email}</td>
                  <td><span className="lawyer-role-badge">{lawyer?.user?.userType}</span></td>
                  <td className="lawyer-edit">
                    <Link to={`/admin/lawyer/${lawyer?.user?.id}`} className="lawyer-edit">
                      <FaEdit className="lawyer-edit-icon" /> Edit
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <div className="lawyer-pagination">
        <button
          type="button"
          onClick={() => goToPage(currentPage - 1)}
          className="lawyer-btn-prev"
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <button
          type="button"
          onClick={() => goToPage(currentPage + 1)}
          className="lawyer-btn-next"
          disabled={currentPage === totalPages}
        >
          Next <HiArrowRight className="lawyer-arrow-icon" />
        </button>
      </div>
    </div>
  );
};

export default LawyerTable;
