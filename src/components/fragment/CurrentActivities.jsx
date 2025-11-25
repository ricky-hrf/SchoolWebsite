import { HiOutlineCalendar } from 'react-icons/hi';

const AcademyActivities = () => {
  const activities = [
    {
      id: 1,
      title: "Workshop & Bootcamp",
      created: "25 November 2025",
      avatar: "",
      description: "Pelatihan intensif dengan mentor berpengalaman untuk mengasah skill praktis",
      album: ["bg-red-500", "bg-blue-400", "bg-gray-700", "bg-yellow-300", "bg-purple-600"]
    },
    {
      id: 2,
      title: "Tech Conference",
      created: "23 November 2025",
      avatar: "bg-gradient-to-br from-blue-50 to-cyan-50",
      description: "Event tahunan dengan pembicara dari perusahaan teknologi terkemuka",
      album: ["bg-red-500", "bg-blue-400", "bg-gray-700", "bg-yellow-300", "bg-purple-600"]
    },
    {
      id: 3,
      title: "Hackathon & Competition",
      avatar: "bg-gradient-to-br from-green-50 to-emerald-50",
      description: "Kompetisi inovasi teknologi dengan hadiah menarik dan recognition",
      album: ["bg-red-500", "bg-blue-400", "bg-gray-700", "bg-yellow-300", "bg-purple-600"],
      created: "24 November 2025"
    },
    {
      id: 4,
      title: "Mentorship Program",
      avatar: "bg-gradient-to-br from-orange-50 to-red-50",
      description: "Program pendampingan one-on-one dengan expert di bidangnya",
      album: ["bg-red-500", "bg-blue-400", "bg-gray-700", "bg-yellow-300", "bg-purple-600"],
      created: "20 November 2025"
    }
  ];

  return (
    <section className="py-4 bg-gradient-to-br from-red-600 to-blue-400">
      <div className="container mx-auto">
        <div className="text-center mb-4">
          <h2 className="text-xl md:text-3xl font-bold text-red-950 mb-2">
            Potret Kegiatan Terbaru
          </h2>
        </div>
        <div className="container h-125 gap-5 grid grid-cols-1 sm:grid-cols-12">
          <div className="relative col-span-1 sm:col-span-6 h-full rounded-xl shadow-xl px-8">
            <img src={activities[0].avatar} alt="gambar" className='h-full w-full rounded-xl' />
            <div className="absolute bottom-10 text-xs">
              <span className="">Activity</span>
              <h1 className="font-bold text-md md:text-xl lg:text-2xl">{activities[0].title}</h1>
              <div className="flex gap-2 justify-content-center items-center">
                <span><HiOutlineCalendar /></span>
                <span>{activities[0].created}</span>
              </div>
            </div>
          </div>
          <div className="col-span-1 sm:col-span-6">
            <div className="relative h-full grid grid-cols-2 grid-rows-2 gap-4">
              {activities.slice(1).map((item, index) => (
                <div
                  key={index}
                  className={`relative rounded-xl shadow-xl`}>
                  <img src="test.jpg" alt="test" className='h-full w-full rounded-xl shadow-xl' />
                  <div className="absolute bottom-1 sm:bottom-10 px-4 z-999">
                    <h1 className="font-bold text-sm md:text-md lg:text-lg">{item.title}</h1>
                    <div className="flex gap-2 justify-content-center items-center">
                      <span><HiOutlineCalendar /></span>
                      <span className='text-sm md:text-md lg:text-lg'>{item.created}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademyActivities;