import { HiSearch, HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import { BiSolidBell, BiSolidMessageDetail, BiCaretDown, BiLogInCircle, BiLogOutCircle, BiSearchAlt2, BiMenu } from "react-icons/bi";
import IconStyle from "../atoms/IconStyle";
import { useState, useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import NavbarGuess from "./NavbarGuess";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { user, logout, isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleUserIcon = () => {
    setOpen(!open);
  }

  const handleLogout = () => {
    logout();
    navigate("/");
  }
  return (
    <nav className={`fixed top-0 left-0 right-0 z-1 h-15 md:h-20 ${theme === "light" ? "bg-white text-red-700" : "bg-red-900 text-white"} font-serif`}>
      {isAuthenticated ? (
        <div className="w-full flex md:grid grid-cols-12 h-full shadow">
          <div className="col-span-3 w-full h-full flex justify-between pl-2 md:justify-center items-center">
            <span className="text-md lg:text-2xl font-bold">Seroro Academy</span>
            <div className="h-full flex justify-center items-center px-10 md:hidden">
              <IconStyle nameIcon={<BiSearchAlt2 />} />
            </div>
          </div>
          <div className={`hidden col-span-4 w-full md:flex justify-center items-center ${theme === "light" ? "text-red-800" : "text-white"}`}>
            <div className="relative w-2/3 h-8 rounded-full flex justify-center items-center">
              <input type="text" className="ring-1 focus:outline-none rounded-full h-full w-full pl-10 flex items-center" />
              <HiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-xl" />
            </div>
          </div>
          <div className="hidden col-span-2 lg:flex justify-around gap-4 items-center">
            <div className="w-full flex justify-between">
              <IconStyle nameIcon={<BiSolidBell />} />
              <IconStyle nameIcon={<BiSolidMessageDetail />} />
              <div onClick={toggleTheme} className="">
                {theme === "light" ? (
                  <IconStyle nameIcon={<HiOutlineMoon />} />
                ) : (
                  <IconStyle nameIcon={<HiOutlineSun />} />
                )}
              </div>
            </div>
          </div>
          <div className="relative col-span-5 lg:col-span-3 w-full h-full flex justify-around">
            <div className="lg:hidden flex justify-between gap-4 items-center px-2">
              <IconStyle nameIcon={<BiSolidBell />} />
              <IconStyle nameIcon={<BiSolidMessageDetail />} />
              <div onClick={toggleTheme} className="">
                {theme === "light" ? (
                  <IconStyle nameIcon={<HiOutlineMoon />} />
                ) : (
                  <IconStyle nameIcon={<HiOutlineSun />} />
                )}
              </div>
            </div>
            <div className="flex lg:w-full h-full justify-end items-center pr-2 lg:pr-8 gap-4">
              <div className="hidden lg:flex flex-col items-end">
                <span className="font-semibold text-xs md:text-lg">{user?.name}</span>
                <span className="text-xs md:text-lg">{user?.role}</span>
              </div>
              <div onClick={handleUserIcon} className="border rounded-full h-8 w-8 md:h-10 md:w-10 cursor-pointer">
                <img src={user?.avatar} alt="" className="w-full h-full rounded-full object-cover" />
              </div>
              {open &&
                <div className={`absolute w-48 right-10 rounded-md border ${theme === "light" ? "bg-red-900 border-red-900" : "bg-black"} text-white font-semibold top-15`}>
                  <div className={`p-2 rounded-t-md ${theme === "light" ? "hover:bg-white hover:text-red-900" : "hover:bg-white hover:text-black"} cursor-pointer`}>
                    <span>Profile</span>
                  </div>
                  <div
                    onClick={handleLogout}
                    className={`p-2 rounded-b-md ${theme === "light" ? "hover:bg-white hover:text-red-900" : "hover:bg-white hover:text-black"} flex items-center gap-2 cursor-pointer`}>
                    <BiLogOutCircle />
                    <span>Logout</span>
                  </div>
                </div>
              }
            </div>
          </div>
        </div>
      ) : (
        <NavbarGuess theme={theme} toggleTheme={toggleTheme} />
      )}
    </nav>
  )
}
export default Navbar;