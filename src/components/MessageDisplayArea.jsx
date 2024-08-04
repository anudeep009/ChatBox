import React from 'react';
import { useDarkMode } from '../contexts/DarkModeContext';

function MessageDisplayArea({ messages }) {
  const { isDarkMode } = useDarkMode();

  return (
    <div
      className={`flex-1 p-4 overflow-y-auto ${isDarkMode ? 'bg-[#2d2d2d] text-white' : 'bg-white text-black'}`}
    >
      {messages.length === 0 ? (
        <div className="text-gray-500">No messages yet.</div>
      ) : (
        <div className="space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`p-2 rounded-md ${isDarkMode ? 'bg-[#3b3b3b]' : 'bg-gray-100'} ${index % 2 === 0 ? 'text-left' : 'text-right'}`}
            >
              <p>{message.text}</p>
              <span className="text-xs text-gray-500">{message.timestamp}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MessageDisplayArea;
