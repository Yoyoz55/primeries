import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { getLocalStorage } from "../proxy/storageProxy";
import { useSelector, useDispatch } from "react-redux";
import { setLogin } from "../redux/voters";

const PrivateRoute = ({ permissionUser }) => {
  // const isLoggedIn = useSelector((state) => state.voters.isLoggedIn);
  // const permission = useSelector((state) => state.voters.permission);
  const dispatch = useDispatch();
  const loggedStorage = getLocalStorage();

  const isLoggedIn = loggedStorage.log;
  const permission = loggedStorage.permission;
  if (isLoggedIn) {
    dispatch(setLogin({ log: true, perm: permission }));
  }
  const auth = isLoggedIn; //
  const isPermitted = permissionUser.includes(permission);

  // If authorized, return an outlet that will render child elements
  // If not, return element that will navigate to login page

  return auth && isPermitted ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
