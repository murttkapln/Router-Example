import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = ({ user }) =>
  user ? <Outlet /> : <Navigate to="/login" />;
console.log();
export default PrivateRouter;
