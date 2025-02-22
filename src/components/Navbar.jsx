import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white px-6 py-4 flex justify-between items-center">
      {/* Left: Logo & App Name */}
      <div className="flex items-center space-x-2">
        <span className="text-2xl">🏋️</span>
        <h1 className="text-xl font-bold">XP Gain</h1>
      </div>

      {/* Right: Navigation Links */}
      <ul className="flex space-x-6">
        <li className="hover:text-gray-300 cursor-pointer">Workout</li>
        <li className="hover:text-gray-300 cursor-pointer">Progress</li>
        <li className="hover:text-gray-300 cursor-pointer">About Us</li>
      </ul>
    </nav>
  );
};

export default Navbar;
