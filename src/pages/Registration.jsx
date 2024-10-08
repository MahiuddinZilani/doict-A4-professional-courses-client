import { useContext, useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "/logo.png";

const Registration = () => {
  const { createUser } = useContext(AuthContext);
  const [registerError, setRegisterError] = useState("");
  const [registerSuccess, setRegisterSuccess] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  // handleRegistration function definition
  const handleRegistration = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    // const userName = formData.get("userName");
    const email = formData.get("email");
    const password = formData.get("password");
    // const confirmPassword = formData.get("confirmPassword");
    // const photo = formData.get("photo");

    event.target.reset();
    setRegisterError("");
    setRegisterSuccess("");

    createUser(email, password)
      .then((result) => {
        // eslint-disable-next-line no-unused-vars
        const user = result.user;
        setRegisterSuccess("User created successfully.");
        // navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        setRegisterError(error.message);
      });
  };

  // Trigger toast when registerSuccess or registerError changes
  useEffect(() => {
    if (registerSuccess) {
      toast.success(registerSuccess, {
        autoClose: 1500,
        onClose: () => {
          // Navigate after toast closes
          navigate(location?.state ? location.state : "/");
        },
      });
    }
  }, [registerSuccess, navigate, location]);

  useEffect(() => {
    if (registerError) {
      toast.error(registerError); // Show error toast
    }
  }, [registerError]);

  return (
    <div>
      <ToastContainer autoClose={2000} />
      <section className="bg-gray-100 dark:bg-gray-900">
        <div className="container flex items-center justify-center min-h-screen px-6 mx-auto ">
          <form onSubmit={handleRegistration} className="w-full max-w-md">
            <div className="flex justify-center mx-auto">
              <img className="w-20 h-12 md:h-18" src={logo} alt="" />
            </div>

            {/* userName */}
            <div className="relative flex items-center mt-8">
              <span className="absolute">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </span>
              <input
                type="text"
                className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Username"
                name="userName"
              />
            </div>

            {/* photo */}
            <label
              htmlFor="dropzone-file"
              className="flex items-center px-3 py-3 mx-auto mt-6 text-center bg-white border-2 border-dashed rounded-lg cursor-pointer dark:border-gray-600 dark:bg-gray-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-gray-300 dark:text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                />
              </svg>
              <h2 className="mx-3 text-gray-400">Profile Photo</h2>
              <input
                id="dropzone-file"
                type="file"
                className="hidden"
                name="photo"
              />
            </label>

            {/* email  */}
            <div className="relative flex items-center mt-6">
              <span className="absolute">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </span>
              <input
                type="email"
                className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Email address"
                name="email"
                required
              />
            </div>

            {/* password */}
            <div className="relative flex items-center mt-4">
              <span className="absolute">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </span>
              <input
                type="password"
                className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Password"
                name="password"
              />
            </div>

            {/* confirmPassword */}
            <div className="relative flex items-center mt-4">
              <span className="absolute">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </span>
              <input
                type="password"
                className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Confirm Password"
                name="confirmPassword"
              />
            </div>

            {/* registration */}
            <div className="mt-6">
              <button
                type="submit"
                className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
              >
                Registration
              </button>
              {registerError && (
                <div className="text-red-500 mx-auto text-center my-2 font-semibold">
                  {registerError}
                </div>
              )}
              {registerSuccess && (
                <p className="text-green-500 mx-auto text-center my-2 font-semibold">
                  {registerSuccess}
                </p>
              )}
              <div className="mt-6 text-center ">
                <Link to={"/login"} className="text-blue-600 font-semibold">
                  Already have an account?
                </Link>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Registration;
