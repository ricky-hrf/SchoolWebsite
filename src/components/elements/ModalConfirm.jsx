import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const ModalConfirm = ({ icon, message, action, close }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`absolute inset-0 bg-black/10 ${theme === "light" ? "text-red-800" : "text-slate-900"} z-1`}>
      <div className="relative flex justify-center items-center p-4 h-full">
        <div className="relative flex flex-col justify-center gap-2 bg-white shadow-lg rounded-md w-80 px-2 py-5">
          <div className="flex justify-center text-xl font-bold">
            {icon}
          </div>
          <div className="flex justify-center text-center font-semibold">
            {message}
          </div>
          <div className="flex justify-around">
            <div
              onClick={close}
              className="p-2 border h-8 w-20 flex justify-center items-center rounded font-semibold hover:bg-red-900 hover:text-white cursor-pointer">
              Cancel
            </div>
            <div onClick={action} className="p-2 border h-8 w-20 flex justify-center items-center rounded font-semibold hover:bg-red-900 hover:text-white cursor-pointer">
              Yes
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ModalConfirm;