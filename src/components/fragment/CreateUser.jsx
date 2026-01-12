import axios from "axios";
import FormModal from "../elements/FormModal";

const InsertUser = ({ setAddUser, addUser, onSuccess }) => {

  const onSubmit = async (data) => {
    try {
      await axios.post("http://localhost:3000/users", data);
      onSuccess();
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.error || "data berhasil ditambahkan");
    }
  }
  return (
    < FormModal action={setAddUser} data={addUser} onSubmit={onSubmit} />
  )
}

export default InsertUser;