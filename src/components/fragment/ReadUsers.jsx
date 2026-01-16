import { BiEdit, BiTrash } from "react-icons/bi";
import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "../../services/usersApi";
import { useState } from "react";
import UpdateUser from "../fragment/UpdateUser";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteUserById } from "../../services/usersApi";

const ReadUsers = () => {
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
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="py-3 text-center py-3 text-[8px] md:text-[12px] lg:text-sm font-semibold">No</th>
            <th className="py-3 w-64 text-[8px] md:text-[12px] lg:text-sm font-semibold">Full Name</th>
            <th className="px-4 py-3 text-left text-[8px] md:text-[12px] lg:text-sm font-semibold">Terdaftar</th>
            <th className="px-4 py-3 text-left text-[8px] md:text-[12px] lg:text-sm font-semibold">Update</th>
            <th className="hidden md:block py-3 text-center text-[8px] md:text-[12px] lg:text-sm font-semibold">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.data.map((user, index) => (
            <tr key={user.id} className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"
              } hover:bg-gray-100 transition`}>
              <td className="px-2 md:px-4 py-3 text-[8px] md:text-[12px] lg:text-sm text-center text-gray-700">{index + 1}</td>
              <td className="py-3 px-2 md:px-4 text-[8px] md:text-[12px] lg:text-sm text-gray-800 font-medium">{user.fullname}</td>
              <td className="px-1 md:px-2 py-3 text-[8px] md:text-[12px] lg:text-sm text-gray-700">{user.created_at}</td>
              <td className="px-1 md:px-2 py-3 text-[8px] md:text-[12px] lg:text-sm text-gray-700">{user.updated_at}</td>
              <td className="hidden md:table-cell py-2 text-sm text-gray-700">
                <div className="flex gap-2 justify-center">

                  <button
                    type="button"
                    className="w-20 h-7 flex justify-center items-center text-green-600 hover:bg-green-300 hover:text-gray-700 gap-1 border rounded-sm cursor-pointer"
                    onClick={() => setEditUserId(user.id)}
                  >
                    <BiEdit />
                    <span>Edit</span>
                  </button>

                  <button
                    onClick={() => deleteMutation.mutate(user.id)}
                    type="button"
                    className="w-20 h-7 flex justify-center items-center text-red-600 hover:bg-red-200 gap-1 border rounded-sm"
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