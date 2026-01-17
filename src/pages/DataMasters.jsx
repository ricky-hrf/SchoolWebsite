import { useContext, useState } from "react";
import AdminLayout from "../layouts/AdminLayout";
import { ThemeContext } from "../context/ThemeContext";
import { DataSidebar } from "../config/DataSidebar";
import { BiPlus } from "react-icons/bi";
import CreateUser from "../components/fragment/CreateUser";
import ReadUsers from "../components/fragment/ReadUsers";

const DataMasters = () => {
  const { theme } = useContext(ThemeContext);
  const dataUser = [
    { id: 1, menu: "Admin" },
    { id: 2, menu: "Teacher" },
    { id: 3, menu: "Students" },
    { id: 4, menu: "Staff" },
  ]
  const [addUser, setAddUser] = useState(false);

  const handleAddUser = () => {
    setAddUser(true);
  }

  return (
    <AdminLayout >
      <div className={`w-full p-2 ${theme === "light" ? "text-red-900" : "text-white"} relative`}>
        <div className="flex justify-between items-center mb-2 pb-2 border-b">
          <h1 className="text-sm md:text-md lg:text-xl font-semibold">{DataSidebar[1].menu}</h1>
          <form onSubmit={(e) => e.preventDefault()}>
            <div type="button" onClick={handleAddUser} className="flex justify-center items-center gap-2 font-semibold p-[6px] md:p-[8px] lg:p-[12px] text-xs md:text-md lg:text-lg rounded-lg hover:shadow-red-900 shadow-lg cursor-pointer border border-red-700">
              <BiPlus />
              Add User
            </div>
          </form>
          {addUser && (
            <CreateUser setAddUser={setAddUser} />
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
          <div className="col-span-10">
            <ReadUsers />
          </div>
          <div className="md:col-span-2 hidden md:block sticky top-0 h-screen p-4 border-l">
            {dataUser.map((menu) => (
              <div key={menu.id} className="shadow p-2 rounded hover:bg-red-100 cursor-pointer m-2 text-gray-900">
                <span className="text-sm lg:text-[16px] font-semibold">{menu.menu}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}
export default DataMasters;