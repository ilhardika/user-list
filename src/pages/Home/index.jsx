import Navbar from "../../components/Navbar";

const Home = () => {
  return (
    <div className="bg-gray-900 min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <div className="text-center py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <h1 className="text-5xl font-bold text-white">
          Manage Your Users Effortlessly
        </h1>
        <p className="mt-4 text-lg text-gray-200">
          A powerful dashboard to view, manage, and interact with your user data
          seamlessly.
        </p>
        <a
          href="https://reqres.in/"
          className="mt-6 inline-block rounded-3xl bg-gray-700 text-white py-3 px-12 rounded-lg hover:bg-gray-800 transition duration-200"
        >
          Reqress API
        </a>
      </div>

      {/* Features Section */}
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold text-white text-center mb-8">
          Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h3 className="text-xl font-semibold text-white">
              User List Management
            </h3>
            <p className="text-gray-300 text-sm mt-2">
              Easily view and manage all your users in one place. Our intuitive
              interface allows for quick access to user details.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h3 className="text-xl font-semibold text-white">
              Secure Authentication
            </h3>
            <p className="text-gray-300 text-sm mt-2">
              Protect your data with robust user authentication. Only authorized
              users can access sensitive information.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h3 className="text-xl font-semibold text-white">
              Responsive Design
            </h3>
            <p className="text-gray-300 text-sm mt-2">
              Access your dashboard from any device. Our responsive design
              ensures a smooth experience on desktops, tablets, and smartphones.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h3 className="text-xl font-semibold text-white">
              Dynamic Data Fetching
            </h3>
            <p className="text-gray-300 text-sm mt-2">
              Stay updated with real-time data. Our application fetches user
              information dynamically from a secure API.
            </p>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold text-white text-center mb-8">
          Benefits
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="bg-gray-800 w-72 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="size-16 mb-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <h3 className="text-xl font-semibold text-white">Save Time</h3>
            <p className="text-gray-300 mt-2">
              Streamline your user management process and reduce administrative
              overhead.
            </p>
          </div>
          <div className="bg-gray-800 w-72 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="size-16 mb-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
              />
            </svg>

            <h3 className="text-xl font-semibold text-white">
              Enhance Security
            </h3>
            <p className="text-gray-300 mt-2">
              Keep your user data safe with industry-standard security measures.
            </p>
          </div>
          <div className="bg-gray-800 w-72 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="size-16 mb-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 18.75 7.5-7.5 7.5 7.5"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 12.75 7.5-7.5 7.5 7.5"
              />
            </svg>

            <h3 className="text-xl font-semibold text-white">
              Improve User Experience
            </h3>
            <p className="text-gray-300 mt-2">
              Provide your users with a seamless experience, making it easy for
              them to access their information.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="max-w-4xl mx-auto px-4 py-10">
        <h2 className="text-3xl font -bold text-white text-center mb-8">
          Contact Us
        </h2>
        <form className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <label className="block text-gray-300" htmlFor="name">
              Name
            </label>
            <input
              className="w-full p-2 rounded-lg bg-gray-700 text-white"
              type="text"
              id="name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300" htmlFor="email">
              Email
            </label>
            <input
              className="w-full p-2 rounded-lg bg-gray-700 text-white"
              type="email"
              id="email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300" htmlFor="message">
              Message
            </label>
            <textarea
              className="w-full p-2 rounded-lg bg-gray-700 text-white"
              id="message"
              rows="4"
              required
            ></textarea>
          </div>
          <button
            className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
            type="submit"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Call to Action Section */}
      <div className="text-center py-10 bg-gradient-to-r from-blue-600 to-blue-800">
        <h2 className="text-3xl font-bold text-white">
          Ready to Transform Your User Management?
        </h2>
        <a
          href="/users"
          className="mt-6 inline-block bg-gray-700 text-white py-3 px-6 rounded-3xl hover:bg-gray-800 transition duration-200"
        >
          See user list
        </a>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 py-6">
        <div className="max-w-6xl mx-auto text-center text-gray-300">
          <p>
            &copy; {new Date().getFullYear()} Reqress Demo. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
