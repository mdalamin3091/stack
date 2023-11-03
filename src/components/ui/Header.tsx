import DownArrow from "../../assets/icons/DownArrow";
import Logo from "../../assets/icons/logo";

const Header = () => {
  return (
    <header className="header py-4">
      <nav className="container flex items-center justify-between">
        <Logo />
        <div className="relative inline-flex">
          <div className="top-5 right-4 absolute">
            <DownArrow />
          </div>
          <select className="bg-secondary rounded-full h-11 pl-5 pr-10  focus:outline-none appearance-none text-sm text-secondary-100">
            <option value="english-uk">English (UK)</option>
            <option value="bengali">Bengali</option>
          </select>
        </div>
      </nav>
    </header>
  );
};

export default Header;
