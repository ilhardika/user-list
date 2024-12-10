import React from "react";

const UserCard = ({ users, onUserSelect }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {users.map((user) => (
        <div
          key={user.id}
          className="
            bg-white 
            shadow-md 
            rounded-lg 
            p-4 
            cursor-pointer 
            hover:shadow-lg 
            transition-shadow
            flex 
            items-center
            space-x-4
          "
          onClick={() => onUserSelect(user)}
        >
          <img
            src={user.avatar}
            alt={`${user.first_name} ${user.last_name}`}
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <h2 className="text-xl font-semibold">
              {user.first_name} {user.last_name}
            </h2>
            <p className="text-gray-500">{user.email}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserCard;
