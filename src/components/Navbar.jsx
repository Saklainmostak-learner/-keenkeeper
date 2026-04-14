import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";
import Logo2 from "../assets/keenkeeper.png";
import { Clock3, House,  ChartNoAxesColumn } from "lucide-react";

const navItems = [
  { name: "Home", path: "/", icon: House },
  { name: "Timeline", path: "/timeline", icon: Clock3 },
  { name: "Stats", path: "/stats", icon:  ChartNoAxesColumn },
];

const Navbar = () => {
  return (
    <header className="top-0 z-50 border-b border-[#E9E9E9] bg-[#FFFFFF] backdrop-blur sticky">
      <div className="mx-auto flex h-15 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 ">
        <div className="flex items-center gap-3">
          <img
            src={Logo2}
            alt="keen-keeper-logo"
            className="h-10 w-auto object-contain"
          />
        </div>
        <nav className="flex items-center gap-2 p-2 ">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  `inline-flex items-center items gap-2 rounded-sm px-4 py-2 text-sm font-semibold transition-all duration-100 leading-none ${isActive?"bg-[#1f5f4a] text-white shadow-sm":"text-[#64748B] hover:bg-slate-100 hover:text-slate-800"}`
                }
              >
                <Icon size={16} className="shrink-0 translate-y-px"/>
                <span>{item.name}</span>
              </NavLink>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
