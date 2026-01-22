import axiosInstance from './axiosInstance';

// endpoint login
export const login = async (email, password) => {
  const response = await axiosInstance.post("/login", { email, password, });

  // simpan token
  localStorage.setItem("token", response.data.token);

  return response.data;
};

export const logout = () => {
  localStorage.removeItem("token");
};