import React from "react";
import Logo from "./icons/logo";
import { Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full flex justify-between items-center px-[8rem] h-[5rem] max-lg:px-[2rem] max-md:px-[1.5rem] max-sm:px-[1rem]">
      <div className="flex items-center gap-12">
        <div className="flex items-center gap-2">
          <Logo />
          <div className="text-[#25324B] text-2xl font-bold">JobHuntly</div>
        </div>
        <nav className="flex gap-4 justify-center items-center max-md:hidden">
          <a href="#" className="text-[#515B6F] text-base font-medium">
            Find Jobs
          </a>
          <a href="#" className="text-[#515B6F] text-base font-medium">
            Browse Companies
          </a>
          <a href="#" className="text-[#515B6F] text-base font-medium">
            Browse Applications
          </a>
        </nav>
      </div>
      <div className="flex items-center gap-4 max-md:hidden">
        <button className="text-[#4640DE] px-6 py-3 font-bold">Login</button>
        <div className="w-px h-12 bg-[#D6DDEB]" />
        <button className="bg-[#4640DE] text-white px-6 py-3 font-bold">Sign Up</button> 
      </div>
      <button className="sm:hidden">
        <Menu className="h-6 w-6 text-[#25324B]" />
      </button>
    </header>
  );
};

export default Header;
