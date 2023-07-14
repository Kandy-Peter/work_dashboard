import React from "react";
import {
  Collapse,
  Typography,
  IconButton,
  List,
  ListItem,
} from "@material-tailwind/react";
import {
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import NavListMenu from "components/dropdown/ressources_dropdown";
import Logo from "assets/img/dashboards/heri_logo.png";
 
function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1 text-gray-900">
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-normal"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          About Us
        </ListItem>
      </Typography>
      <NavListMenu />
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-normal"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          Pricing
        </ListItem>
      </Typography>
    </List>
  );
}
 
export default function Navbar() {
  const [openNav, setOpenNav] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 1200 && setOpenNav(false)
    );
  }, []);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
  
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
 
  return (
    <div className={`navbar mx-auto px-4 py-1 ${isScrolled ? 'bg-white shadow-md border-none' : ''}`}>
      <div className="flex lg:px-40 items-center justify-between text-cyan-900">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5 lg:ml-2"
        >
          <img src={Logo} alt="logo" className="object-contain h-12 w-12" />
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <div className="hidden gap-2 lg:flex">
          <button className = "bg-none p-[8px] px-12 mr-4 text-cyan-900 transition duration-200 hover:bg-gray-200">
            Sign In
          </button>
          <button
          className="bg-cyan-500 p-[5px] px-[10px] text-white transition duration-200 hover:bg-cyan-600"
          >
            Request Demo
          </button>
        </div>
        <IconButton
          variant="text"
          color="blue-gray"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
        <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
          <button className = "w-full bg-none p-[8px] text-cyan-900 transition duration-200 hover:bg-gray-200 border">
            Sign In
          </button>
          <button
            className="w-full bg-cyan-500 p-[8px] px-[10px] text-white transition duration-200 hover:bg-cyan-600"
          >
            Request Demo
          </button>
        </div>
      </Collapse>
    </div>
  );
}
