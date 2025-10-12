import { Link, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import AdminLayout from "../layouts/AdminLayout";
import { BiArrowBack, BiEdit, BiSave, BiX } from "react-icons/bi";
import { ThemeContext } from "../context/ThemeContext";

const DetailUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [editedUser, setEditedUser] = useState({});
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("users");
    if (stored) {
      const users = JSON.parse(stored);
      const found = users.find((u) => String(u.id) === String(id));
      setUser(found);
      setEditedUser(found || {});
    }
  }, [id]);

  const handleEdit = () => {
    if (editMode) {
      setEditedUser(user);
    }
    setEditMode(!editMode);
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser({
      ...editedUser,
      [name]: value
    });
  };

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      const stored = localStorage.getItem("users");
      if (stored) {
        const users = JSON.parse(stored);
        const updatedUsers = users.map(u =>
          String(u.id) === String(id) ? editedUser : u
        );
        localStorage.setItem("users", JSON.stringify(updatedUsers));
        setUser(editedUser);
        setEditMode(false);
      }
      setIsSaving(false);
    }, 1000)
  }

  const { theme } = useContext(ThemeContext);

  return (
    <AdminLayout>
      <div className={`${theme === "light" ? "text-red-800" : "text-white"}`}>
        <div className="flex justify-between w-full p-2 rounded-lg shadow-lg">
          <Link to="/user-management" className={`w-8 h-8 flex justify-center items-center rounded-full text-xl ${theme === "light" ? "hover:bg-red-800" : "hover:bg-slate-800"} hover:text-white font-bold border`}>
            <BiArrowBack />
          </Link>
          <div className="flex gap-2">
            {editMode ? (
              <button
                onClick={handleEdit}
                className="border py-1 px-4 mr-4 flex gap-2 justify-center items-center font-bold rounded-md hover:bg-red-800 hover:text-white cursor-pointer">
                <BiX className="text-lg" />
                <span className="text-sm">Batal</span>
              </button>
            ) : (
              <div
                onClick={handleEdit}
                className="border py-1 px-4 mr-4 flex gap-2 justify-center items-center font-bold rounded-md hover:bg-red-800 hover:text-white cursor-pointer">
                <BiEdit className="text-lg" />
                <span className="text-sm">Edit</span>
              </div>
            )}
          </div>
        </div>
        <div className="mt-4 grid grid-cols-12 gap-4">
          <div className={`col-span-4 h-80 p-2`}>
            <div className={`h-full w-full shadow-lg`}>
              <img src={user.avatar} alt={user.avatar} className="h-full w-full object-cover rounded-lg" />
            </div>
          </div>
          <div className={`col-span-8 flex flex-col gap-2 p-2 font-semibold ${editMode ? "shadow-2xl" : ""} rounded-2xl`}>
            <div className="grid grid-cols-12">
              <div className="col-span-2">Nama</div>
              <div className="col-span-10 flex gap-2">
                <span>:</span>
                {editMode ? (
                  <input
                    type="text"
                    name="name"
                    value={editedUser.name || ""}
                    onChange={handleInputChange}
                    className="w-full focus:outline-none border-b px-2"
                  />
                ) : (
                  <span>{user.name}</span>
                )}
              </div>
            </div>
            <div className="grid grid-cols-12">
              <div className="col-span-2">Status</div>
              <div className="col-span-10 flex gap-2">
                <span>:</span>
                {editMode ? (
                  <select
                    name="status"
                    value={editedUser.status || ""}
                    onChange={handleInputChange}
                    className="border-b focus:outline-none px-2 py-1 w-full cursor-pointer"
                  >
                    <option value="Student">Student</option>
                    <option value="Teacher">Teacher</option>
                    <option value="Staff">Staff</option>
                  </select>
                ) : (
                  <span>{user.status}</span>
                )}
              </div>
            </div>
            <div className="grid grid-cols-12">
              <div className="col-span-2">{user.status === "Student" ? "Kelas" : "Jabatan"}</div>
              <div className="col-span-10 flex gap-2">
                <span>:</span>
                {editMode ? (
                  user.status === "Student" ? (
                    <select
                      name="jabatan"
                      value={editedUser.jabatan || ""}
                      onChange={handleInputChange}
                      className="border-b focus:outline-none px-2 py-1 w-full"
                    >
                      <option value="X IPA">X IPA</option>
                      <option value="X IPS">X IPS</option>
                      <option value="XI IPA">XI IPA</option>
                      <option value="XI IPS">XI IPS</option>
                      <option value="XII IPA">XII IPA</option>
                      <option value="XII IPS">XII IPS</option>
                    </select>
                  ) : (
                    <input
                      type="text"
                      name="jabatan"
                      value={editedUser.jabatan || ""}
                      className="w-full focus:outline-none border-b px-2"
                      onChange={handleInputChange}
                    />
                  )
                ) : (
                  <span>{user.jabatan}</span>
                )}
              </div>
            </div>
            <div className={`w-full mt-auto ${editMode ? "flex" : "hidden"} justify-center`}>
              <button
                onClick={handleSave}
                disabled={isSaving}
                className="border py-1 px-4 mr-4 flex gap-2 justify-center items-center font-bold rounded-md hover:bg-red-800 hover:text-white cursor-pointer">
                <BiSave className="text-lg" />
                <span>
                  {isSaving ? "Menyimpan..." : "Save"}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}
export default DetailUser;