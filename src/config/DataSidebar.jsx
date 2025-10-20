import { BiSolidLayer, BiSolidUserAccount, BiSolidBlanket, BiSolidCalendarCheck, BiSolidMegaphone, BiSolidParty, BiSolidReport, BiSolidNews, BiSolidBrightness } from "react-icons/bi";
import { HiFolderOpen } from "react-icons/hi";

export const DataSidebar = [
  {
    key: "dashboard",
    menu: "Dashboard",
    icon: <BiSolidLayer />,
    link: "/dashboard"
  },
  {
    key: "user",
    menu: "Management Pengguna",
    icon: <BiSolidUserAccount />,
    link: "/user-management"
  },
  {
    key: "data",
    menu: "Data Master",
    icon: <HiFolderOpen />,
    link: "/data-master"
  },
  {
    key: "kurikulum",
    menu: "Kurikulum & Akademik",
    icon: <BiSolidBlanket />,
  },
  {
    key: "absensi",
    menu: "Absensi",
    icon: <BiSolidCalendarCheck />
  },
  {
    key: "pengumuman",
    menu: "Pengumuman & Informasi",
    icon: <BiSolidMegaphone />
  },
  {
    key: "kegiatan",
    menu: "Kegiatan Sekolah",
    icon: <BiSolidParty />,
    link: "/kegiatan-sekolah"
  },
  {
    key: "laporan",
    menu: "Laporan",
    icon: <BiSolidReport />
  },
  {
    key: "komunkasi",
    menu: "Komunikasi",
    icon: <BiSolidNews />
  },
  {
    key: "pengaturan",
    menu: "Pengaturan Sistem",
    icon: <BiSolidBrightness />
  },
]