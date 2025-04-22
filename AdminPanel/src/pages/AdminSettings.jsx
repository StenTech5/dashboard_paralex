import React, { useState } from "react";
import { FaTrashAlt, FaHome } from "react-icons/fa";
import { Toaster, toast } from "react-hot-toast";
import "../App.css";

const AdminSettings = () => {
  const [admins, setAdmins] = useState([
    {
      name: "Zainab Sidiku",
      email: "zainab.sidiku@paralexlogistics.com",
      id: "01",
    },
    {
      name: "Osagiede Maxwell",
      email: "maxwell.o@paralexlogistics.com",
      id: "02",
    },
  ]);

  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleRemove = (id) => {
    setAdmins((prev) => prev.filter((admin) => admin.id !== id));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) return;

    const nextId = (admins.length + 1).toString().padStart(2, "0");
    const newAdmin = {
      id: nextId,
      name: formData.name.trim(),
      email: formData.email.trim(),
    };

    setAdmins((prev) => [...prev, newAdmin]);
    setFormData({ name: "", email: "" });
    toast.success("Admin added successfully!");
  };

  return (
    <div className="adminpage-wrapper">
      <h2 className="adminpage-title">Admin Page</h2>

      <div className="adminpage-list">
        {admins.map((admin) => (
          <div key={admin.id} className="adminpage-card fixed-card-layout">
            <div className="adminpage-info">
              <div className="adminpage-id">{admin.id}</div>
              <div>
                <p className="adminpage-name">{admin.name}</p>
                <p className="adminpage-email">{admin.email}</p>
              </div>
            </div>

            <div className="adminpage-role">
              <FaHome className="adminpage-role-icon" /> <span>Admin</span>
            </div>

            <div className="adminpage-remove">
              <button className="adminpage-remove-btn" onClick={() => handleRemove(admin.id)}>
                <FaTrashAlt className="adminpage-remove-icon" /> Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <hr className="adminpage-separator" />

      <div className="adminpage-form-wrapper">
        <h3 className="adminpage-form-title">Add Admin</h3>
        <form className="adminpage-form" onSubmit={handleSubmit} style={{ maxWidth: "384px", display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div>
            <label className="adminpage-label">Full name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="enter full name"
              className="adminpage-input"
            />
          </div>
          <div>
            <label className="adminpage-label">Official email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email address"
              className="adminpage-input"
            />
          </div>
          <button className="adminpage-submit full-width-btn" type="submit">
            + Add admin
          </button>
        </form>
      </div>

      <Toaster position="top-right" toastOptions={{ duration: 3000 }} />
    </div>
  );
};

export default AdminSettings;
