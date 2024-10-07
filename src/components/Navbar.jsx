import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { RxAvatar } from "react-icons/rx";
import logo from "../../public/logo.png";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  // const { displayName, email, photoURL } = user || null;

  const handleLogOut = () => {
    logOut()
      .then((result) => console.log(result.user))
      .catch((error) => console.log(error));
  };

  const menu = (
    <>
      <li>
        <NavLink to={"/"}> Home</NavLink>
      </li>
      <li>
        <NavLink to={"/products"}>Products</NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-[#242145] sticky top-0 left-0 w-full z-50 shadow-lg">
      <div className="navbar max-w-screen-lg mx-auto text-white">
        {/* navbar start  */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {menu}
            </ul>
          </div>
          <Link to={"/"} className="flex justify-center items-center gap-8">
            <img src={logo} alt="" className="w-20 h-20" />
            <a className="hidden md:flex text-xl">DevUp Courses</a>
          </Link>
        </div>

        {/* navbar center  */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menu}</ul>
        </div>

        {/* navbar end */}
        <div className="navbar-end flex items-center gap-4">
          {user?.displayName ? <p>{user.displayName}</p> : <p>{user.email}</p>}
          {user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-9 rounded-full ">
                  {user.photoURL ? (
                    <img
                      alt="Tailwind CSS Navbar component"
                      src={user.photoURL}
                    />
                  ) : (
                    <RxAvatar className="text-4xl"></RxAvatar>
                  )}
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-72 p-2 shadow text-black "
              >
                <li>
                  <span className="font-bold">Name:</span> {user.displayName}
                </li>
                <li>
                  <span className="font-bold ">
                    Email:{" "}
                    <span className="font-medium text-gray-600">
                      {user.email}
                    </span>
                  </span>
                </li>
                <Link
                  to={"/"}
                  className="w-full mx-auto flex justify-center items-center mt-4 bg-blue-600 rounded-lg"
                >
                  <button
                    onClick={handleLogOut}
                    className="mx-auto py-2 font-semibold text-white"
                  >
                    Log Out
                  </button>
                </Link>
              </ul>
            </div>
          ) : (
            <NavLink to={"/login"}>
              <button className="btn">Login/ Register</button>
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
