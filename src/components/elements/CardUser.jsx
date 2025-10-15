import { BiSolidTrash, BiError, BiX, BiSolidEditAlt } from "react-icons/bi";
import IconStyle from "../atoms/IconStyle";
import { useState } from "react";
import ModalConfirm from "./ModalConfirm";
import { Link } from "react-router-dom";

const CardUser = ({ data, handleDelete }) => {
  const [confirm, setConfirm] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
      {data.map((lists) => (
        <div
          key={lists.id}
          className="w-full flex justify-between gap-2 rounded-2xl shadow-lg p-2 border"
        >
          <div className="flex gap-2">
            <div
              onClick={() => setSelectedUser(lists)}
              className="h-12 w-12 rounded-full border shadow-lg cursor-pointer"
            >
              <img
                src={lists.avatar}
                alt={lists.name}
                className="h-full w-full object-cover rounded-full"
              />
            </div>
            <div className="flex flex-col">
              <Link
                to={`/user-management/${lists.id}`}
                className="text-md font-semibold hover:underline cursor-pointer"
              >
                {lists.name}
              </Link>
              <span className="text-xs">{lists.jabatan}</span>
            </div>
          </div>

          <div
            onClick={() => setConfirm(true)}
            className="flex items-center text-xl cursor-pointer"
          >
            <IconStyle nameIcon={<BiSolidTrash />} />
          </div>
          {confirm && (
            <ModalConfirm
              icon={<BiError />}
              message={`Apakah Yakin Ingin Menghapus?`}
              action={() => {
                handleDelete(lists.id);
                setConfirm(false);
              }}
              close={() => setConfirm(false)}
            />
          )}

        </div>
      ))}
      {selectedUser && (
        <div className="absolute inset-0 bg-black/30 rounded-lg z-50">
          <div className="relative flex justify-center items-center p-4 h-full">
            <div className="relative flex flex-col justify-center bg-gray-800 shadow-lg rounded-md w-[30rem] p-5 border border-white">
              <div
                onClick={() => setSelectedUser(null)}
                className="absolute top-4 right-4 h-8 w-8 text-white flex justify-center items-center rounded-full hover:bg-gray-500 cursor-pointer"
              >
                <BiX className="text-2xl" />
              </div>
              <div className="mb-3 flex gap-2 justify-center">
                <Link
                  to={`/user-management/${selectedUser.id}`}
                  className="text-xl font-bold text-red-100 hover:text-white hover:underline cursor-pointer">{selectedUser.name}</Link>
              </div>
              <div className="h-40 md:h-80 w-full flex justify-center">
                <div className="w-40 md:w-80 h-full">
                  <img
                    src={selectedUser.avatar}
                    alt={selectedUser.name}
                    className="w-full h-full object-cover rounded-full border border-white"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardUser;
