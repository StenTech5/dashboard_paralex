import React, { useEffect, useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { HiArrowRight } from 'react-icons/hi';
import '../App.css';
import { Link } from 'react-router-dom';
import { adminGetLawyers } from '../api/api';
import { getDisplayName } from '../utils/userUtils';
import { dateTimeArrayToDate } from '../utils/getCurrentDateTime';
import { toast, ToastContainer } from 'react-toastify';
import Loader from './Loader';

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

  const [bgLoading, setBgLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const [lawyers, setLawyers] = useState([]);

  const filteredLawyers = lawyers.filter(
    (lawyer) =>
      lawyer?.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lawyer?.email?.toLowerCase().includes(searchTerm.toLowerCase())
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

  const fetchLawyers = async(page=currentPage, limit=itemsPerPage) => {
        try{
  
          const lawyersResponse = await adminGetLawyers(page, limit);
          console.log("Lawyers Response ", lawyersResponse);
          setLawyers(lawyersResponse.reverse());
  
        }  catch (error) {
          console.error("Error fetching recent lawyers ", error);
          const errorMessage = error.error || "Something went wrong in retrieving lawyers.";
          // alert(errorMessage);
          toast.error(errorMessage);
        } finally {
          setBgLoading(false);
        }
    }
    
    useEffect(() => {
      fetchLawyers();
    }, [])

  return (
    <div className="lawyer-wrapper">

      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />

      <div className="lawyer-header">
        <h2 className="lawyer-title">Lawyers</h2>
        <Link to="/admin/add-lawyer" ><button className="lawyer-add-btn">+ Add Lawyer</button></Link>
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

      { bgLoading? <Loader /> : null}

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
                <td className="lawyer-name">{getDisplayName(lawyer?.user)}</td>
                <td className="lawyer-name">{dateTimeArrayToDate(lawyer?.time)}</td>
                <td className="lawyer-email">{lawyer.user?.email}</td>
                <td>
                  <span className="lawyer-role-badge">{lawyer?.user?.userType}</span>
                </td>
                <td className="lawyer-edit">
                  <Link to={`/admin/lawyer/${lawyer.id}`} className="lawyer-edit">
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
