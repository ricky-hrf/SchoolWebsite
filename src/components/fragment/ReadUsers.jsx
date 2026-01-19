import { BiEdit, BiTrash } from "react-icons/bi";
import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "../../services/usersApi";
import { useState, useContext } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteUserById } from "../../services/usersApi";
import { ThemeContext } from "../../context/ThemeContext";
import { Link } from "react-router-dom";

const ReadUsers = () => {
  const { theme } = useContext(ThemeContext);
  const queryClient = useQueryClient();

  // menghapus data
  const deleteMutation = useMutation({
    mutationFn: deleteUserById,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
    onError: (error) => {
      alert(error.response?.data?.error || "gagal menghapus data");
    }
  });

  const [editUserId, setEditUserId] = useState(false);

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

  return (
    <>
      <table className="min-w-full border border-gray-300 rounded-lg overflow-hidden shadow-md">
        <thead className={`${theme === "light" ? "bg-red-900" : "bg-gray-900"} text-white`}>
          <tr>
            <th className="py-3 text-center text-[8px] md:text-[12px] lg:text-sm font-semibold">No</th>
            <th className="py-3 text-center text-[8px] md:text-[12px] lg:text-sm font-semibold">Avatar</th>
            <th className="py-3 text-[8px] md:text-[12px] lg:text-sm font-semibold">Full Name</th>
            <th className="hidden lg:table-cell px-4 py-3 text-left text-sm font-semibold">Register</th>
            <th className="hidden lg:table-cell px-4 py-3 text-left text-sm font-semibold">Update</th>
            <th className="py-3 text-center text-[8px] md:text-[12px] lg:text-sm font-semibold">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.data.map((user, index) => (
            <tr key={user.id} className={`${index % 2 === 0 ? `${theme === "light" ? "bg-red-50" : "bg-gray-800"}` : `${theme === "light" ? "bg-white" : "bg-gray-700"}`
              } ${theme === "light" ? "hover:bg-red-100" : "hover:bg-gray-500"} transition`}>
              <td className="px-2 md:px-4 py-3 text-[8px] md:text-[12px] lg:text-sm text-center text-gray-700">{index + 1}</td>
              <td className="px-2 md:px-4 text-center">
                <img src="" alt="profile" className="border h-8 w-8 rounded-full" />
              </td>
              <td className={`py-3 px-2 md:px-4 text-[8px] md:text-[12px] lg:text-sm ${theme === "light" ? "text-gray-800" : "text-white"} font-medium`}>{user.fullname}</td>
              <td className={`hidden lg:table-cell px-2 py-3 text-sm ${theme === "light" ? "text-gray-800" : "text-white"}`}>{user.created_at}</td>
              <td className={`hidden lg:table-cell px-2 py-3 text-sm ${theme === "light" ? "text-gray-800" : "text-white"}`}>{user.updated_at}</td>
              <td className="table-cell py-2 text-sm text-gray-700">
                <div className="flex gap-[2px] md:gap-2 justify-center">
                  <Link
                    type="button"
                    to={`/user-management/${user.id}`}
                    className="w-10 md:w-15 lg:w-20 h-5 md:h-7 flex justify-center items-center text-[8px] md:text-[12px] lg:text-sm text-amber-600 hover:bg-amber-300 hover:text-gray-700 gap-1 border rounded-sm cursor-pointer"
                  >
                    <BiEdit />
                    <span>Detail</span>
                  </Link>

                  <button
                    onClick={() => deleteMutation.mutate(user.id)}
                    type="button"
                    className="w-10 md:w-15 lg:w-20 h-5 md:h-7 flex justify-center items-center text-[8px] md:text-[12px] lg:text-sm text-red-600 hover:bg-red-200 gap-1 border rounded-sm cursor-pointer"
                  >
                    <BiTrash />
                    <span>Hapus</span>
                  </button>

                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table >
      {/* modal edit user */}
      {
        editUserId && (
          <UpdateUser userId={editUserId} onClose={() => setEditUserId(null)} />
        )
      }
    </>
  )
}
export default ReadUsers;