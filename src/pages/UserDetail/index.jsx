import Navbar from "../../components/Navbar";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const UserDetail = () => {
  const { id } = useParams();
  const [selectedUser, setSelectedUser] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`https://reqres.in/api/users/${id}`);
      console.log(`res`, res);
      setSelectedUser(res.data.data);
    };
    fetchUser();
  }, [id]);

  return (
    <div className="bg-gray-900 min-h-screen">
      <Navbar />
      <div className="m-10 flex justify-center">
        <div className="p-6 border border-gray-700 rounded-lg shadow-lg w-80 bg-gray-800 flex flex-col items-center">
          <h2 className="text-2xl font-bold text-white text-center mb-4">
            User Detail
          </h2>
          <img
            src={selectedUser.avatar}
            alt={`${selectedUser.first_name} ${selectedUser.last_name}`}
            className="h-28 w-28 rounded-full object-cover border-4 border-blue-500 mb-4"
          />
          <p className="text-lg font-semibold text-white">
            {selectedUser.first_name} {selectedUser.last_name}
          </p>
          <p className="text-gray-300">{selectedUser.email}</p>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
