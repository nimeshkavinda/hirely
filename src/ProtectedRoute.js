import { Navigate, Outlet } from "react-router-dom";
import { message } from "antd";

const useAuth = () => {
  const token = localStorage.getItem("accessToken");
  if (token !== undefined && token !== null) {
    const userType = localStorage.getItem("userType");
    if (userType === "employer") {
      return { isAuthenticated: true, role: "employer" };
    }
    if (userType === "candidate") {
      return { isAuthenticated: true, role: "candidate" };
    }
  } else {
    return { isAuthenticated: false, role: undefined };
  }
};

const ProtectedRoutes = ({ roles, children }) => {
  const { isAuthenticated, role } = useAuth();
  const userHasRequiredRole = role && roles.includes(role) ? true : false;

  if (isAuthenticated && userHasRequiredRole) {
    return children ? children : <Outlet />;
  } else {
    message.error("Please login to continue");
    if (roles.includes("employer")) {
      return <Navigate to="/admin-login" replace />;
    } else {
      return <Navigate to="/login" replace />;
    }
  }
};

export default ProtectedRoutes;
