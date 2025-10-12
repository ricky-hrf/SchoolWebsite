import AdminLayout from "../layouts/AdminLayout";
import { DataSidebar } from "../config/DataSidebar";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Dashboard = () => {
  const storedData = JSON.parse(localStorage.getItem("users")) || [];
  const dataDashboard = [
    {
      judul: "Total Pengguna",
      jumlah: storedData.length,
    },
    {
      judul: "Total Guru",
      jumlah: storedData.filter((item) => item.status === "Teacher").length,
    },
    {
      judul: "Total Siswa",
      jumlah: storedData.filter((item) => item.status === "Student").length,
    },
    {
      judul: "Total Staff",
      jumlah: storedData.filter((item) => item.status === "Staff").length,
    },
  ]

  const { theme } = useContext(ThemeContext);

  return (
    <AdminLayout>
      <div className={`w-full  p-2 ${theme === "light" ? "text-red-800" : "text-white"} `}>
        <h1 className="text-xl font-semibold mb-2">{DataSidebar[0].menu}</h1>
        <div className="h-50 grid grid-cols-12 gap-4">
          {dataDashboard.map((data, index) => (
            <div key={index} className="col-span-3 rounded-lg shadow-lg flex flex-col justify-center items-center text-xl font-semibold border">
              <span>{data.judul}</span>
              <span>{data.jumlah}</span>
            </div>
          ))}
        </div>
      </div>
    </AdminLayout>
  )
}
export default Dashboard;