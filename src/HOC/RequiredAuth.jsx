import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
export const RequiredAuth = ({ children }) => {
    
  const navigate = useNavigate();
  const { isAuth } = useSelector((state) => state.auth);
  if (isAuth) return children;
  return <Navigate to={"/login"} />;
};
