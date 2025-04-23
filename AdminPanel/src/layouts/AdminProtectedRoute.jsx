
import { Navigate } from "react-router-dom";
import { getAdminToken } from "../api/authHelper";

const AdminProtectedRoute = ({ children }) => {
  const adminToken = getAdminToken();
  // return adminToken ? <Outlet /> : <Navigate to={"/admin/login"} />;
  return adminToken ? children : <Navigate to={"/"} replace={true} />;
};

export default AdminProtectedRoute;
