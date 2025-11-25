import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import UserPage from '../pages/UserPage';
import Dashboard from '../pages/Dashboard';
import DetailUser from '../pages/DetailUser';
import LoginPage from "../pages/LoginPage";
import ProtectedRoute from "../components/ProtectedRoute";
import DataMasters from "../pages/DataMasters";
import Event from "../pages/Events";
import SignUp from "../pages/SignUp";

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
    path: "/signup",
    element: <SignUp />
  },
  {
    path: "/user-management",
    element: (<ProtectedRoute><UserPage /></ProtectedRoute>)
  },
  {
    path: "/user-management/:id",
    element: (<ProtectedRoute><DetailUser /></ProtectedRoute>)
  },
  {
    path: "/data-master",
    element: (<ProtectedRoute><DataMasters /></ProtectedRoute>)
  },
  {
    path: "/kegiatan-sekolah",
    element: (<ProtectedRoute><Event /></ProtectedRoute>)
  }
])
export default router;