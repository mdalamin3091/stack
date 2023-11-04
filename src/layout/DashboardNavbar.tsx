import SearchIcon from "../assets/icons/SearchIcon";
import Notification from "../assets/icons/Notification";
import avatar from "../assets/images/avatar.png";
import LogoutIcon from "../assets/icons/LogoutIcon";
import { logOut } from "../redux/features/auth/authSlice";
import { useAppDispatch } from "../redux/app/hooks";

const DashboardNavbar = () => {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(logOut());
  };

  return (
    <nav className="flex items-center justify-between gap-4">
      <div
        className={`bg-secondary rounded-xl h-14 flex items-center justify-start px-3 basis-1/2`}
      >
        <input
          className="w-full p-2 outline-none focus:outline-none text-secondary-100 bg-secondary"
          type="text"
          name="search"
          placeholder="Search"
        />
        <SearchIcon />
      </div>
      <div className="flex items-center justify-end gap-10">
        <span className="cursor-pointer">
          <Notification />
        </span>

        <span className="cursor-pointer" onClick={handleLogout}>
          <LogoutIcon />
        </span>

        <img
          src={avatar}
          alt="avatar"
          className="rounded-full cursor-pointer"
        />
      </div>
    </nav>
  );
};

export default DashboardNavbar;
