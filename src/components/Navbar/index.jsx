import { useState, useEffect } from "react";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for menu visibility

  // Check login status when the component mounts
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token); // Set isLoggedIn true if token exists
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token from localStorage
    setIsLoggedIn(false); // Update login status
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu visibility
  };

  return (
    <div>
      <nav className="px-10 bg-gray-800 text-white flex justify-between items-center py-5 shadow-md sticky top-0 z-20">
        <div className="flex items-center justify-start gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6"
          >
            <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z" />
          </svg>

          <h1 className="text-2xl font-bold">Reqres List</h1>
        </div>
        <div className="hidden md:flex items-center gap-5">
          <ul className="flex items-center gap-5">
            <li>
              <a
                href="/"
                className="hover:text-blue-400 transition duration-200"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/users"
                className="hover:text-blue-400 transition duration-200"
              >
                Users
              </a>
            </li>
            <li>
              {isLoggedIn ? (
                <button
                  onClick={handleLogout}
                  className="bg-blue-500 text-white py-2 px-5 rounded-3xl hover:bg-blue-600 transition duration-200"
                >
                  Logout
                </button>
              ) : (
                <a
                  href="/login"
                  className="bg-blue-600 text-white py-2 px-5 rounded-3xl hover:bg-blue-700 transition duration-200"
                >
                  Login
                </a>
              )}
            </li>
          </ul>
        </div>
        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-75 z-50 transition-opacity duration-300 text-white ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`absolute top-0 right-0 w-80 h-screen flex justify-start gap-36 items-start bg-gray-800 p-5 shadow-lg transform transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul className="flex flex-col space-y-4">
            <li>
              <a
                href="/"
                className="hover:text-blue-400 transition duration-200"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/users"
                className="hover:text-blue-400 transition duration-200"
              >
                Users
              </a>
            </li>
            <li>
              {isLoggedIn ? (
                <button
                  onClick={handleLogout}
                  className="bg-blue-500 text-white py-2 px-5 rounded-lg hover:bg-blue-600 transition duration-200"
                >
                  Logout
                </button>
              ) : (
                <a
                  href="/login"
                  className="bg-blue-600 text-white py-2 px-5 rounded-lg hover:bg-blue-700 transition duration-200"
                >
                  Login
                </a>
              )}
            </li>
          </ul>
          <button onClick={toggleMenu} className="text-white mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
