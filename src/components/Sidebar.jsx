import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import {useDarkMode} from '../contexts/DarkModeContext'

function Sidebar({ selectChat }) {
  const { isDarkMode } = useDarkMode();
  
  const recentChats = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Mike Johnson' },
    // Add more recent chats as needed
  ];

  return (
    <div className={`w-1/4 h-full bg-${isDarkMode ? '[#1e1e1e]' : '[#f9fafb]'} text-${isDarkMode ? 'white' : 'black'} p-4 shadow-lg overflow-y-auto`}>
      <div className="text-lg font-semibold mb-4">Recent Chats</div>
      <ul className="space-y-2">
        {recentChats.map(chat => (
          <li 
            key={chat.id}
            className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-200 cursor-pointer"
            onClick={() => selectChat(chat)}
          >
            <FontAwesomeIcon icon={faUserCircle} className="w-8 h-8" />
            <span>{chat.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
