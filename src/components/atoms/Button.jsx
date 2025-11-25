import { ThemeContext } from "../../context/ThemeContext";
import { useContext } from "react";

const Button = ({ name, handleButton }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <button
      onClick={handleButton}
      className={`w-25 h-10 font-semibold ${theme === "light" ? "bg-red-900 text-white hover:bg-red-800" : "bg-white text-red-900"} rounded-full  transition-colors cursor-pointer`}>
      {name}
    </button>
  )
}
export default Button;