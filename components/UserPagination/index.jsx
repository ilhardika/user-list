import React from "react";

const UserPagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex justify-center mt-6 space-x-2">
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          onClick={() => onPageChange(index + 1)}
          className={`
            px-4 py-2 
            rounded 
            ${
              currentPage === index + 1
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }
          `}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default UserPagination;
