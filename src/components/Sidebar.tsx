import Link from "next/link";
import {
  IoCompassOutline,
  IoHomeOutline,
  IoPaperPlaneOutline,
  IoSearchOutline,
} from "react-icons/io5";

const navLinks = [
  {
    id: 1,
    label: "Home",
    link: "/",
    icon: <IoHomeOutline className="h-6 w-6" />,
  },
  {
    id: 2,
    label: "Search",
    link: "/search",
    icon: <IoSearchOutline className="h-6 w-6" />,
  },
  {
    id: 3,
    label: "Explore",
    link: "/explore",
    icon: <IoCompassOutline className="h-6 w-6" />,
  },
  {
    id: 4,
    label: "Messages",
    link: "/messages",
    icon: <IoPaperPlaneOutline className="h-6 w-6" />,
  },
];

export default function Sidebar() {
  return (
    <aside className="border-r border-gray-600 px-6 pr-24 pt-8">
      <h1 className="text-xl font-bold">Instagram</h1>
      <nav className="mt-12 flex flex-col gap-y-6">
        {navLinks.map((navLink) => (
          <Link
            key={navLink.id}
            href={navLink.link}
            className="flex w-full items-center gap-3 rounded-full px-3 py-2 hover:bg-gray-950"
          >
            {navLink.icon}
            <span>{navLink.label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
