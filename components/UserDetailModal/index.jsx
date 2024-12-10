import React from "react";

const UserDetailModal = ({ user, onClose }) => {
  if (!user) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg p-6 max-w-md w-full relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-3xl"
        >
          &times;
        </button>

        <div className="flex flex-col items-center">
          <img
            src={user.avatar}
            alt={`${user.first_name} ${user.last_name}`}
            className="w-32 h-32 rounded-full object-cover mb-4"
          />
          <h2 className="text-2xl font-bold">
            {user.first_name} {user.last_name}
          </h2>
          <p className="text-gray-600 mb-4">{user.email}</p>

          <div className="w-full bg-gray-100 rounded-lg p-4">
            <h3 className="text-xl font-semibold mb-2">User Details</h3>
            <div className="space-y-2">
              <DetailRow label="First Name" value={user.first_name} />
              <DetailRow label="Last Name" value={user.last_name} />
              <DetailRow label="Email" value={user.email} />

              {user.support && (
                <div className="mt-4 text-center text-sm text-gray-500">
                  <p>{user.support.text}</p>
                  <a
                    href={user.support.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Support Link
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const DetailRow = ({ label, value }) => (
  <div className="flex justify-between">
    <span className="font-medium text-gray-700">{label}:</span>
    <span>{value}</span>
  </div>
);

export default UserDetailModal;
