import { useContext, useEffect, useState } from "react";
import AdminLayout from "../layouts/AdminLayout";
import { ThemeContext } from "../context/ThemeContext";
import { DataSidebar } from "../config/DataSidebar";
import { BiX, BiChevronDown, BiChevronUp, BiReset, BiPlus } from "react-icons/bi";

const DataMasters = () => {
  const { theme } = useContext(ThemeContext);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [addUser, setAddUser] = useState(false);

  useEffect(() => {
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
    fetchUsers();
  }, [])

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
            <div className="fixed z-1 top-0 bottom-0 right-0 left-0 flex justify-center items-center bg-black/50">
              <div className="flex flex-col justify-center w-[50%] bg-white shadow-xl rounded-xl px-8 py-4 gap-4">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-xl">Add New User</span>
                  <div className="w-8 h-8 flex justify-center items-center rounded-full text-2xl hover:bg-red-50 cursor-pointer" onClick={() => setAddUser(!addUser)}><BiX /></div>
                </div>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="nama" className="block text-sm font-medium mb-1">
                      Nama Lengkap <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="nama"
                      name="nama"
                      placeholder="Masukkan nama lengkap"
                      className={`w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:border-transparent transition duration-200`}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="contoh@email.com"
                      className={`w-full px-4 py-2 rounded-lg border  focus:outline-none focus:ring-2 focus:border-transparent transition duration-200`}
                    />
                  </div>

                  <div>
                    <label htmlFor="alamat" className="block text-sm font-medium mb-1">
                      Alamat Lengkap <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      placeholder="Masukkan alamat lengkap"
                      rows="4"
                      className={`w-full px-4 py-2 rounded-lg border border-gray-300
                        focus:outline-none focus:ring-2 focus:border-transparent transition duration-200 resize-none`}
                    />
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 pt-4">
                    <button
                      type="button"
                      className="flex-1 flex justify-center items-center gap-4 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg text-lg font-medium hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 transition duration-200 cursor-pointer"
                    >
                      <BiReset />
                      Reset Form
                    </button>
                    <button
                      type="submit"
                      className="flex-1 bg-gradient-to-br from-red-500 to-red-900 text-white py-2 px-4 text-lg rounded-lg font-medium hover:from-red-700 hover:to-red-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200 shadow-md cursor-pointer"
                    >
                      <span className="flex items-center justify-center">
                        <BiPlus />
                        Tambah Data
                      </span>
                    </button>

                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
        <table className="min-w-full border border-gray-300 rounded-lg overflow-hidden shadow-md">
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center bg-white/70 backdrop-blur-sm z-50">
              <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin">
              </div>
            </div>
          )}
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold">No</th>
              <th colSpan={2} className="px-4 py-3 text-center text-sm font-semibold">Avatar</th>
              <th className="px-4 py-3 text-left text-sm font-semibold">Name</th>
              <th className="px-4 py-3 text-left text-sm font-semibold">Email</th>
              <th className="px-4 py-3 text-left text-sm font-semibold">Address</th>
              <th className="px-4 py-3 text-left text-sm font-semibold">Terdaftar</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id} className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"
                } hover:bg-gray-100 transition`}>
                <td className="px-4 py-3 text-sm text-gray-700">{index + 1}</td>
                <td className="px-4 py-3 text-sm text-gray-700">Edit</td>
                <td className="px-4 py-3 text-sm text-gray-700">Hapus</td>
                <td className="px-4 py-3 text-sm text-gray-800 font-medium">{user.fullname}</td>
                <td className="px-4 py-3 text-sm text-gray-700">{user.email}</td>
                <td className="px-4 py-3 text-sm text-gray-700">{user.address}</td>
                <td className="px-4 py-3 text-sm text-gray-700">{user.created_at}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  )
}
export default DataMasters;