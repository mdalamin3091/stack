import { Link, useLocation } from "react-router-dom";
import DashboardIcon from "../assets/icons/DashboardIcon";
import Sales from "../assets/icons/Sales";
import UserIcon from "../assets/icons/UserIcon";
import Logo from "../assets/icons/logo";
import { IdashboardSidebarItems } from "../types/authTypes";

export const items: IdashboardSidebarItems[] = [
  {
    icon: <DashboardIcon />,
    title: "Dashboard",
    link: "/dashboard",
  },
  {
    icon: <UserIcon />,
    title: "Users",
    link: "/users",
  },
  {
    icon: <Sales />,
    title: "Sales",
    link: "/sales",
  },
];

const DashboardSidebar = () => {
  const location = useLocation();
  return (
    <div className="col-span-1 border-r border-secondary-50 px-3 py-2 w-full">
      <Logo />
      <div className="flex flex-col gap-3">
        <h2 className="uppercase text-secondary-100 mt-4">Pages</h2>
        {items.map((item) => (
          <Link
            to={item.link}
            className={`h-12 hover:bg-secondary text-secondary-100 px-4 rounded-xl flex items-center justify-start gap-2 ${
              location.pathname === item.link
                ? "bg-secondary"
                : "bg-transparent"
            }`}
          >
            <span>{item.icon}</span>
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DashboardSidebar;
