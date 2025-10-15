import { BiSolidUserPlus, BiMenu } from "react-icons/bi";
import AdminLayout from "../layouts/AdminLayout";
import { DataSidebar } from "../config/DataSidebar";
import { useState, useEffect, useContext } from "react";
import { UserData } from "../config/UserData";
import CardUser from "../components/elements/CardUser";
import Modal from "../components/fragment/ModalAddUser";
import { ThemeContext } from "../context/ThemeContext";
import IconStyle from "../components/atoms/IconStyle";

const UserPage = () => {
  const dataUser = [
    { id: 1, menu: "Admin" },
    { id: 2, menu: "Teacher" },
    { id: 3, menu: "Students" },
    { id: 4, menu: "Staff" },
  ]

  const [menuActive, setMenuActive] = useState(1);
  const [openModal, setOpenModal] = useState(false);
  const [data, setData] = useState(() => {
    const saved = localStorage.getItem("users");
    return saved ? JSON.parse(saved) : UserData;
  });

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(data));
  }, [data]);

  const handleAddUser = () => {
    setOpenModal(true);
  }

  const handleClose = () => {
    setOpenModal(false)
  }

  const handleDelete = (id) => {
    const newData = data.filter((item) => item.id !== id);
    setData(newData);
  }

  const { theme } = useContext(ThemeContext);
  const [open, setOpen] = useState(false);

  return (
    <AdminLayout>
      <div className={`w-full  p-2 ${theme === "light" ? "text-red-800" : "text-white"} relative`}>
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold mb-2 pb-2">{DataSidebar[1].menu}</h1>
          <div onClick={() => setOpen(!open)} className="md:hidden">
            <IconStyle nameIcon={<BiMenu />} />
          </div>
        </div>
        <div onClick={handleAddUser} className={`md:hidden border p-1 flex justify-center items-center gap-1 rounded-lg ${theme === "light" ? "bg-red-800 text-white hover:bg-white hover:text-red-800" : "bg-white text-slate-800 hover:bg-slate-900 hover:text-white"} shadow-2xl px-4`}>
          <BiSolidUserPlus className="text-xl" />
          <span className="font-bold">Add User</span>
        </div>
        <div className="hidden border-t-2 mb-2 md:flex justify-between rounded">
          <div className={`flex ${theme === "light" ? "bg-red-900" : ""} text-white`}>
            {dataUser.map((menu) => (
              <div
                key={menu.id}
                onClick={() => setMenuActive(menu.id)}
                className={`w-24 p-2 flex justify-center ${menuActive === menu.id ? `bg-white  ${theme === "light" ? "text-red-800" : "text-gray-900"}` : ""} hover:bg-white ${theme === "light" ? "hover:text-red-800" : "hover:text-gray-900"} cursor-pointer`}>
                <span className="font-semibold">{menu.menu}</span>
              </div>
            ))}
          </div>
          <div className="mr-4 p-1 cursor-pointer">
            <div onClick={handleAddUser} className={`border p-1 flex items-center gap-1 rounded-lg ${theme === "light" ? "bg-red-800 text-white hover:bg-white hover:text-red-800" : "bg-white text-slate-800 hover:bg-slate-900 hover:text-white"}  shadow-2xl px-4`}>
              <BiSolidUserPlus className="text-xl" />
              <span className="font-bold">Add User</span>
            </div>
          </div>
        </div>
        <div className="p-2">
          {menuActive === 1 &&
            <CardUser data={data.filter((item) => item.role === "admin")} handleDelete={handleDelete} />
          }
          {menuActive === 2 &&
            <CardUser data={data.filter((item) => item.status === "Teacher")} handleDelete={handleDelete} />
          }
          {menuActive === 3 &&
            <CardUser data={data.filter((item) => item.status === "Student")} handleDelete={handleDelete} />
          }
          {menuActive === 4 &&
            <CardUser data={data.filter((item) => item.status === "Staff")} handleDelete={handleDelete} />
          }
        </div>
        {open && (
          <div className="bg-white border left-0 right-0 top-12 absolute top-0 mx-2 p-2 rounded">
            <div className="flex justify-center">
              {dataUser.map((menu) => (
                <div
                  key={menu.id}
                  onClick={() => { setMenuActive(menu.id); setOpen(false) }}
                  className={`w-24 p-2 flex justify-center ${menuActive === menu.id ? `bg-white border-r ${theme === "light" ? "text-red-800" : "text-gray-900 border-r"}` : "text-red-900 border-l"} hover:bg-white ${theme === "light" ? "hover:text-red-800" : "hover:text-gray-900"} border-l cursor-pointer`}>
                  <span className="font-semibold">{menu.menu}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {openModal && (
        <Modal action={handleClose} data={data} setData={setData} />
      )}

    </AdminLayout>
  )
}

export default UserPage;