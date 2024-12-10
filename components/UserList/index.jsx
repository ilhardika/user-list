import React, { useState, useEffect } from "react";
import axios from "axios";
import UserCard from "@/UserCard";
import UserPagination from "@/UserPagination";
import UserDetailModal from "@/UserDetailModal";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://reqres.in/api/users?page=${currentPage}`
        );
        setUsers(response.data.data);
        setTotalPages(response.data.total_pages);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching users:", error);
        setLoading(false);
      }
    };

    fetchUsers();
  }, [currentPage]);

  const handleUserSelect = async (user) => {
    try {
      const response = await axios.get(
        `https://reqres.in/api/users/${user.id}`
      );
      setSelectedUser({ ...user, ...response.data.data });
    } catch (error) {
      console.error("Error fetching user details:", error);
      setSelectedUser(user);
    }
  };

  const closeModal = () => {
    setSelectedUser(null);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">User Lists</h1>

      <UserCard users={users} onUserSelect={handleUserSelect} />

      <UserPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />

      <UserDetailModal user={selectedUser} onClose={closeModal} />
    </div>
  );
};

export default UserList;
