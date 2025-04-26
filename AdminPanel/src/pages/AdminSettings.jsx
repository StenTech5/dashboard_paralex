import React, { useState, useRef, useEffect } from 'react';
import '../App.css';
import { AiOutlineHome, AiOutlineDelete, AiOutlineClose, AiOutlineEdit } from 'react-icons/ai';
import { adminGetAllAdmins, adminGetNotifications } from '../api/api';
import { toast, ToastContainer } from 'react-toastify';
import { getDisplayName } from '../utils/userUtils';
import Spinner from '../components/Spinner';

const initialAdmins = [
  { id: '01', name: 'Zainab Sidiku', email: 'zainab.sidiku@paralexlogistics.com', avatar: null },
  { id: '02', name: 'Osagiede Maxwell', email: 'maxwell.o@paralexlogistics.com', avatar: null },
];

export default function AdminPage() {

  const [loading, setLoading] = useState(true);
  // const [admins, setAdmins] = useState(initialAdmins);
  const [admins, setAdmins] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState('add');
  const [currentAdmin, setCurrentAdmin] = useState({});
  const fileInputRef = useRef();

  const fetchAdmins = async () => {

    setLoading(true);
    try {
      const resp = await adminGetAllAdmins();
      console.log("Admins response", resp);
      setAdmins(resp);
      
    } catch (error) {
      console.error("Error from fetching admins", error);
      const errorMessage = error.error || "Failed to fetch admins";
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchAdmins();
  }, []);

  const openAddModal = () => {
    setModalMode('add');
    setCurrentAdmin({ name: '', email: '', password: '', avatar: null });
    setIsModalOpen(true);
  };
  const openEditModal = admin => {
    setModalMode('edit');
    setCurrentAdmin({ ...admin, password: '' });
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);
  const handleInputChange = e => {
    const { name, value } = e.target;
    setCurrentAdmin(prev => ({ ...prev, [name]: value }));
  };
  const handleAvatarChange = e => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setCurrentAdmin(prev => ({ ...prev, avatar: reader.result }));
      reader.readAsDataURL(file);
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (modalMode === 'add') {
      const newId = String(admins.length + 1).padStart(2, '0');
      setAdmins(prev => [...prev, { id: newId, name: currentAdmin.name, email: currentAdmin.email, avatar: currentAdmin.avatar }]);
    } else {
      setAdmins(prev => prev.map(a => a.id === currentAdmin.id ? { ...a, name: currentAdmin.name, email: currentAdmin.email, avatar: currentAdmin.avatar } : a));
    }
    closeModal();
  };
  const handleRemoveAdmin = id => setAdmins(prev => prev.filter(a => a.id !== id));

  return (
    <div className="ap-container">
      <ToastContainer position="top-right" autoClose={3000} />
      
      <header className="ap-header">
        <h1 className="ap-title">Admin Page</h1>
        <button className="ap-add-btn" onClick={openAddModal}>+ Add Admin</button>
      </header>

      <section className="ap-list">
        {/* Shared Spinner */}
        <Spinner loading={loading} height="200px" />
        
        {!loading && admins.map(admin => (
          <div key={admin.id} className="ap-card">
            <div className="ap-card-left">
              <div className="ap-card-id">{(admin.id).substr(0, 4)}...</div>
              <div className="ap-card-info">
                <div className="ap-card-name">{getDisplayName(admin)}</div>
                <div className="ap-card-email">{admin.email}</div>
              </div>
            </div>
            <div className="ap-role-badge">
              <AiOutlineHome size={18} /><span>Admin</span>
            </div>
            <div className="ap-actions">
              <button className="ap-action-btn" onClick={() => openEditModal(admin)}>
                <AiOutlineEdit size={18} /><span>Edit</span>
              </button>
              <button className="ap-action-btn" onClick={() => handleRemoveAdmin(admin.id)}>
                <AiOutlineDelete size={18} /><span>Remove</span>
              </button>
            </div>
          </div>
        ))}
        
      </section>

      {isModalOpen && (
        <div className="ap-modal-overlay">
          <div className="ap-modal">
            <button className="ap-close-btn" onClick={closeModal}><AiOutlineClose size={20} /></button>
            <h2 className="ap-modal-title">{modalMode === 'add' ? 'Add Admin' : 'Account Setting'}</h2>
            <form className="ap-form" onSubmit={handleSubmit}>
              <div className="ap-avatar-section">
                <div className="ap-avatar-circle">
                  {currentAdmin.avatar ? <img src={currentAdmin.avatar} alt="avatar" /> : <span>{currentAdmin.name?.charAt(0) || 'A'}</span>}
                </div>
                <button type="button" className="ap-upload-btn" onClick={() => fileInputRef.current.click()}>Upload Image</button>
                <input type="file" accept="image/*" ref={fileInputRef} onChange={handleAvatarChange} className="ap-hidden-input" />
              </div>
              <div className="ap-form-group"><label>Name</label><input type="text" name="name" value={currentAdmin.name} onChange={handleInputChange} required /></div>
              <div className="ap-form-group"><label>Email</label><input type="email" name="email" value={currentAdmin.email} onChange={handleInputChange} required /></div>
              <div className="ap-form-group"><label>Password</label><input type="password" name="password" value={currentAdmin.password} onChange={handleInputChange} /></div>
              <button type="submit" className="ap-submit-btn">{modalMode === 'add' ? 'Add Admin' : 'Save Changes'}</button>
            </form>
            {modalMode === 'edit' && <button className="ap-delete-account" onClick={() => { handleRemoveAdmin(currentAdmin.id); closeModal(); }}>Delete Account</button>}
          </div>
        </div>
      )}
    </div>
  );
}