import { BiArrowToLeft, BiArrowToRight } from 'react-icons/bi';
import { Link, useLocation } from "react-router-dom";
import { DataSidebar } from "../../config/DataSidebar";
import { ThemeContext } from '../../context/ThemeContext';
import { useContext } from 'react';

const Sidebar = ({ handleSidebar, openSidebar }) => {
  const location = useLocation();
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`${openSidebar === true ? "w-64" : "w-10"} sticky top-20 flex h-138 flex-col justify-between pt-2 text-white transition-all duration-300`}>
      <div className="flex justify-end text-red-50 mr-2">
        <div
          onClick={handleSidebar}
          className={`cursor-pointer h-8 w-8 rounded-full flex justify-center items-center   ${theme === "light" ? "hover:bg-white hover:text-red-800" : "text-black hover:bg-black hover:text-white"} `}>
          {openSidebar === true ? (
            <BiArrowToLeft className="text-2xl" />
          ) : (
            <BiArrowToRight className="text-2xl" />
          )}
        </div>
      </div>
      {DataSidebar.map((menu) => (
        <Link
          to={menu.link}
          key={menu.key}
          className={`p-3 pl-2 ${theme === "light" ? "hover:bg-white hover:text-red-800" : "hover:bg-black hover:text-white"} ${location.pathname === menu.link || (menu.link === "/user-management" && location.pathname.startsWith("/user-management/")) ? ` ${theme === "light" ? "bg-white text-red-800" : "bg-black text-white"}` : `${theme === "light" ? "text-white" : "text-black"}`} cursor-pointer`}>
          <div className="flex gap-1 items-center">
            <span className="mr-2 text-xl">
              {menu.icon}
            </span>
            <span className={`${openSidebar === true ? "block" : "hidden"} font-semibold text-sm`}>{menu.menu}</span>
          </div>
        </Link>
      ))}
    </div>
  )
}
export default Sidebar;