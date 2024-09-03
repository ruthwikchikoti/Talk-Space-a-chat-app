import React, { useEffect, useState } from 'react'
import './Chat.css'
import { Avatar, IconButton } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InsertEmotionIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';
import { useParams } from 'react-router-dom';
import db, { doc, onSnapshot } from '../../firebase';
function Chat() { 
  const [input, setInput] = useState('');
  const [chatName, setChatName] = useState('');
  const { chatId } = useParams();

  useEffect(() => {
    if (chatId) {
      const unsubscribe = onSnapshot(doc(db, 'chats', chatId), (snapshot) => {
        if (snapshot.exists()) {
          setChatName(snapshot.data().name);
        }
      });

      return () => unsubscribe();
    }
  }, [chatId]);

  const sendMessage = (e) => {
    e.preventDefault();
    console.log('You typed >>>', input)
    setInput('');
  }

  return (
    <div className='chat'>
      <div className='chat__header'>
        <Avatar src={`https://api.dicebear.com/9.x/pixel-art/svg?seed=${Math.floor(Math.random() * 5000)}`} />

        <div className='chat__headerInfo'>
          <h3>{chatName}</h3>
          <p>Last seen at...</p>
        </div>

        <div className='chat__headerRight'>
          <IconButton>
            <SearchOutlinedIcon />
          </IconButton>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className='chat__body'>
      <p className={`chat__message ${true && 'chat__receiver'}`}>
            <span className='chat__name'>Ruthwik</span>
          Hey there
            <span className='chat__timestamp'>3:52 pm</span>
 
          </p>

      </div>

      <div className='chat__footer'>
        <IconButton>
        <InsertEmotionIcon />
        </IconButton>
        <form>
          <input  value={input}  onChange={e=> setInput(e.target.value)  } placeholder='Type a message' type='text' />
          <button onClick={sendMessage} type='submit'>Send a message</button>
        </form>
        <IconButton>
          <MicIcon />
        </IconButton>

      </div>

    </div>
  )

}

export default Chat
