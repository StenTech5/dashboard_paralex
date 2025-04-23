import React, { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";

const initialData = [
  { id: "001", name: "John Doe", date: "2023-09-15", amount: "₦5,000", status: "Pending" },
  { id: "002", name: "Jane Smith", date: "2023-09-16", amount: "₦3,000", status: "Pending" },
  { id: "003", name: "Michael Johnson", date: "2023-09-17", amount: "₦2,500", status: "Rejected" },
  { id: "004", name: "Emily Brown", date: "2023-09-18", amount: "₦4,000", status: "Pending" },
  { id: "005", name: "David Wilson", date: "2023-09-19", amount: "₦8,000", status: "Approved" },
  { id: "006", name: "Sarah White", date: "2023-09-20", amount: "₦500", status: "Rejected" },
];

const BailBondTable = () => {
  const [data, setData] = useState(initialData);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const handleStatusChange = (id, value) => {
    setData(prev =>
      prev.map(item =>
        item.id === id ? { ...item, status: value } : item
      )
    );
  };

  const filteredData = data.filter(row =>
    row.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    row.id.includes(searchTerm)
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = filteredData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="bailbond-container">
      <h2 className="bailbond-title">Bail bond</h2>
      <div className="bailbond-search">
        <input
          type="text"
          placeholder="Search by ID or Name"
          className="bailbond-search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="bailbond-table-wrapper">
        <table className="bailbond-table">
          <thead>
            <tr>
              <th>Submission ID</th>
              <th>Submitter</th>
              <th>Submission Date</th>
              <th>Bond Amount</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((row, index) => (
              <tr key={index}>
                <td className="bail-id">{row.id}</td>
                <td className="bail-name">{row.name}</td>
                <td className="bail-date">{row.date}</td>
                <td className="bail-amount">{row.amount}</td>
                <td>
                  <select
                    className="bailbond-status"
                    value={row.status}
                    onChange={(e) => handleStatusChange(row.id, e.target.value)}
                  >
                    <option>Pending</option>
                    <option>Approved</option>
                    <option>Rejected</option>
                  </select>
                </td>
                <td>
                  <Link to="/bailbonddownload"><button className="bailbond-view">View</button></Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="bailbond-pagination">
          <span className="bailbond-page-info">
            Page {currentPage} of {totalPages}
          </span>
          <div className="bailbond-pagination-buttons">
            <button
              className="bailbond-btn"
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
            >
              Prev
            </button>
            <button
              className="bailbond-btn primary"
              disabled={currentPage >= totalPages}
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            >
              Next ➝
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BailBondTable;
