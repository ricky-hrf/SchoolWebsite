import { useContext, useEffect, useState } from "react";
import AdminLayout from "../layouts/AdminLayout";
import { ThemeContext } from "../context/ThemeContext";
import { DataSidebar } from "../config/DataSidebar";

const DataMasters = () => {
  const { theme } = useContext(ThemeContext);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("gagal memuat data ..", error);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, [])

  if (loading) {
    return (
      <p>Memuat data</p>
    )
  }

  return (
    <AdminLayout>
      <div className={`w-full p-2 ${theme === "light" ? "text-red-900" : "text-white"}`}>
        <h1 className="text-2xl font-semibold mb-2 pb-2 border-b">{DataSidebar[2].menu}</h1>
        <table className="min-w-full border border-gray-300 rounded-lg overflow-hidden shadow-md">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold">No</th>
              <th className="px-4 py-3 text-left text-sm font-semibold">Name</th>
              <th className="px-4 py-3 text-left text-sm font-semibold">Username</th>
              <th className="px-4 py-3 text-left text-sm font-semibold">Email</th>
              <th className="px-4 py-3 text-left text-sm font-semibold">Address</th>
              <th className="px-4 py-3 text-left text-sm font-semibold">Phone</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id} className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"
                } hover:bg-gray-100 transition`}>
                <td className="px-4 py-3 text-sm text-gray-700">{index + 1}</td>
                <td className="px-4 py-3 text-sm text-gray-800 font-medium">{user.name}</td>
                <td className="px-4 py-3 text-sm text-gray-700">{user.username}</td>
                <td className="px-4 py-3 text-sm text-gray-700">{user.email}</td>
                <td className="px-4 py-3 text-sm text-gray-700">{user.address.city}</td>
                <td className="px-4 py-3 text-sm text-gray-700">{user.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  )
}
export default DataMasters;