import { BiEdit, BiTrash } from "react-icons/bi";
import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "../../services/usersApi";
import { CreateUser } from "../fragment/CreateUser";
import { useState } from "react";

const ReadUsers = () => {
  const [edit, setEdit] = useState(false);

  // menampilkan data
  const { data, isLoading, isError } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers
  });
  if (isLoading) {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-white/50 backdrop-blur-sm z-50">
        <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin">
        </div>
      </div>
    )
  }
  if (isError) return <p>Gagal memuat data</p>;

  // edit data
  const handleEditUser = () => {
    setEdit(true);
  }

  return (
    <>
      <table className="min-w-full border border-gray-300 rounded-lg overflow-hidden shadow-md">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="px-4 py-3 text-left text-sm font-semibold">No</th>
            <th className="px-4 py-3 text-left text-sm font-semibold">Name</th>
            <th className="px-4 py-3 text-left text-sm font-semibold">Email</th>
            <th className="px-4 py-3 text-left text-sm font-semibold">Address</th>
            <th className="px-4 py-3 text-left text-sm font-semibold">Terdaftar</th>
            <th colSpan={2} className="py-3 text-center text-sm font-semibold">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.data.map((user, index) => (
            <tr key={user.id} className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"
              } hover:bg-gray-100 transition`}>
              <td className="px-4 py-3 text-sm text-gray-700">{index + 1}</td>
              <td className="px-4 py-3 text-sm text-gray-800 font-medium">{user.fullname}</td>
              <td className="px-4 py-3 text-sm text-gray-700">{user.email}</td>
              <td className="px-4 py-3 text-sm text-gray-700">{user.address}</td>
              <td className="px-4 py-3 text-sm text-gray-700">{user.created_at}</td>
              <td className="flex justify-center py-2 text-sm text-gray-700">
                <button
                  type="button"
                  className="w-15 h-6 flex justify-center items-center text-green-600 gap-2 border rounded-sm cursor-pointer"
                  onClick={handleEditUser}
                >
                  <BiEdit />
                  <span>Edit</span>
                </button>
              </td>
              <td className="py-2 text-sm text-gray-700">
                <button type="button" className="w-15 h-6 border flex justify-center items-center text-red-600 rounded-sm">
                  <BiTrash />
                  <span>Hapus</span>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* modal edit user */}
      {edit && (
        <CreateUser />
      )}
    </>
  )
}
export default ReadUsers;