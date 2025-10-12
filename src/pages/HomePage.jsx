import { useContext } from "react";
import Navbar from "../components/fragment/Navbar";
import { ThemeContext } from "../context/ThemeContext";

const HomePage = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`w-full h-screen mt-20 ${theme === "light" ? "bg-white" : "bg-black"}`}>
      <Navbar />
      <span>
        ini adalah halaman homepage
      </span>
    </div>
  )
}
export default HomePage;