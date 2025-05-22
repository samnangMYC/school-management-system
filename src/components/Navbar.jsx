import React from 'react';
import { MdMenuOpen } from 'react-icons/md';
import { FiSearch } from 'react-icons/fi';
import { FaMoon, FaRegBell, FaRegCommentDots, FaCog } from 'react-icons/fa';


const NavbarLayout = () => {
  return (
   <div className="fixed top-0 w-full z-40 flex items-center justify-between h-18 px-6 shadow-sm bg-white">

      {/* Left: Logo, Menu & Search */}
      <div className="flex items-center gap-4 flex-grow">
        {/* Logo */}
        <div className="flex items-center w-53 gap-2 flex-shrink-0">
          <img src="https://img.icons8.com/ios-filled/50/8A2BE2/graduation-cap.png" alt="Logo" className="h-8" />
          <span className="text-2xl sm:hidden lg:block font-bold text-purple-600 uppercase">DIU Admin</span>
        </div>

        {/* Menu Icon */}
        <MdMenuOpen size={40} className="text-gray-500 cursor-pointer" />

        {/* Search Bar */}
        <div className="flex items-center bg-gray-100 px-4 py-3 rounded-full w-full max-w-sm">
          <FiSearch size={22} className="text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="ml-2 bg-transparent outline-none w-full text-sm"
          />
        </div>
      </div>

      {/* Right: Icons */}
      <div className="flex items-center gap-4 text-purple-600 text-lg">
        <FaMoon className="cursor-pointer" />
        <div className="relative cursor-pointer">
          <FaRegCommentDots />
          <span className="absolute -top-2 -right-2 text-[10px] bg-purple-600 text-white rounded-full px-1">76</span>
        </div>
        <div className="relative cursor-pointer">
          <FaRegBell />
          <span className="absolute -top-2 -right-2 w-2 h-2 bg-red-500 rounded-full" />
        </div>
        <div className="relative cursor-pointer">
          <FaCog />
          <span className="absolute -top-2 -right-2 text-[10px] bg-purple-600 text-white rounded-full px-1">15</span>
        </div>
        <img
          src="https://randomuser.me/api/portraits/women/44.jpg"
          alt="User"
          className="w-8 h-8 rounded-full object-cover"
        />
      </div>
    </div>
  );
};

export default NavbarLayout;
