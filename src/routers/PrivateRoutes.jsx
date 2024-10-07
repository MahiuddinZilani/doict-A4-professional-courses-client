import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log(location, location.pathname);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen text-3xl">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return user ? (
    <>{children}</>
  ) : (
    <Navigate state={location.pathname} to="/login" />
  );
};

export default PrivateRoutes;

PrivateRoutes.propTypes = {
  children: PropTypes.node.isRequired,
};
