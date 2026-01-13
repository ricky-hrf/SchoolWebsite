import { useContext, useState } from "react";
import { BiChevronLeft, BiChevronRight, BiCaretLeft, BiCaretRight } from 'react-icons/bi';
import Navbar from "../components/fragment/Navbar";
import { ThemeContext } from "../context/ThemeContext";
import IconStyle from "../components/atoms/IconStyle";
import Footer from "../components/fragment/Footer";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Button from "../components/atoms/Button";
import { useEffect } from "react";
import CurrentActivities from "../components/fragment/CurrentActivities";

const HomePage = () => {
  const [filter, setFilter] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const { theme } = useContext(ThemeContext);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
      return response.data;
    },
  });

  useEffect(() => {
    if (data && data.length > 0 && filter === null) {
      setFilter(data[0].userId); // default: kategori pertama
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  useEffect(() => {
    setCurrentPage(1);
  }, [filter]);

  if (isLoading) return <p>memuat data</p>;

  if (isError) return <p>terjadi kesalahan</p>

  const category = [...new Set(data.map(item => item.userId))];

  const barangTampil = filter ? data.filter(item => item.userId === filter) : data;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = barangTampil.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(barangTampil.length / itemsPerPage);


  const handleButton = (kategori) => {
    setFilter(kategori);
  }

  return (
    <div className={`w-full ${theme === "light" ? "bg-white" : "bg-black"}`}>
      <Navbar />
      <div className="relative h-screen w-full">
        <div className="w-full h-full bg-[url('gambar/bg-home.jpg')] bg-cover">
        </div>
        <div className={`absolute inset-0 ${theme === "light" ? "bg-black/30" : "bg-black/70"} flex items-center`}>
          <div className="w-full mx-10 flex justify-between">
            <IconStyle nameIcon={<BiChevronLeft />} />
            <IconStyle nameIcon={<BiChevronRight />} />
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto my-8 text-red-900">
        <div className="mb-8 items-center py-2">
          <h1 className={`text-3xl font-bold ${theme === "light" ? "text-red-900" : "text-white"} `}>Pengumuman</h1>
          <div className="flex flex-wrap gap-4 mt-4">
            {category.map((item, index) => (
              <Button key={index} name={item} handleButton={() => handleButton(item)} />
            ))}
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentItems.map((post) => (
            <div key={post.id} class={`h-64 ${theme === "light" ? "bg-white" : "bg-gray-800"} rounded-xl shadow-md overflow-hidden border-l-4 border-red-500 transition-transform hover:scale-[1.02]`}>
              <div class="p-5">
                <div class="flex justify-between items-start mb-3">
                  <span class="inline-block px-3 py-1 bg-red-100 text-red-700 text-sm font-medium rounded-full">
                    {post.userId}
                  </span>
                  <span class={`text-xs ${theme === "light" ? "text-red-900" : "text-white"} `}>2 jam lalu</span>
                </div>
                <h3 class={`text-xl font-bold ${theme === "light" ? "text-red-900" : "text-white"}  mb-2 line-clamp-2`}>{post.title}</h3>
                <p class="text-gray-600 mb-4 line-clamp-2">
                  {post.body}
                </p>
                <div class="flex justify-between items-center mt-4">
                  <span class="text-sm text-gray-500">
                    <i class="far fa-calendar-alt mr-1"></i> 15 Okt 2025
                  </span>
                  <button class="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center">
                    Baca Selengkapnya
                    <i class="fas fa-chevron-right ml-1 text-xs"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <nav className="flex items-center space-x-2">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-3 py-2 rounded-lg bg-white border text-red-900 hover:bg-gray-100 disabled:opacity-50 cursor-pointer"
            >
              <BiCaretLeft />
            </button>

            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-3 py-2 rounded-lg border ${currentPage === i + 1
                  ? "bg-red-900 text-white"
                  : "bg-white text-red-700 hover:bg-red-900 hover:text-white"
                  } cursor-pointer`}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-3 py-2 rounded-lg bg-white border text-red-900 hover:bg-gray-100 disabled:opacity-50 cursor-pointer"
            >
              <BiCaretRight />
            </button>
          </nav>
        </div>
      </div>
      <CurrentActivities />
      <Footer />
    </div >
  )
}
export default HomePage;