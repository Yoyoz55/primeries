import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";

const PrivateRoute = ({ permissionUser }) => {
  const isLoggedIn = useSelector((state) => state.voters.isLoggedIn);
  const permission = useSelector((state) => state.voters.permission);

  const auth = isLoggedIn; //
  const isPermitted = permissionUser.includes(permission);

  // If authorized, return an outlet that will render child elements
  // If not, return element that will navigate to login page
  return auth && isPermitted ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
