import React, { useState, useEffect } from "react";
import axios from "axios";

function UserList() {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const res = await axios.get("https://reqres.in/api/users?page=2");
      setUsers(res.data.data);
    } catch (err) {
      console.error("err", err);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <h1 className="text-center text-4xl font-bold">Daftar User</h1>
      <ul className="flex flex-row justify-center p-10 gap-10 flex-wrap">
        {users.map((user) => (
          <div
            key={user.id}
            class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <a href="#">
              <img
                class="rounded-t-lg size-[300px] object-cover rounded-full"
                src={user.avatar}
                alt={user.first_name}
              />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {user.first_name} {user.last_name}
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {user.email}
              </p>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
