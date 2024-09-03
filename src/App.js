import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import Chat from './Components/Chat/Chat';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <div className="app__body">
        <Router>
          <Sidebar />
          <Routes>
            <Route path="/" element={<div className="select-chat-placeholder"></div>} />
            <Route path="/chats/:chatId" element={<Chat />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;