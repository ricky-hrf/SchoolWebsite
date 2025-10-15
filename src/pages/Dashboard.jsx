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
      bg: "bg-[url('gambar/bg-annoucment2.jpg')] bg-cover bg-center"
    },
    {
      judul: "Total Guru",
      jumlah: storedData.filter((item) => item.status === "Teacher").length,
      bg: "bg-[url('gambar/teachers.jpg')] bg-cover bg-center"
    },
    {
      judul: "Total Siswa",
      jumlah: storedData.filter((item) => item.status === "Student").length,
      bg: "bg-[url('gambar/students.jpg')] bg-cover bg-center"
    },
    {
      judul: "Total Staff",
      jumlah: storedData.filter((item) => item.status === "Staff").length,
      bg: "bg-[url('gambar/staff.jpg')] bg-cover bg-center"
    },
  ]

  const { theme } = useContext(ThemeContext);

  return (
    <AdminLayout>
      <div className={`w-full  p-2 ${theme === "light" ? "text-red-800" : "text-white"} `}>
        <h1 className="text-xl font-semibold mb-2">{DataSidebar[0].menu}</h1>
        <div className="h-50 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {dataDashboard.map((data, index) => (
            <div key={index} className={`w-full h-20 md:h-60 rounded-lg shadow-lg ${data.bg} relative`}>
              <div className="absolute inset-0 bg-black/50 rounded-lg flex flex-col justify-center items-center text-xl text-white hover:bg-black/10 font-semibold cursor-pointer">
                <span>{data.judul}</span>
                <span>{data.jumlah}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AdminLayout>
  )
}
export default Dashboard;