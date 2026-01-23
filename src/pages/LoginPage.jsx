import { useNavigate } from "react-router-dom";
import { login } from "../services/authService";
import { useForm } from "react-hook-form";

const LoginPage = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await login(data.email, data.password);
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      alert("email/password salah");
    }
  };

  return (
    <div className="relative w-full h-screen bg-slate-50 grid grid-cols-12 text-red-800 font-serif">
      <div className="hidden md:flex col-span-7 h-full bg-[url('gambar/bg-login.jpg')] bg-cover relative ">
        <div className="absolute top-0 right-0 left-2/3 bottom-0 bg-gradient-to-r from-transparent to-white"></div>
      </div>
      <div className={`col-span-12 md:col-span-5 h-full flex justify-center items-center shadow-xl bg-white`}>
        <div className="absolute top-0 right-0 bottom-0 left-0 lg:left-1/2 flex justify-center items-center">
          <div className="w-100 shadow-2xl bg-white flex flex-col p-4 m-4 rounded-lg">
            <div className="w-full h-10 flex justify-center items-center">
              <span className="text-xl font-bold">Welcome Back!</span>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="w-full mt-4 grid grid-cols-12 gap-5 justify-center items-center">
                {errors.email && (
                  <p className="col-span-12 text-red-600 text-sm">{errors.email.message}</p>
                )}
                <label htmlFor="email" className="col-span-3">Email</label>
                <input
                  type="text"
                  {...register("email", {
                    required: "email wajib diisi",
                  })}
                  className="col-span-9 w-full border focus:ring-2 focus:ring-red-200 rounded focus:outline-none p-1" />


              </div>
              <div className="w-full mt-4 grid grid-cols-12 gap-5 justify-center items-center">
                {errors.password && (
                  <p className="col-span-12 text-red-600 text-sm">{errors.password.message}</p>
                )}
                <label htmlFor="password" className="col-span-3">Password</label>
                <input
                  type="password"
                  {...register("password", {
                    required: "password wajib di isi",
                  })}
                  className="col-span-9 w-full border focus:ring-2 focus:ring-red-200 rounded focus:outline-none p-1" />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-4 border p-2 rounded-full flex justify-center items-center hover:bg-red-900 hover:text-white transition duration-300 cursor-pointer">
                {isSubmitting ? "Loading..." : "Login"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
export default LoginPage;