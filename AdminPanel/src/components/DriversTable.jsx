import React, { useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { HiArrowRight } from 'react-icons/hi';
import '../App.css';
import { Link } from 'react-router-dom';

const driversData = [
  {
    name: 'Elizabeth Lopez',
    date: '2025-04-18',
    email: 'elopez@yahoo.com',
    role: 'Driver',
    selected: true,
  },
  {
    name: 'Matthew Martinez',
    date: '2025-03-14',
    email: 'mmartinez1997@gmail.com',
    role: 'Driver',
    selected: true,
  },
  {
    name: 'Elizabeth Hall',
    date: '2025-02-20',
    email: 'elizabeth_hall_1998@gmail.com',
    role: 'Driver',
    selected: false,
  },
  {
    name: 'Maria White',
    date: '2025-02-12',
    email: 'maria_white@hotmail.com',
    role: 'Driver',
    selected: false,
  },
  {
    name: 'Elizabeth Watson',
    date: '2025-02-08',
    email: 'ewatson@yahoo.com',
    role: 'Driver',
    selected: false,
  },
  {
    name: 'Elizabeth Allen',
    date: '2025-01-19',
    email: 'eallen@gmail.com',
    role: 'Driver',
    selected: false,
  },
  {
    name: 'Caleb Jones',
    date: '2024-10-18',
    email: 'calebjones@gmail.com',
    role: 'Driver',
    selected: false,
  },
  {
    name: 'John Smith',
    date: '2024-09-10',
    email: 'jsmith@gmail.com',
    role: 'Driver',
    selected: false,
  },
  {
    name: 'Jane Doe',
    date: '2024-08-22',
    email: 'janedoe@gmail.com',
    role: 'Driver',
    selected: false,
  },
  {
    name: 'Peter Griffin',
    date: '2024-07-01',
    email: 'pgriffin@gmail.com',
    role: 'Driver',
    selected: false,
  },
];

const DriversTable = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const filteredDrivers = driversData.filter(
    (driver) =>
      driver.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      driver.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredDrivers.length / itemsPerPage);
  const paginatedDrivers = filteredDrivers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="driver-wrapper">
      <div className="driver-header">
        <h2 className="driver-title">Drivers</h2>
        <Link to="/admin/add-driver"><button className="driver-add-btn">+ Add Driver</button></Link>
      </div>

      <div className="driver-search-box">
        <input
          type="text"
          placeholder="Search drivers..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="driver-search-input"
        />
      </div>

      <div className="driver-table-container">
        <table className="driver-table">
          <thead>
            <tr className="driver-table-head-row">
              <th>
                <input type="checkbox" className="driver-checkbox" />
              </th>
              <th>Name</th>
              <th>Date</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {paginatedDrivers.map((driver, index) => (
              <tr key={index} className="driver-table-body-row">
                <td>
                  <input
                    type="checkbox"
                    className="driver-checkbox"
                    defaultChecked={driver.selected}
                  />
                </td>
                <td className="driver-name">{driver.name}</td>
                <td className="driver-date">{driver.date}</td>
                <td className="driver-email">{driver.email}</td>
                <td>
                  <span className="driver-role-badge">{driver.role}</span>
                </td>
                <td className="driver-edit">
                  <Link to="/driverprofile">
                    <FaEdit className="driver-edit-icon" />Edit
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="driver-pagination">
        <button
          onClick={() => goToPage(currentPage - 1)}
          className="driver-btn-prev"
          disabled={currentPage === 1}
        >
          Prev
        </button>

        <button
          onClick={() => goToPage(currentPage + 1)}
          className="driver-btn-next"
          disabled={currentPage === totalPages}
        >
          Next <HiArrowRight className="driver-arrow-icon" />
        </button>
      </div>
    </div>
  );
};

export default DriversTable;
