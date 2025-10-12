import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const IconStyle = ({ nameIcon }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`h-8 w-8 border text-2xl flex items-center justify-center rounded-full ${theme === "light" ? "border-red-800 text-red-800 hover:bg-red-800 hover:text-white" : "border-white text-white hover:bg-white hover:text-black"} cursor-pointer`}>
      {nameIcon}
    </div>
  )
}
export default IconStyle;