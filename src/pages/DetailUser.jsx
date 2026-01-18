import { Link, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import AdminLayout from "../layouts/AdminLayout";
import { BiArrowBack, BiEdit, BiSave, BiX } from "react-icons/bi";
import { ThemeContext } from "../context/ThemeContext";
import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import { getUserById, updateUser } from "../services/usersApi";
import { useForm } from "react-hook-form";

const DetailUser = () => {
  const queryClient = useQueryClient();
  const { id } = useParams();
  const { theme } = useContext(ThemeContext);
  const [edit, setEdit] = useState(true);
  const { register, handleSubmit, reset } = useForm();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["users", id],
    queryFn: () => getUserById(id),
  });

  useEffect(() => {
    if (data?.data) {
      reset({
        fullname: data.data.fullname,
        email: data.data.email,
        address: data.data.address,
      });
    }
  }, [data, reset]);

  // mutation untuk update
  const updateMutation = useMutation({
    mutationFn: updateUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      setEdit(true);
    },
    onError: (error) => {
      console.log("ERROR:", error.response?.data);
      alert(error.response?.data?.error || error.message || "gagal update data");
    },
  });

  const onSubmit = (formData) => {
    console.log(formData);
    updateMutation.mutate({
      id: id,
      data: formData,
    });
  }

  if (isLoading) {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-white/50 backdrop-blur-sm z-50">
        <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin">
        </div>
      </div>
    )
  }
  if (isError) return <p>Error: {error.message}</p>;

  const handleEdit = () => {
    setEdit(!edit);
  }

  return (
    <AdminLayout>
      <div className={`${theme === "light" ? "text-red-800" : "text-white"}`}>
        <div className="flex justify-between w-full p-2 rounded-lg shadow-lg">
          <Link to="/data-master" className={`w-8 h-8 flex justify-center items-center rounded-full text-xl ${theme === "light" ? "hover:bg-red-800" : "hover:bg-slate-800"} hover:text-white font-bold border`}>
            <BiArrowBack />
          </Link>
          <div className="flex gap-2">
            <div
              onClick={handleEdit}
            >
              {edit ? (
                <div className="border w-25 py-1 px-4 mr-4 flex gap-2 justify-between items-center font-bold rounded-md hover:bg-red-800 hover:text-white cursor-pointer">
                  <BiEdit className="text-lg" />
                  <span className="text-sm">Edit</span>
                </div>
              ) : (
                <div className="border w-25 py-1 px-4 mr-4 flex gap-2 justify-between items-center font-bold rounded-md hover:bg-red-800 hover:text-white cursor-pointer">
                  <BiX className="text-lg" />
                  <span className="text-sm">Batal</span>
                </div>
              )}
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="relative mt-4 grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className={`col-span-4 h-40 md:h-80 p-2`}>
              <div className={`h-full w-full shadow-lg`}>
                <img src={''} alt={"avatar"} className="h-full w-full object-cover rounded-lg" />
              </div>
            </div>
            <div className={`col-span-8 flex flex-col gap-2 p-2 font-semibold rounded-lg shadow-lg shadow-red-300`}>
              <div className="grid grid-cols-12 text-xs md:text-[14px] lg:text-[16px]">
                <label className="col-span-2">Nama</label>
                <div className="col-span-10 flex gap-2">
                  <span>:</span>
                  {edit ? (
                    <span>{data.data.fullname}</span>
                  ) : (
                    <input
                      name="fullname"
                      type="text"
                      {...register("fullname")}
                      className="border-b w-full focus:outline-none focus:ring-0 focus:shadow-sm transition" />
                  )}
                </div>
              </div>
              <div className="grid grid-cols-12 text-xs md:text-[14px] lg:text-[16px]">
                <div className="col-span-2">Email</div>
                <div className="col-span-10 flex gap-2">
                  <span>:</span>
                  {edit ? (
                    <span>{data.data.email}</span>
                  ) : (
                    <input
                      type="email"
                      {...register("email")}
                      className="border-b w-full focus:outline-none focus:ring-0 focus:shadow-sm transition duration-300" />
                  )}
                </div>
              </div>
              <div className="grid grid-cols-12 text-xs md:text-[14px] lg:text-[16px]">
                <div className="col-span-2">Address</div>
                <div className="col-span-10 flex gap-2">
                  <span>:</span>
                  {edit ? (
                    <span>{data.data.address}</span>
                  ) : (
                    <textarea
                      rows="2"
                      {...register("address")}
                      className="border-b w-full focus:outline-none focus:ring-0 focus:shadow-sm transition duration-300"
                    />
                  )}
                </div>
              </div>
              <div className="grid grid-cols-12 text-xs md:text-[14px] lg:text-[16px]">
                <div className="col-span-2">Role</div>
                <div className="col-span-10 flex gap-2">
                  <span>:</span>
                  <span>user</span>
                </div>
              </div>
              <div className="grid grid-cols-12 text-xs md:text-[14px] lg:text-[16px]">
                <div className="col-span-2">Register</div>
                <div className="col-span-10 flex gap-2">
                  <span>:</span>
                  <span>{data.data.created_at}</span>
                </div>
              </div>
              <div className="grid grid-cols-12 text-xs md:text-[14px] lg:text-[16px]">
                <div className="col-span-2">Update</div>
                <div className="col-span-10 flex gap-2">
                  <span>:</span>
                  <span>{data.data.updated_at}</span>
                </div>
              </div>
              {!edit && (
                <button
                  type="submit"
                  className="mt-auto bg-red-900 text-white px-4 py-1 text-xs md:text-[14px] lg:text-[16px] rounded shadow-lg hover:bg-red-800 cursor-pointer"
                >
                  Save
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </AdminLayout >
  )
}
export default DetailUser;