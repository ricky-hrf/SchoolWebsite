import AdminLayout from "../layouts/AdminLayout";
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";
import { DataSidebar } from "../config/DataSidebar";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Event = () => {
  const { theme } = useContext(ThemeContext);
  const { data, isLoading, isError } = useQuery({
    queryKey: ["todos"],
    queryFn: async () => {
      const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
      return response.data;
    },
  });

  if (isLoading) return <p>memuat data</p>;

  if (isError) return <p>terjadi kesalahan</p>

  return (
    <AdminLayout>
      <div className={`w-full p-2 ${theme === "light" ? "text-red-900" : "text-white"} `}>
        <h1 className="text-2xl font-semibold mb-2 pb-2 border-b">{DataSidebar[6].menu}</h1>
        {data.map((todos) => (
          <div key={todos.id} className="border">
            <ul>
              <li>{todos.title}</li>
            </ul>
          </div>
        ))}
      </div>
    </AdminLayout>
  )
}
export default Event;