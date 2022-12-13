import React, { useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
const PrivateRoute = () => {
  const { currentUser } = useSelector((state) => state.user);
  useEffect(() => {}, [currentUser]);
  return currentUser ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
