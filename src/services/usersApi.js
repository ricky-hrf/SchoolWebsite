import axiosInstance from "./axiosInstance";

// endpoint read data users
export const fetchUsers = async () => {
  const res = await axiosInstance.get("/users");
  return res.data;
}

// endpoint create data users
export const createUser = async (data) => {
  const res = await axiosInstance.post("/users", data);
  return res.data;
}

// endpoint update users berdasarkan id
export const getUserById = async (id) => {
  const res = await axiosInstance.get(`/users/${id}`);
  return res.data;
}

export const updateUser = async (id, data) => {
  const res = await axiosInstance.put(`/users/:${id}`, data);
  return res.data;
}

// endpoint hapus users berdasarkan id
export const deleteUserById = async (id) => {
  const res = await axiosInstance.delete(`/users/${id}`);
  return res.data;
}