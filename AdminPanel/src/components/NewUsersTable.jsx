import React, { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import "../App.css";
import { Link } from "react-router-dom";
import { adminGetUsers } from "../api/api";
import { dateTimeArrayToDate} from "../utils/getCurrentDateTime";
import { getDisplayName } from "../utils/userUtils";

// const usersData = [
//   { name: "Elizabeth Lopez", date: "2025-04-18", email: "elopez@yahoo.com", role: "User", selected: true },
//   { name: "Matthew Martinez", date: "2025-03-14", email: "mmartinez1997@gmail.com", role: "Lawyer", selected: true },
//   { name: "Elizabeth Hall", date: "2025-02-20", email: "elizabeth_hall_1998@gmail.com", role: "Driver", selected: false },
//   { name: "Maria White", date: "2025-02-12", email: "maria_white@hotmail.com", role: "User", selected: false },
//   { name: "Elizabeth Watson", date: "2025-02-08", email: "ewatson@yahoo.com", role: "Lawyer", selected: false },
//   { name: "Elizabeth Allen", date: "2025-01-19", email: "eallen@gmail.com", role: "Driver", selected: false },
//   { name: "Caleb Jones", date: "2024-10-18", email: "calebjones@gmail.com", role: "User", selected: false },
//   { name: "John Smith", date: "2024-09-10", email: "jsmith@gmail.com", role: "Lawyer", selected: false },
//   { name: "Jane Doe", date: "2024-08-22", email: "janedoe@gmail.com", role: "Driver", selected: false },
//   { name: "Peter Griffin", date: "2024-07-01", email: "pgriffin@gmail.com", role: "User", selected: false }
// ];

const UsersTable = () => {

  const [bgLoading, setBgLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const [users, setUsers] = useState([]);

  const totalPages = Math.ceil(users.length / itemsPerPage);
  const paginatedUsers = users.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const fetchUsers = async(page=currentPage, limit=itemsPerPage) => {
      try{

        const usersResponse = await adminGetUsers(page, limit);
        console.log("Users Response ", usersResponse);
        setUsers(usersResponse.reverse());

      }  catch (error) {
        console.error("Error fetching recent users ", error);
        const errorMessage = error.error || "Something went wrong in retrieving new users.";
        alert(errorMessage);
      } finally {
        setBgLoading(false);
      }
  }
  
  useEffect(() => {
    fetchUsers();
  }, [])

  return (
    <div className="user-wrapper">
      <div className="user-header">
        <h2 className="user-title">New Users</h2>
      </div>

      <div className="user-table-container">
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
            {/* {bgLoading ? <tr> <th>Loading ...</th></tr> : null} */}
            {paginatedUsers.map((user, index) => (
              <tr key={index} className="user-table-body-row">
                <td><input type="checkbox" className="user-checkbox" defaultChecked={user?.selected} /></td>
                <td className="user-name"> { getDisplayName(user)}  </td>
                <td className="user-date">{dateTimeArrayToDate(user?.time)}</td>
                <td className="user-email">{user.email}</td>
                <td><span className="user-role-badge">{user.userType}</span></td>
                <td className="user-edit"> <Link to={`/admin/user/${user.id}`}>
                  <FaEdit className="user-edit-icon" />
                </Link> Edit</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="user-pagination">
        <button
          onClick={() => goToPage(currentPage - 1)}
          className="user-btn-prev"
          disabled={currentPage === 1}
        >
          Prev
        </button>

        <button
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
