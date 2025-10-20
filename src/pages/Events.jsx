import AdminLayout from "../layouts/AdminLayout";
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";
import { DataSidebar } from "../config/DataSidebar";

const Event = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <AdminLayout>
      <div className={`w-full p-2 ${theme === "light" ? "text-red-900" : "text-white"} `}>
        <h1 className="text-2xl font-semibold mb-2 pb-2 border-b">{DataSidebar[6].menu}</h1>
      </div>
    </AdminLayout>
  )
}
export default Event;