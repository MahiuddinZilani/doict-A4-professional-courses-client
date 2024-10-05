import { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { FaGoogle, FaFacebook, FaGithub } from "react-icons/fa";

const Login = () => {
  const { user, login, logInWithGoogle, logInWithFacebook, logInWithGithub } =
    useContext(AuthContext);

  if (user) {
    return (
      <>
        <Navigate to={"/"}></Navigate>
      </>
    );
  }

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    const email = form.get("email");
    const password = form.get("password");

    e.target.reset();
    console.log(email, password);

    login(email, password)
      .then((result) => console.log(result.user))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div className="w-full max-w-sm p-6 m-auto mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div className="flex justify-center mx-auto">
          <img
            className="w-auto h-7 sm:h-8"
            src="https://merakiui.com/images/logo.svg"
            alt=""
          />
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
        <div className="flex flex-col items-center mt-6 -mx-2 space-y-2">
          {/* sign in with google */}
          <button
            onClick={logInWithGoogle}
            type="button"
            className="flex items-center gap-4 justify-center w-full px-6 py-2 mx-2 text-sm font-medium text-white transition-colors duration-300 transform bg-green-600 rounded-lg hover:bg-green-400 focus:bg-green-400 focus:outline-none"
          >
            <span className="text-2xl">
              <FaGoogle />
            </span>
            <span className="hidden mx-2 sm:inline">Sign in with Google</span>
          </button>

          {/* sign in with facebook */}
          <button
            onClick={logInWithFacebook}
            type="button"
            className="flex items-center gap-4 justify-center w-full px-6 py-2 mx-2 text-sm font-medium text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:bg-blue-400 focus:outline-none"
          >
            <span className="text-2xl">
              <FaFacebook />
            </span>
            <span className="hidden mx-2 sm:inline">Sign in with Facebook</span>
          </button>

          {/* sign in with github */}
          <button
            onClick={logInWithGithub}
            type="button"
            className="flex items-center gap-4 justify-center w-full px-6 py-2 mx-2 text-sm font-medium text-white transition-colors duration-300 transform bg-black rounded-lg hover:bg-black/50 focus:bg-black/50 focus:outline-none"
          >
            <span className="text-2xl">
              <FaGithub />
            </span>
            <span className="hidden mx-2 sm:inline">Sign in with Google</span>
          </button>
        </div>

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
