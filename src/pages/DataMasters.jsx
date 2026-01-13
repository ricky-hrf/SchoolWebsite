import { useContext, useEffect, useState } from "react";
import AdminLayout from "../layouts/AdminLayout";
import { ThemeContext } from "../context/ThemeContext";
import { DataSidebar } from "../config/DataSidebar";
import { BiPlus } from "react-icons/bi";
import CreateUser from "../components/fragment/CreateUser";
import ReadUsers from "../components/fragment/ReadUsers";

const DataMasters = () => {
  const { theme } = useContext(ThemeContext);
  const [addUser, setAddUser] = useState(false);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    try {
      const response = await fetch("http://localhost:3000/users");
      const data = await response.json();
      setUsers(data.data);
    } catch (error) {
      console.error("gagal memuat data ..", error);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 100)
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  const handleAddUser = () => {
    setAddUser(!addUser);
  }

  return (
    <AdminLayout addUser={handleAddUser} >
      <div className={`w-full p-2 ${theme === "light" ? "text-red-900" : "text-white"} relative`}>
        <div className="flex justify-between mb-2 pb-2 border-b">
          <h1 className="text-2xl font-semibold">{DataSidebar[1].menu}</h1>
          <form onSubmit={(e) => e.preventDefault()}>
            <div type="button" onClick={handleAddUser} className="border flex justify-center items-center font-semibold p-2 rounded-lg hover:bg-red-900 hover:text-white cursor-pointer">
              <BiPlus />
              Tambah Pengguna
            </div>
          </form>
          {addUser && (
            <CreateUser setAddUser={setAddUser} addUser={addUser} onSuccess={fetchUsers} />
          )}
        </div>
        <ReadUsers users={users} loading={loading} />
      </div>
    </AdminLayout>
  )
}
export default DataMasters;