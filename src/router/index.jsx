import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import UserPage from '../pages/UserPage';
import Dashboard from '../pages/Dashboard';
import DetailUser from '../pages/DetailUser';
import LoginPage from "../pages/LoginPage";
import ProtectedRoute from "../components/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    )
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/user-management",
    element: (<ProtectedRoute><UserPage /></ProtectedRoute>)
  },
  {
    path: "/user-management/:id",
    element: (<ProtectedRoute><DetailUser /></ProtectedRoute>)
  },
])
export default router;