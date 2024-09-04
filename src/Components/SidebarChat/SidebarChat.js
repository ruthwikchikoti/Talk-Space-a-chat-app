import React, { useEffect, useState } from 'react';
import './SidebarChat.css';
import { Avatar } from '@mui/material';
import { addDoc, collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import db from '../../firebase';
import { Link } from 'react-router-dom';

function SidebarChat({ id, name, addNewChat }) {
  const [seed, setSeed] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if(id) {
      const messagesRef = collection(db, 'chats', id, 'messages');
      const q = query(messagesRef, orderBy('timestamp', 'desc'));
      
      const unsubscribe = onSnapshot(q, (snapshot) => {
        setMessages(snapshot.docs.map(doc => doc.data()));
      });

      return () => unsubscribe();
    }
  }, [id]);

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const createNewChat = async () => {
    const roomName = prompt("Please enter name for chat");
    if (roomName) {
      try {
        await addDoc(collection(db, 'chats'), {
          name: roomName
        });
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
  }

  const avatarUrl = `https://api.dicebear.com/9.x/pixel-art/svg?seed=${seed}`;

  return !addNewChat ? (
    <Link to={`/chats/${id}`}>
      <div className="sidebarChat">
        <Avatar src={avatarUrl} />
        <div className="sidebarChat__info">
          <h2>{name}</h2>
          <p>{messages[0]?.message}</p>
        </div>
      </div>
    </Link>
  ) : (
    <div className='sidebarChat' onClick={createNewChat}>
      <h2>Add new Chat</h2>
    </div>
  );
}

export default SidebarChat;