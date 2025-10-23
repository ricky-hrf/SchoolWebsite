import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const success = login(username, password);
    if (success) {
      navigate("/dashboard");
    } else {
      setError("username / password salah!!");
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
            {error && <p className="text-red-600">{error}</p>}
            <form onSubmit={handleLogin}>
              <div className="w-full mt-4 grid grid-cols-12 gap-5 justify-center items-center">
                <label htmlFor="username" className="col-span-3">Username</label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="col-span-9 w-full border focus:ring-2 focus:ring-red-200 rounded focus:outline-none p-1" required />
              </div>
              <div className="w-full mt-4 grid grid-cols-12 gap-5 justify-center items-center">
                <label htmlFor="password" className="col-span-3">Password</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="col-span-9 w-full border focus:ring-2 focus:ring-red-200 rounded focus:outline-none p-1" required />
              </div>
              <button
                type="submit"
                className="w-full mt-4 border p-2 rounded-full flex justify-center items-center hover:bg-red-900 hover:text-white transition duration-300 cursor-pointer">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
export default LoginPage;