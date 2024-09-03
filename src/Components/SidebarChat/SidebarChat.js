import React, { useEffect, useState } from 'react';
import './SidebarChat.css';
import { Avatar } from '@mui/material';


function SidebarChat({ addNewChat }) {
    const [seed, setSeed] = useState('');
    useEffect( () => {
        setSeed(Math.floor(Math.random() * 5000));  
    }, []);


    const createNewChat = () => {
        const roomName = prompt("Please enter name for chat");
        if(roomName){
            // do some clever database stuff
        }
        
        
    }

  const avatarUrl = `https://api.dicebear.com/9.x/pixel-art/svg?seed=${seed}`;

  return !addNewChat ? (
    <div className="sidebarChat">
      <Avatar src={avatarUrl} />
      <div className="sidebarChat__info">
        <h2>Room Name</h2>
        <p>This is the last message</p>
      </div>
    </div>
  ):(
    <div className='sidebarChat' onClick={createNewChat}>
        <h2>Add new Chat</h2>
    </div>

  )
}

export default SidebarChat;
