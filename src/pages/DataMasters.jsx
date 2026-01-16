import { useContext, useState } from "react";
import AdminLayout from "../layouts/AdminLayout";
import { ThemeContext } from "../context/ThemeContext";
import { DataSidebar } from "../config/DataSidebar";
import { BiPlus } from "react-icons/bi";
import CreateUser from "../components/fragment/CreateUser";
import ReadUsers from "../components/fragment/ReadUsers";

const DataMasters = () => {
  const { theme } = useContext(ThemeContext);
  const [addUser, setAddUser] = useState(false);

  const handleAddUser = () => {
    setAddUser(true);
  }

  return (
    <AdminLayout >
      <div className={`w-full p-2 ${theme === "light" ? "text-red-900" : "text-white"} relative`}>
        <div className="flex justify-between items-center mb-2 pb-2 border-b">
          <h1 className="text-sm md:text-md lg:text-lg font-semibold">{DataSidebar[1].menu}</h1>
          <form onSubmit={(e) => e.preventDefault()}>
            <div type="button" onClick={handleAddUser} className="border flex justify-center items-center gap-2 font-semibold p-[6px] md:p-[8px] lg:p-[12px] text-sm md:text-md lg:text-lg rounded-lg hover:bg-red-900 hover:text-white cursor-pointer">
              <BiPlus />
              Tambah Pengguna
            </div>
          </form>
          {addUser && (
            <CreateUser setAddUser={setAddUser} />
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
          <div className="col-span-9">
            <ReadUsers />
          </div>
          <div className="md:col-span-3 hidden md:block sticky top-0 h-screen p-4 border-l"></div>
        </div>
      </div>
    </AdminLayout>
  )
}
export default DataMasters;