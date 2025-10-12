import { useContext, useEffect, useState } from "react";
import Navbar from "../components/fragment/Navbar";
import Sidebar from "../components/fragment/Sidebar";
import { ThemeContext } from "../context/ThemeContext";


const AdminLayout = ({ children }) => {
  const [openSidebar, setOpenSidebar] = useState(() => {
    const savedSidebar = localStorage.getItem("sidebarOpen");
    return savedSidebar === "true";
  });

  useEffect(() => {
    localStorage.setItem("sidebarOpen", openSidebar);
  }, [openSidebar])

  const sidebarTogle = () => {
    setOpenSidebar(!openSidebar);
  }

  const { theme } = useContext(ThemeContext);

  return (
    <div className="w-full transition duration-300">
      <Navbar />
      <main className={`w-full mt-20 flex ${theme === "light" ? "bg-white" : "bg-black"}`}>
        <aside className={`${theme === "light" ? "bg-red-900" : "bg-white"}`}>
          <Sidebar handleSidebar={sidebarTogle} openSidebar={openSidebar} />
        </aside>
        <div className="flex-1 p-2 self-start">
          {children}
        </div>
      </main>
    </div>
  )
}
export default AdminLayout;