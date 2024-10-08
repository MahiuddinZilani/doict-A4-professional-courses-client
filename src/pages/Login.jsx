import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import logo from "/logo.png";
import SocialMediaLogIn from "../components/SocialMediaLogIn";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [loginError, setLoginError] = useState("");
  const [loginSuccess, setLoginSuccess] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    const email = form.get("email");
    const password = form.get("password");

    e.target.reset();
    setLoginError("");
    setLoginSuccess("");

    login(email, password)
      .then((result) => {
        // eslint-disable-next-line no-unused-vars
        const user = result.user;
        setLoginSuccess("Login Successful");
      })
      .catch((error) => {
        setLoginError(error.message);
      });
  };

  // Toast and Navigation effect
  useEffect(() => {
    if (loginSuccess) {
      toast.success(loginSuccess, {
        autoClose: 1500, // Close after 1.5s
        onClose: () => {
          navigate(location?.state ? location.state : "/"); // Navigate only after toast is closed
        },
      });
    }
  }, [loginSuccess, navigate, location]);

  useEffect(() => {
    if (loginError) {
      toast.error(loginError); // Show error toast
    }
  }, [loginError]);

  return (
    <div>
      <ToastContainer autoClose={2000} />
      <div className="w-2/3 md:max-w-md px-8 py-4 m-auto mx-auto my-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div className="flex justify-center mx-auto">
          <img className="w-20 h-12 md:h-18" src={logo} alt="" />
        </div>
        {/* form  */}
        <form onSubmit={handleLogin} className="mt-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm text-gray-800 dark:text-gray-200"
            >
              Email
            </label>
            <input
              name="email"
              type="text"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mt-4">
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm text-gray-800 dark:text-gray-200"
              >
                Password
              </label>
              <a
                href="#"
                className="text-xs text-gray-600 dark:text-gray-400 hover:underline"
              >
                Forget Password?
              </a>
            </div>
            <input
              name="password"
              type="password"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
            >
              Log In
            </button>
          </div>
          {loginError && (
            <div className="text-red-500 mx-auto text-center my-2 font-semibold">
              {loginError}
            </div>
          )}
          {loginSuccess && (
            <p className="text-green-500 mx-auto text-center my-2 font-semibold">
              {loginSuccess}
            </p>
          )}
        </form>

        {/* other login title */}
        <div className="flex items-center justify-between mt-4">
          <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/5" />
          <a
            href="#"
            className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline"
          >
            or login with Social Media
          </a>
          <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/5" />
        </div>

        {/* other login option  */}
        <SocialMediaLogIn />

        {/* navigation link to registration page */}
        <p className="mt-8 text-xs font-light text-center text-gray-400">
          {" "}
          Don&apos;t have an account?{" "}
          <Link to={"/registration"} className="text-blue-600 font-semibold">
            Create One
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
