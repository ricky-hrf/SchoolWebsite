import { useState } from "react";
import { BiX, BiChevronDown, BiChevronUp } from "react-icons/bi";

const Modal = ({ action, data, setData }) => {
  const [pilihStatus, setPilihStatus] = useState(false);
  const [pilihan, setPilihan] = useState("");
  const [formData, setFormData] = useState(
    {
      status: "",
      name: "",
      jabatan: "",
    }
  );

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value, });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      id: data.length + 1,
      role: "user",
      ...formData,
    };
    setData([...data, newUser]);
    setFormData({ status: "", name: "", jabatan: "" });
    action();
  }

  return (
    <div className="absolute inset-0 bg-black/50 text-red-800 rounded-lg z-1">
      <div className="relative flex justify-center items-center p-4 h-full">
        <div className="relative flex flex-col justify-center bg-white shadow-lg rounded-md w-1/2 p-5">
          <div className="text-xl font-bold">
            <span>Add User</span>
          </div>
          <form action="" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2 justify-centerw-full py-2">
              <div className="w-full grid grid-cols-12 px-2 items-center">
                <label className="col-span-2 font-semibold" htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="input name ..."
                  className="col-span-10 py-1 px-4 border-b text-md font-semibold border-red-800 focus:outline-none placeholder-red-300 placeholder:italic bg-white  text-red-800 autofill" />
              </div>
              <div className="w-full grid grid-cols-12 px-2 items-center">
                <label className="col-span-2 font-semibold" htmlFor="status">Status</label>
                <div className="relative col-span-10 py-1 border-b border-red-800 flex justify-between rounded-t-lg">
                  <span className="text-red-800">{pilihan ? `${pilihan}` : "---select status---"}</span>
                  <span onClick={() => setPilihStatus(!pilihStatus)} className="h-6 w-8 flex justify-center items-center hover:bg-red-100 cursor-pointer">
                    {pilihStatus === true ? (
                      <BiChevronUp className="font-bold text-2xl" />
                    ) : (
                      <BiChevronDown className="font-bold text-2xl" />
                    )}
                  </span>
                  {pilihStatus && (
                    <div className="absolute w-full left-0 top-8 border col-span-10 bg-white text-red-800 border-red-800 py-1 rounded-b-lg px-2">
                      <div
                        className="hover:bg-red-100 cursor-pointer"
                        data-value="Teacher"
                        onClick={(e) => {
                          setPilihan(e.currentTarget.dataset.value);
                          setPilihStatus(false);
                          setFormData({ ...formData, status: e.currentTarget.dataset.value });
                        }}>
                        Teacher
                      </div>
                      <div className="hover:bg-red-100 cursor-pointer"
                        data-value="Student"
                        onClick={(e) => {
                          setPilihan(e.currentTarget.dataset.value);
                          setPilihStatus(false);
                          setFormData({ ...formData, status: e.currentTarget.dataset.value });
                        }}
                      >
                        Student
                      </div>
                      <div className="hover:bg-red-100 cursor-pointer"
                        data-value="Staff"
                        onClick={(e) => {
                          setPilihan(e.currentTarget.dataset.value);
                          setPilihStatus(false);
                          setFormData({ ...formData, status: e.currentTarget.dataset.value });
                        }}>
                        Staff
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="w-full grid grid-cols-12 px-2 items-center">
                <label className="col-span-2 font-semibold" htmlFor="jabatan">Jabatan</label>
                <input name="jabatan" value={formData.jabatan} onChange={handleChange} id="jabatan" type="text" className="col-span-10 py-1 px-4 border-b border-red-800 focus:outline-none placeholder-red-300 placeholder:italic bg-white  text-red-800 autofill" placeholder="input Jabatan ..." />
              </div>
              <div className="w-full flex justify-center items-center gap-2 py-2">
                <div onClick={action} className="w-full text-red-800 p-1 rounded-full font-bold cursor-pointer hover:bg-red-900 hover:text-white flex justify-center items-center text-md border">
                  <span>CANCEL</span>
                </div>
                <button type="submit" className="w-full text-red-800 p-1 rounded-full font-bold cursor-pointer hover:bg-red-900 hover:text-white flex justify-center items-center text-md border">
                  <span>SAVE</span>
                </button>
              </div>
            </div>
          </form>
          <div onClick={action} className="absolute right-2 top-2 border font-bold text-red-800 text-xl hover:bg-red-800 hover:text-white cursor-pointer p-2 rounded-full">
            <BiX />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Modal;