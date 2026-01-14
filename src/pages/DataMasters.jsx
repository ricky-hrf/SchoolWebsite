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
        <div className="flex justify-between mb-2 pb-2 border-b">
          <h1 className="text-2xl font-semibold">{DataSidebar[1].menu}</h1>
          <form onSubmit={(e) => e.preventDefault()}>
            <div type="button" onClick={handleAddUser} className="border flex justify-center items-center font-semibold p-2 rounded-lg hover:bg-red-900 hover:text-white cursor-pointer">
              <BiPlus />
              Tambah Pengguna
            </div>
          </form>
          {addUser && (
            <CreateUser setAddUser={setAddUser} />
          )}
        </div>
        <ReadUsers />
      </div>
    </AdminLayout>
  )
}
export default DataMasters;