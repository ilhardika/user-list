import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleInputForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    const payload = {
      email: form.email,
      password: form.password,
    };

    try {
      const res = await axios.post("https://reqres.in/api/register", payload);
      console.log(`response`, res);
      setSuccess("Registration Success! You can now log in.");

      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      console.log("error response", error.response);
      setError(error.response.data.error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-center h-screen bg-gray-900">
        <div className="bg-gray-800 p-10 rounded-lg shadow-lg w-full max-w-sm">
          <h2 className="text-3xl font-bold text-center mb-6 text-white">
            Register
          </h2>
          {success && (
            <p className="text-green-500 text-center mb-4">{success}</p>
          )}
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          <form className="flex flex-col gap-6" onSubmit={handleRegisterSubmit}>
            <div>
              <label
                className="text-sm font-medium text-gray-300"
                htmlFor="email"
              >
                Email
              </label>
              <input
                onChange={handleInputForm}
                name="email"
                type="email"
                required
                placeholder="Enter your email"
                className="mt-1 w-full p-3 border border-gray-600 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <p className="text-xs text-gray-400 mt-1">
                Use: eve.holt@reqres.in
              </p>
            </div>
            <div>
              <label
                className="text-sm font-medium text-gray-300"
                htmlFor="password"
              >
                Password
              </label>
              <input
                onChange={handleInputForm}
                name="password"
                type="password"
                required
                placeholder="Enter your password"
                className="mt-1 w-full p-3 border border-gray-600 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              disabled={loading}
              type="submit"
              className={`w-full py-2 rounded-md text-white transition duration-200 ${
                loading ? "bg-gray-600" : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              {loading ? "Loading..." : "Register"}
            </button>
          </form>
          <p className="text-center mt-4 text-gray-400">
            Already have an account?{" "}
            <a href="/login" className="text-blue-500 hover:underline">
              Login here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
