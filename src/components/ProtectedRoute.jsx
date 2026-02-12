import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const access = localStorage.getItem("valentineAccess");

  if (access !== "true") {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
