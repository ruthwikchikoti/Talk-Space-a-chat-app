import React from 'react'
import './Chat.css'
import { useEffect, useState } from 'react';
import { Avatar, IconButton } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';

function Chat() {

  const [seed, setSeed] = useState('');
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

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
            <span className='chat__timestamp'>3:52pm</span>

          </p>

      </div>

      <div className='chat__footer'>

      </div>

    </div>
  )
}

export default Chat
