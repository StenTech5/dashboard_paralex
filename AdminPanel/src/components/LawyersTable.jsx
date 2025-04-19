import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { MdCheckBox, MdCheckBoxOutlineBlank, MdIndeterminateCheckBox } from "react-icons/md";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";



const lawyersData = [
  { name: "Elizabeth Lopez", date: "2025-04-18", email: "elopez@yahoo.com", role: "Lawyer" },
  { name: "Matthew Martinez", date: "2025-03-14", email: "mmartinez1997@gmail.com", role: "Lawyer" },
  { name: "Elizabeth Hall", date: "2025-02-20", email: "elizabeth_hall_1998@gmail.com", role: "Lawyer" },
  { name: "Maria White", date: "2025-02-12", email: "maria_white@hotmail.com", role: "Lawyer" },
  { name: "Elizabeth Watson", date: "2025-02-08", email: "ewatson@yahoo.com", role: "Lawyer" },
  { name: "Elizabeth Allen", date: "2025-01-19", email: "eallen@gmail.com", role: "Lawyer" },
  { name: "Caleb Jones", date: "2024-10-18", email: "calebjones@gmail.com", role: "Lawyer" },
];

const ITEMS_PER_PAGE = 5;

export default function LawyersTable() {
  const [selected, setSelected] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const filteredData = lawyersData.filter(
    (lawyer) =>
      lawyer.name.toLowerCase().includes(search.toLowerCase()) ||
      lawyer.email.toLowerCase().includes(search.toLowerCase())
  );

  const paginatedData = filteredData.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);

  const handleSelect = (email) => {
    setSelected((prevSelected) =>
      prevSelected.includes(email)
        ? prevSelected.filter((e) => e !== email)
        : [...prevSelected, email]
    );
  };

  const handleSelectAll = () => {
    const visibleEmails = paginatedData.map((lawyer) => lawyer.email);
    if (visibleEmails.every((email) => selected.includes(email))) {
      setSelected(selected.filter((email) => !visibleEmails.includes(email)));
    } else {
      setSelected([...new Set([...selected, ...visibleEmails])]);
    }
  };

  const isAllSelected = paginatedData.every((lawyer) => selected.includes(lawyer.email));
  const isIndeterminate = selected.some((email) => paginatedData.map((l) => l.email).includes(email)) && !isAllSelected;

  return (
    <div className="p-8 bg-white min-h-screen text-gray-900 font-sans max-w-6xl mx-auto rounded-2xl shadow-md">
      <h2 className="text-xl font-bold text-[#111827] mb-4">All Lawyers</h2>

      <div className="mb-5 relative w-full max-w-sm">
        <FiSearch className="absolute top-3.5 left-4 text-gray-400 text-lg" />
        <input
          placeholder="Search lawyers"
          className="w-full pl-11 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none text-sm"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
      </div>

      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="w-full text-sm table-fixed">
          <thead className="bg-gray-50 text-gray-600">
            <tr>
              <th className="w-10 p-3 cursor-pointer text-left" onClick={handleSelectAll}>
                {isAllSelected ? (
                  <MdCheckBox className="text-indigo-600 text-xl" />
                ) : isIndeterminate ? (
                  <MdIndeterminateCheckBox className="text-indigo-600 text-xl" />
                ) : (
                  <MdCheckBoxOutlineBlank className="text-indigo-600 text-xl" />
                )}
              </th>
              <th className="w-1/5 p-3 font-medium text-left">Name</th>
              <th className="w-1/5 p-3 font-medium text-left">Date</th>
              <th className="w-1/4 p-3 font-medium text-left">Email</th>
              <th className="w-1/6 p-3 font-medium text-left">Role</th>
              <th className="w-1/12 p-3 font-medium text-center">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {paginatedData.map((lawyer) => (
              <tr key={lawyer.email} className="hover:bg-gray-50 transition">
                <td className="p-3 cursor-pointer" onClick={() => handleSelect(lawyer.email)}>
                  {selected.includes(lawyer.email) ? (
                    <MdCheckBox className="text-indigo-600 text-xl" />
                  ) : (
                    <MdCheckBoxOutlineBlank className="text-indigo-600 text-xl" />
                  )}
                </td>
                <td className="p-3 font-medium text-gray-800">{lawyer.name}</td>
                <td className="p-3 text-gray-600">{lawyer.date}</td>
                <td className="p-3 text-indigo-500">{lawyer.email}</td>
                <td className="p-3">
                  <span className="bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-full text-xs font-medium">
                    {lawyer.role}
                  </span>
                </td>
                <td className="p-3 text-center">
                  <button className="w-8 h-8 rounded-full bg-gray-100 hover:bg-indigo-100 text-indigo-600 flex items-center justify-center">
                    <FaEdit className="text-sm" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center mt-6 text-sm text-gray-600">
        <span>
          Page {page} of {totalPages}
        </span>
        <div className="flex gap-2">
          <button
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            disabled={page === 1}
            className="flex items-center gap-1 px-3 py-1.5 bg-indigo-600 text-white rounded-md disabled:opacity-30"
          >
            <HiChevronLeft className="text-lg" /> Prev
          </button>
          <button
            onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={page === totalPages}
            className="flex items-center gap-1 px-3 py-1.5 bg-indigo-600 text-white rounded-md disabled:opacity-30"
          >
            Next <HiChevronRight className="text-lg" />
          </button>
        </div>
      </div>
    </div>
  );
}
