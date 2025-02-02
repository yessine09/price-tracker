import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

// Définition du composant ProtectedRoute
const ProtectedRoute = ({ component: Component, allowedRoles, ...rest }) => {
  const { currentUser } = useSelector((state) => state.user);

  if (!currentUser) {
    return <Navigate to="/" />;
  }

  return <Component {...rest} />;
};

export default ProtectedRoute;
