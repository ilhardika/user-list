import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 6;

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // Get total pages
        const resInit = await axios.get("https://reqres.in/api/users");
        const totalPages = resInit.data.total_pages;

        // Get all users
        const allUsers = [];
        for (let i = 1; i <= totalPages; i++) {
          const res = await axios.get(`https://reqres.in/api/users?page=${i}`);
          allUsers.push(...res.data.data);
        }

        // Set users state
        setUsers(allUsers);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  // Filter users based on search term
  const filteredUsers = users.filter((user) =>
    `${user.first_name} ${user.last_name}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="bg-gray-900 pb-10">
      <Navbar />
      <h1 className="text-center px-10 my-10 font-bold text-4xl text-white">
        User List
      </h1>

      {/* Search Input */}
      <div className="flex justify-center mb-5">
        <input
          type="text"
          placeholder="Search by name..."
          className="p-2 rounded-lg border border-gray-600 bg-gray-800 text-white"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* User List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10 mx-10">
        {currentUsers.map((user, index) => (
          <div
            key={index}
            className="p-6 border border-gray-700 rounded-lg shadow-lg flex flex-col items-center gap-4 bg-gray-800 transition-transform transform hover:scale-105"
          >
            <img
              src={user.avatar}
              alt={`${user.first_name} ${user.last_name}`}
              className="h-28 w-28 rounded-full object-cover border-4 border-blue-500"
            />
            <h2 className="text-xl font-semibold text-white">
              {user.first_name} {user.last_name}
            </h2>
            <Link to={`/${user.id}`}>
              <button
                className="py-2 px-6 rounded-lg text-sm"
                style={{
                  backgroundColor: "#3B82F6", // Custom blue
                  color: "white",
                  transition: "background-color 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#2563EB")
                } // Darker blue on hover
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "#3B82F6")
                } // Reset to original
              >
                See Details
              </button>
            </Link>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center gap-10 my-5">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded ${
            currentPage === 1
              ? "bg-gray-600 text-gray-400 cursor-not-allowed"
              : "bg-blue-600 text-white hover:bg-blue-700 transition duration-200"
          }`}
        >
          Previous
        </button>
        <span className="text-white text-lg">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded ${
            currentPage === totalPages
              ? "bg-gray-600 text-gray-400 cursor-not-allowed"
              : "bg-blue-600 text-white hover:bg-blue-700 transition duration-200"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default UserList;
