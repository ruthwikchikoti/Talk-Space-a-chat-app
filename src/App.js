import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import Chat from './Components/Chat/Chat';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import  Login  from './Components/Login/Login';
function App() {
  const [user, setUser] = useState(null);
  
  return (
    <div className="app">
      {!user ? (
        <Login/>
) : (
        <Router>
          <div className="app__body">
            <Sidebar />
            <Routes>
              <Route path="/" element={<div className="select-chat-placeholder"></div>} />
              <Route path="/chats/:chatId" element={<Chat />} />
            </Routes>
          </div>
        </Router>
      )}
    </div>
  );
}

export default App;
