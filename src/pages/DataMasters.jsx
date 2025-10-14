import { useContext, useEffect, useState } from "react";
import AdminLayout from "../layouts/AdminLayout";
import { ThemeContext } from "../context/ThemeContext";
import { DataSidebar } from "../config/DataSidebar";

const DataMasters = () => {
  const { theme } = useContext(ThemeContext);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.data);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Memuat data...</p>

  return (
    <AdminLayout>
      <div className={`w-full p-2 ${theme === "light" ? "text-red-900" : "text-white"}`}>
        <h1 className="text-2xl font-semibold mb-2 pb-2">{DataSidebar[2].menu}</h1>
        <div className="border-t-2">
          <ul>
            {users.map((user) => (
              <li key={user.id}>{user.first_name}</li>
            ))}
          </ul>
        </div>
      </div>
    </AdminLayout>
  )
}
export default DataMasters;