import React from 'react';

function MessageWindow({ selectedChat }) {
  if (!selectedChat) {
    return <div className="flex-1 p-4 text-gray-500">Select a chat to start messaging.</div>;
  }

  return (
    <div className="flex-1 p-4 bg-white border-l border-gray-200">
      <div className="text-xl font-semibold mb-4">{selectedChat.name}</div>
      {/* Add chat messages and input field here */}
    </div>
  );
}

export default MessageWindow;
