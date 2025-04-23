import React, { useState } from 'react';
import { FaPlus, FaCog, FaArrowRight, FaTimes, FaSpinner } from 'react-icons/fa';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../App.css';

const Transactions = () => {
  const [showModal, setShowModal] = useState(false);
  const [requestId, setRequestId] = useState('');
  const [riderId, setRiderId] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAssign = (e) => {
    e.preventDefault();
    if (!requestId.trim() || !riderId.trim()) {
      toast.error('Both Request ID and Rider ID are required');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      toast.success(`Delivery Request Assigned: ${requestId} to Rider ${riderId}`);
      setShowModal(false);
      setRequestId('');
      setRiderId('');
      setLoading(false);
    }, 1500);
  };

  const handleCancel = () => {
    setShowModal(false);
    setRequestId('');
    setRiderId('');
  };

  return (
    <div className="dr-wrapper">
      <div className="dr-header">
        <h2 className="dr-title">Delivery Request</h2>
        <button
          onClick={() => setShowModal(true)}
          className="dr-assign-btn"
        >
          <FaPlus className="dr-icon-xs" />
          <span>Add New Transactions</span>
        </button>
      </div>

      <div className="dr-table-wrapper">
        <table className="dr-table">
          <thead>
            <tr>
              <th><input type="checkbox" className="dr-checkbox" /></th>
              <th className='d-th-text'>ID</th>
              <th className='d-th-text'>Name</th>
              <th className='d-th-text'>Descriptions</th>
              <th className='d-th-text'>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><input type="checkbox" className="dr-checkbox" /></td>
              <td>01</td>
              <td>Bail bond Payment</td>
              <td>Request for Bail bond Payment</td>
              <td>
                <button className="dr-track-btn">
                  <FaCog className="dr-icon-xs" />
                  <span>Track</span>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {showModal && (
        <div className="dr-modal-overlay">
          <form onSubmit={handleAssign} className="dr-modal-form">
            <h3 className="dr-modal-title">Creat Transaction</h3>
            <div className="dr-input-group">
              <label>Transaction Name</label>
              <input
                type="text"
                placeholder="Enter transaction name"
                value={requestId}
                onChange={(e) => setRequestId(e.target.value)}
                className="dr-input"
              />
            </div>
            <div className="dr-input-group">
              <label>Description</label>
              <input
                type="text"
                placeholder="Enter description"
                value={riderId}
                onChange={(e) => setRiderId(e.target.value)}
                className="dr-input"
              />
            </div>
            <div className="dr-modal-actions">
              <button type="button" onClick={handleCancel} className="dr-cancel-btn">
                <FaTimes className="dr-icon-xs" /> <span>Cancel</span>
              </button>
              <button
                type="submit"
                disabled={loading}
                className={`dr-submit-btn ${loading ? 'dr-disabled' : ''}`}
              >
                {loading ? (
                  <>
                    <FaSpinner className="dr-icon-xs dr-spinner" />
                    <span>Assigning...</span>
                  </>
                ) : (
                  <>
                    <span>Submit</span>
                    <FaArrowRight className="dr-icon-xs" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Transactions;
