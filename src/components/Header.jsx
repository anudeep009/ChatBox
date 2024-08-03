import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={`flex flex-col h-screen w-full ${isDarkMode ? "bg-[#1e1e1e] text-white" : "bg-[#f5f5f5] text-black"}`}>
      <header className="flex items-center justify-between bg-[#6366f1] text-white px-4 py-3 shadow">
        <div className="text-xl font-bold">Chat Box</div>
        <button
          className={`p-2 rounded-full transition-colors ${
            isDarkMode
              ? "bg-white text-[#6366f1] hover:bg-[#6366f1]/80"
              : "bg-[#6366f1] text-white hover:bg-[#6366f1]/80"
          }`}
          onClick={() => setIsDarkMode(!isDarkMode)}
        >
          {isDarkMode ? <FontAwesomeIcon icon={faSun} className="w-5 h-5" /> : <FontAwesomeIcon icon={faMoon} className="w-5 h-5" />}
        </button>
      </header>
      <div className="flex flex-1 overflow-auto">
        <div className={`bg-[#ffffff] text-[#4b5563] w-64 border-r ${isDarkMode ? "border-[#2d3748]" : "border-[#e5e7eb]"}`}>
          <div className="px-4 py-3 border-b">
            <input
              type="text"
              placeholder="Search users"
              className={`w-full px-3 py-2 rounded-md bg-[#f3f4f6]/10 border-none focus:outline-none focus:ring-2 focus:ring-[#6366f1] ${
                isDarkMode ? "text-[#f3f4f6] placeholder-[#f3f4f6]/50" : "text-[#4b5563] placeholder-[#4b5563]/50"
              }`}
            />
          </div>
        </div>
        <div className="flex-1 p-4">
          {/* Chat content will go here */}
        </div>
      </div>
    </div>
  );
}

export default Header;
