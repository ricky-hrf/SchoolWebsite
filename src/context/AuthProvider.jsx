import { useState } from "react"
import { AuthContext } from "./AuthContext";
import { UserData } from "../config/UserData";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (username, password) => {
    const foundUser = UserData.find(
      (u) => u.username === username && u.password === password
    );

    if (foundUser) {
      setUser(foundUser);
      return true;
    }
    return false;
  };

  const logout = () => setUser(null);

  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}