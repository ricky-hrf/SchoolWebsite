import { useForm } from "react-hook-form";
import { BiX, BiReset, BiPlus } from "react-icons/bi";
import { createUser } from "../../services/usersApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const InsertUser = ({ setAddUser }) => {
  const queryClient = useQueryClient();
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();

  const createMutation = useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      reset();
      setAddUser(false);
    },
    onError: (error) => {
      alert(error.response?.data?.error || "data gagal ditambahkan");
    }
  });

  const onSubmit = (data) => {
    createMutation.mutate(data);
  };

  return (
    <div className="fixed z-1 top-0 bottom-0 right-0 left-0 flex justify-center items-center bg-black/50">
      <div className="flex flex-col justify-center w-[50%] bg-white shadow-xl rounded-xl px-8 py-4 gap-4">
        <div className="flex justify-between items-center">
          <span className="font-semibold text-xl">Add New User</span>
          <div className="w-8 h-8 flex justify-center items-center rounded-full text-2xl hover:bg-red-50 cursor-pointer" onClick={() => setAddUser(false)}><BiX /></div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label htmlFor="nama" className="block text-sm font-medium mb-1">
              Nama Lengkap <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="nama"
              placeholder="Masukkan nama lengkap"
              {...register("fullname", { required: "nama wajib diisi" })}
              className={`w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:border-transparent transition duration-200`}
            />
            {errors.fullname && (
              <p className="text-red-500 text-sm mt-1">{errors.fullname.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              placeholder="contoh@email.com"
              {...register("email", {
                required: "email wajib diisi",
              })}
              className={`w-full px-4 py-2 rounded-lg border  focus:outline-none focus:ring-2 focus:border-transparent transition duration-200`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-1">
              password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              id="password"
              placeholder=""
              {...register("password", {
                required: "password wajib diisi",
              })}
              className={`w-full px-4 py-2 rounded-lg border  focus:outline-none focus:ring-2 focus:border-transparent transition duration-200`}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="address" className="block text-sm font-medium mb-1">
              Alamat Lengkap <span className="text-red-500">*</span>
            </label>
            <textarea
              placeholder="Masukkan alamat lengkap"
              rows="4"
              {...register("address", {
                required: "alamat wajib diisi"
              })}
              className={`w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:border-transparent transition duration-200 resize-none`}
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <button
              type="button"
              onClick={() => reset()}
              className="flex-1 flex justify-center items-center gap-4 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg text-lg font-medium hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 transition duration-200 cursor-pointer"
            >
              <BiReset />
              Reset Form
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-gradient-to-br from-red-500 to-red-900 text-white py-2 px-4 text-lg rounded-lg font-medium hover:from-red-700 hover:to-red-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200 shadow-md cursor-pointer"
            >
              <span className="flex items-center justify-center">
                <BiPlus />
                {isSubmitting ? "menyimpan..." : "Tambah Data"}
              </span>
            </button>

          </div>
        </form>
      </div>
    </div>
  )
}

export default InsertUser;