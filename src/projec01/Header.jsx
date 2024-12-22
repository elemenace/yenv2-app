import React from "react";
import { NavLink } from "react-router";

function Header() {
  return (
    <div className="bg-black p-1 top-0 w-full sticky flex items-center justify-between z-50 ">
      {/* Left side: Logo */}
      <img src="\public\spyyyyy.png" alt="PUBG Logo" className="h-20 w-auto" />

      {/* Right side: Navigation Links */}
      <div className="flex items-center space-x-4">
        <NavLink to="/" className="text-white hover:text-gray-400">
          Home
        </NavLink>
        <NavLink to="/about" className="text-white hover:text-gray-400">
          About
        </NavLink>
        <NavLink to="/pictures" className="text-white hover:text-gray-400">
          Pictures
        </NavLink>

        <NavLink to="/login" className="text-white hover:text-gray-400">
          Log In
        </NavLink>

        <NavLink to="/signup" className="text-white hover:text-gray-400">
          Sign up
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
