import React, { useState } from 'react';
import { FaPlus, FaCog, FaArrowRight, FaTimes, FaSpinner } from 'react-icons/fa';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../App.css';

const DeliveryRequest = () => {
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
          <span>Assign Delivery Request</span>
        </button>
      </div>

      <div className="dr-table-wrapper">
        <table className="dr-table">
          <thead>
            <tr>
              <th><input type="checkbox" className="dr-checkbox" /></th>
              <th className='d-th-text'>ID</th>
              <th className='d-th-text'>Delivery Address</th>
              <th className='d-th-text'>Current Stage</th>
              <th className='d-th-text'>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><input type="checkbox" className="dr-checkbox" /></td>
              <td>01</td>
              <td>Lekki - Ikeja, Lagos</td>
              <td>Pending</td>
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
            <h3 className="dr-modal-title">Assign Delivery Request</h3>
            <div className="dr-input-group">
              <label>Request ID</label>
              <input
                type="text"
                placeholder="Enter request ID"
                value={requestId}
                onChange={(e) => setRequestId(e.target.value)}
                className="dr-input"
              />
            </div>
            <div className="dr-input-group">
              <label>Rider ID</label>
              <input
                type="text"
                placeholder="Enter rider ID"
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
                    <span>Assign</span>
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

export default DeliveryRequest;
