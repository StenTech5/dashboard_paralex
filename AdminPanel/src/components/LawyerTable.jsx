import React, { useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { HiArrowRight } from 'react-icons/hi';
import '../App.css';
import { Link } from 'react-router-dom';

const lawyersData = [
  {
    name: 'Elizabeth Lopez',
    date: '2025-04-18',
    email: 'elopez@yahoo.com',
    role: 'Lawyer',
    selected: true,
  },
  {
    name: 'Matthew Martinez',
    date: '2025-03-14',
    email: 'mmartinez1997@gmail.com',
    role: 'Lawyer',
    selected: true,
  },
  {
    name: 'Elizabeth Hall',
    date: '2025-02-20',
    email: 'elizabeth_hall_1998@gmail.com',
    role: 'Lawyer',
    selected: false,
  },
  {
    name: 'Maria White',
    date: '2025-02-12',
    email: 'maria_white@hotmail.com',
    role: 'Lawyer',
    selected: false,
  },
  {
    name: 'Elizabeth Watson',
    date: '2025-02-08',
    email: 'ewatson@yahoo.com',
    role: 'Lawyer',
    selected: false,
  },
  {
    name: 'Elizabeth Allen',
    date: '2025-01-19',
    email: 'eallen@gmail.com',
    role: 'Lawyer',
    selected: false,
  },
  {
    name: 'Caleb Jones',
    date: '2024-10-18',
    email: 'calebjones@gmail.com',
    role: 'Lawyer',
    selected: false,
  },
  {
    name: 'John Smith',
    date: '2024-09-10',
    email: 'jsmith@gmail.com',
    role: 'Lawyer',
    selected: false,
  },
  {
    name: 'Jane Doe',
    date: '2024-08-22',
    email: 'janedoe@gmail.com',
    role: 'Lawyer',
    selected: false,
  },
  {
    name: 'Peter Griffin',
    date: '2024-07-01',
    email: 'pgriffin@gmail.com',
    role: 'Lawyer',
    selected: false,
  },
];

const LawyerTable = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const filteredLawyers = lawyersData.filter(
    (lawyer) =>
      lawyer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lawyer.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredLawyers.length / itemsPerPage);
  const paginatedLawyers = filteredLawyers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="lawyer-wrapper">
      <div className="lawyer-header">
        <h2 className="lawyer-title">Lawyers</h2>
        <Link to="/addlawyer" ><button className="lawyer-add-btn">+ Add Lawyer</button></Link>
      </div>

      <div className="lawyer-search-box">
        <input
          type="text"
          placeholder="Search lawyers..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="lawyer-search-input"
        />
      </div>

      <div className="lawyer-table-container">
        <table className="lawyer-table">
          <thead>
            <tr className="lawyer-table-head-row">
              <th>
                <input type="checkbox" className="lawyer-checkbox" />
              </th>
              <th>Name</th>
              <th>Date</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {paginatedLawyers.map((lawyer, index) => (
              <tr key={index} className="lawyer-table-body-row">
                <td>
                  <input
                    type="checkbox"
                    className="lawyer-checkbox"
                    defaultChecked={lawyer.selected}
                  />
                </td>
                <td className="lawyer-name">{lawyer.name}</td>
                <td className="lawyer-name">{lawyer.date}</td>
                <td className="lawyer-email">{lawyer.email}</td>
                <td>
                  <span className="lawyer-role-badge">{lawyer.role}</span>
                </td>
                <td className="lawyer-edit">
                  <Link to="/lawyerprofile" className="lawyer-edit">
                    <FaEdit className="lawyer-edit-icon" /> Edit
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="lawyer-pagination">
        <button
          onClick={() => goToPage(currentPage - 1)}
          className="lawyer-btn-prev"
          disabled={currentPage === 1}
        >
          Prev
        </button>

        <button
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
