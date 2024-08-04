import React from 'react';
import { Sidebar, Header, MessageWindow } from '../exports';
import  {useDarkMode}  from './contexts/DarkModeContext' 

function App() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();  
  const [selectedChat, setSelectedChat] = React.useState(null);

  const handleChatSelection = (chat) => {
    setSelectedChat(chat);
  };

  return (
    <div className={`flex flex-col h-screen ${isDarkMode ? 'bg-[#1e1e1e]' : 'bg-[#f9fafb]'} transition-colors`}>
      <Header toggleDarkMode={toggleDarkMode} />
      <div className="flex flex-1">
        <Sidebar isDarkMode={isDarkMode} selectChat={handleChatSelection} />
        <MessageWindow selectedChat={selectedChat} />
      </div>
    </div>
  );
}

export default App;
