import React from 'react'
import './Chat.css'
import { useEffect, useState } from 'react';
import { Avatar, IconButton } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InsertEmotionIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';
function Chat() { 
  const [input, setInput] = useState('');
  const [seed, setSeed] = useState('');
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);


  const sendMessage = (e) => {
    e.preventDefault();
    console.log('You typed >>>', input)
    setInput('');
  }

  return (
    <div className='chat'>
      <div className='chat__header'>
        <Avatar src={`https://api.dicebear.com/9.x/pixel-art/svg?seed=${seed}`} />

        <div className='chat__headerInfo'>
          <h3>Room Name</h3>
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
