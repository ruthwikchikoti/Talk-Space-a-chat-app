import React, { useEffect, useState } from 'react';
import './SidebarChat.css';
import { Avatar } from '@mui/material';
import { addDoc, collection } from 'firebase/firestore';
import db from '../../firebase';
import { Link } from 'react-router-dom';


function SidebarChat({ id, name, addNewChat }) {
    const [seed, setSeed] = useState('');
    useEffect( () => {
        setSeed(Math.floor(Math.random() * 5000));  
    }, []);


    const createNewChat =  async () => { 
        const roomName = prompt("Please enter name for chat");

        if (roomName) {
            try{
              await addDoc(collection(db, 'chats'), {
                name: roomName
              });
            } catch (e) {
              console.log(e);
            }
          }
            }

  const avatarUrl = `https://api.dicebear.com/9.x/pixel-art/svg?seed=${seed}`;

  return !addNewChat ? (
    <Link to={`/chats/${id}`}>
    <div className="sidebarChat">
      <Avatar src={avatarUrl} />
      <div className="sidebarChat__info">
        <h2>{name} </h2>
        <p>This is the last message</p>
      </div>
    </div>
    </Link>
  ):(
    <div className='sidebarChat' onClick={createNewChat}>
        <h2>Add new Chat</h2>
    </div>
  

  )
}

export default SidebarChat;
