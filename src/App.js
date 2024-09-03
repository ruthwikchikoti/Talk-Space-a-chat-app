import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import Chat from './Components/Chat/Chat';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  Login  from './Components/Login/Login';
import { useStateValue } from './StateProvider';
function App() {
  const [{user}, dispatch] = useStateValue();
  
  return (
    <div className="app">
      {!user ? (
        <Login dispatch={dispatch}/>
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

