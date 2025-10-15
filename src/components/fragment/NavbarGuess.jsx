import { BiCaretDown, BiLogInCircle, BiSearchAlt2, BiMenu, BiX } from "react-icons/bi";
import { HiSearch, HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import IconStyle from "../atoms/IconStyle";
import { Link } from "react-router-dom";
import { useState } from "react";

const NavbarGuess = ({ theme, toggleTheme }) => {
  const [open, setOpen] = useState(false);
  const menu = [
    { name: "Home" }, { name: "Tutorials", icon: <BiCaretDown /> }, { name: "Blogs", icon: <BiCaretDown /> }];

  return (
    <div className="w-full flex md:grid grid-cols-12 h-full shadow">
      <div className="col-span-6 md:col-span-3 w-full h-full flex justify-center items-center">
        <span className="text-lg lg:text-2xl font-bold">Vichristus School</span>
      </div>
      <div className={`hidden col-span-6 lg:col-span-4 w-full md:flex justify-center items-center ${theme === "light" ? "text-red-800" : "text-white"}`}>
        <div className="w-full h-full flex justify-between p-2 gap-2">
          <div className="w-full flex justify-center items-center">
            <span className="px-2 hover:border-b cursor-pointer">Home</span>
          </div>
          <div className="w-full flex justify-center items-center">
            <span className="px-2 hover:border-b cursor-pointer">Courses</span>
            <div className="h-4 w-4 flex justify-center items-center cursor-pointer"><BiCaretDown /></div>
          </div>
          <div className="w-full flex justify-center items-center">
            <span className="px-2 hover:border-b cursor-pointer">Blog</span>
            <div className="h-4 w-4 flex justify-center items-center cursor-pointer"><BiCaretDown /></div>
          </div>
        </div>
      </div>
      <div className="col-span-2 hidden lg:flex justify-around gap-4 items-center">
        <div className="relative w-full h-8 rounded-full flex justify-center items-center">
          <input type="text" className="ring-1 focus:outline-none rounded-full h-full w-full pl-10 flex items-center" />
          <HiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-xl" />
        </div>
      </div>
      <div className="relative col-span-6 md:col-span-3 w-full h-full">
        <div className="flex justify-center items-center gap-4 h-full">
          <div className="h-full w-full flex justify-center items-center lg:hidden">
            <IconStyle nameIcon={<BiSearchAlt2 />} />
          </div>
          <div onClick={toggleTheme} className="flex justify-center w-20">
            {theme === "light" ? (
              <IconStyle nameIcon={<HiOutlineMoon />} />
            ) : (
              <IconStyle nameIcon={<HiOutlineSun />} />
            )}
          </div>
          <div className="hidden lg:flex justify-around font-bold w-full">
            <Link to="/login">
              <button
                className={`w-29 p-2 rounded-lg border ${theme === "light" ? "bg-red-900 text-white hover:bg-white hover:text-red-800" : "bg-white text-red-900 hover:bg-red-900 hover:text-white"} cursor-pointer`}>
                <div className="flex justify-center items-center gap-2 w-full h-full">
                  <BiLogInCircle />Sign In
                </div>
              </button>
            </Link>
            <button className={`w-29 p-2 rounded-lg border ${theme === "light" ? "hover:bg-red-900 hover:text-white" : "hover:bg-white hover:text-gray-900"} cursor-pointer`}>Sign Up</button>
          </div>
          <div onClick={() => setOpen(!open)}
            className="h-full w-full flex justify-center items-center lg:hidden">
            {open === false ? (<IconStyle nameIcon={<BiMenu />} />) : (<IconStyle nameIcon={<BiX />} />)}
          </div>
        </div>
      </div>
      {open && (
        <div className={`absolute top-15 left-0 md:top-20 md:left-3/4 right-0 ${theme === "light" ? "bg-white" : "bg-black"}  p-2 rounded-b`}>
          <div className="md:hidden mb-2">
            {menu.map((item, index) => (
              <div className={`flex justify-between items-center p-2 ${theme === "light" ? "shadow" : "border-b"}`}>
                <div key={index} className="">{item.name}</div>
                <span>{item.icon}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-row md:flex-col w-full gap-4">
            <Link to="/login" className="w-full flex justify-center items-center border rounded-lg bg-red-900 text-white">
              <span className="p-2">Sign In</span>
            </Link>
            <div className="w-full flex justify-center items-center border rounded-lg bg-red-900 text-white">
              <span className="p-2">Sign Up</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
export default NavbarGuess;