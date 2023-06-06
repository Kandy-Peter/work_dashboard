/* eslint-disable */

import { HiX } from "react-icons/hi";
import Links from "./components/Links";
import routes from "routes";
import Logo from "assets/img/dashboards/dash_logo.svg";
import WhiteLogo from "assets/img/dashboards/dash_logo_white.svg";
import { useApi } from "utils/api";

const Sidebar = (props: {
  open: boolean;
  onClose: React.MouseEventHandler<HTMLSpanElement>;
}) => {
  const { open, onClose } = props;
  const { logout } = useApi();

  const logo = document.body.classList.contains("dark") ? WhiteLogo : Logo;

  return (
    <div
      className={`sm:none duration-175 linear fixed !z-50 flex min-h-full flex-col bg-white pb-10 shadow-2xl shadow-white/5 transition-all dark:!bg-sky-800 dark:text-white md:!z-50 lg:!z-50 xl:!z-0 ${
        open ? "translate-x-0" : "-translate-x-96"
      }`}
    >
      <span
        className="absolute top-4 right-4 block cursor-pointer xl:hidden"
        onClick={onClose}
      >
        <HiX />
      </span>

      <div className={`mx-[56px] mt-[50px] flex items-center`}>
        <div className="flex mt-1 ml-1 h-2.5 font-poppins text-[26px] font-bold uppercase text-sky-700 dark:text-white">
          <img src={logo} alt="logo" className="object-fit h-10" />
        </div>
      </div>
      <div className="mt-[58px] mb-7 h-px bg-gray-300 dark:bg-white/30" />
      {/* Nav item */}

      <ul className="mb-auto pt-1">
        <Links routes={routes} />
      </ul>
      <div className="flex justify-center">
        <button
          className="mt-4 w-32 rounded-xl bg-orange-400 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-orange-600 active:bg-orange-700 dark:bg-orange-400 dark:text-white dark:hover:bg-orange-300 dark:active:bg-orange-200"
          onClick={logout}
        >

          Logout
        </button>
      </div>

      {/* Nav item end */}
    </div>
  );
};

export default Sidebar;
