import { useContext } from "react";
import {
  BiChevronLeft, BiChevronRight, BiLogoLinkedin, BiLogoYoutube, BiLogoWhatsapp, BiLogoInstagram, BiLogoFacebook,
} from 'react-icons/bi';
import Navbar from "../components/fragment/Navbar";
import { ThemeContext } from "../context/ThemeContext";
import IconStyle from "../components/atoms/IconStyle";

const HomePage = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`w-full ${theme === "light" ? "bg-white" : "bg-black"}`}>
      <Navbar />
      <div className="relative h-screen w-full">
        <div className="w-full h-full bg-[url('./gambar/school1.jpg')] bg-cover">
        </div>
        <div className={`absolute inset-0 ${theme === "light" ? "bg-black/50" : "bg-black/70"} flex items-center`}>
          <div className="w-full mx-10 flex justify-between">
            <IconStyle nameIcon={<BiChevronLeft />} />
            <IconStyle nameIcon={<BiChevronRight />} />
          </div>
        </div>
      </div>
      <div className={`p-10 font-serif ${theme === " light" ? "text-red-900" : "text-white"}`}>
        <div className={`w-full flex justify-between items-center font-semibold  mb-2`}>
          <span className={`text-lg ${theme === "light" ? "text-red-900" : "text-white"}`}>Pengumuman</span>
          <div className={`h-full border py-2 px-4 flex justify-center items-center rounded-full cursor-pointer ${theme === "light" ? "bg-red-900 text-white hover:bg-white hover:text-red-900" : "bg-white text-black hover:bg-black hover:text-white"}`}>
            <span className="text-sm">View More</span>
          </div>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-4">
          <div className="border h-80 w-full rounded-lg shadow-xl bg-[url('./gambar/bg-annoucment1.jpg')] bg-cover cursor-pointer"></div>
          <div className="border h-80 w-full rounded-lg shadow-xl bg-[url('./gambar/bg-annoucment2.jpg')] bg-cover cursor-pointer"></div>
          <div className="border h-80 w-full rounded-lg shadow-xl bg-[url('./gambar/bg-annoucment3.jpg')] bg-cover cursor-pointer"></div>
        </div>
      </div>
      <div className={`relative h-screen ${theme === "light" ? "bg-white text-red-900" : "bg-red-900 text-white"}`}>
        <div className="absolute right-0 left-0 bottom-0 px-10 h-20 border-t  pt-3 md:pt-0 flex flex-col md:flex-row justify-between items-center">
          <div className="flex gap-5 justify-center items-center">
            <IconStyle nameIcon={<BiLogoLinkedin />} />
            <IconStyle nameIcon={<BiLogoYoutube />} />
            <IconStyle nameIcon={<BiLogoWhatsapp />} />
            <IconStyle nameIcon={<BiLogoInstagram />} />
            <IconStyle nameIcon={<BiLogoFacebook />} />
          </div>
          <div className={`font-semibold text-lg ${theme === "light" ? "text-red-900" : "text-white"}`}>
            <span>Copyrigth &copy; 2025. All right reserved.</span>
          </div>
        </div>
      </div>
    </div>
  )
}
export default HomePage;