import { BiLogoLinkedin, BiLogoYoutube, BiLogoWhatsapp, BiLogoInstagram, BiLogoFacebook } from 'react-icons/bi';
import { ThemeContext } from '../../context/ThemeContext';
import { useContext } from 'react';
import IconStyle from '../atoms/IconStyle';

const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`relative h-20 ${theme === "light" ? "bg-white text-red-900" : "bg-red-900 text-white"}`}>
      <div className="absolute right-0 left-0 bottom-0 px-10 h-20 border-t  pt-3 md:pt-0 flex flex-col md:flex-row justify-between items-center">
        <div className="flex gap-5 justify-center items-center">
          <IconStyle nameIcon={<BiLogoLinkedin />} />
          <IconStyle nameIcon={<BiLogoYoutube />} />
          <IconStyle nameIcon={<BiLogoWhatsapp />} />
          <IconStyle nameIcon={<BiLogoInstagram />} />
          <IconStyle nameIcon={<BiLogoFacebook />} />
        </div>
        <div className={`font-semibold text-lg ${theme === "light" ? "text-red-900" : "text-white"}`}>
          <span>Copyrigth &copy; 2026. All right reserved.</span>
        </div>
      </div>
    </div>
  )
}
export default Footer;