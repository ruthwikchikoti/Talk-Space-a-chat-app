import React, { useEffect, useState } from 'react'
import { addDoc, Timestamp } from 'firebase/firestore';
import './Chat.css'
import { Avatar, IconButton } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InsertEmotionIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';
import { useParams } from 'react-router-dom';
import { collection, doc, onSnapshot, query, orderBy } from 'firebase/firestore';
import db from '../../firebase';
import { useStateValue } from '../../StateProvider';

function Chat() { 
  const [input, setInput] = useState('');
  const [chatName, setChatName] = useState('');
  const [messages, setMessages] = useState([]);
  const { chatId } = useParams();
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    if (chatId) {
      const chatDocRef = doc(db, 'chats', chatId);
      const unsubscribeChat = onSnapshot(chatDocRef, (snapshot) => {
        if (snapshot.exists()) {
          setChatName(snapshot.data().name);
        }
      });

      const messagesRef = collection(db, 'chats', chatId, 'messages');
      const messagesQuery = query(messagesRef, orderBy('timestamp', 'asc'));
      const unsubscribeMessages = onSnapshot(messagesQuery, (snapshot) => {
        setMessages(snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        })));
      });

      return () => {
        unsubscribeChat();
        unsubscribeMessages();
      };
    }
  }, [chatId]);

  const sendMessage = (e) => {
    e.preventDefault();
    console.log('You typed >>>', input);

    addDoc(collection(db, 'chats', chatId, 'messages'), {
      message: input,
      name: user.displayName,
      timestamp: Timestamp.fromDate(new Date()),
      uid: user.uid,
    });

    setInput('');
  }

  const formatTimestamp = (timestamp) => {
    if (!timestamp) return 'No messages yet';
    
    if (timestamp instanceof Timestamp) {
      return timestamp.toDate().toUTCString();
    } else if (timestamp instanceof Date) {
      return timestamp.toUTCString();
    } else if (timestamp.seconds && timestamp.nanoseconds) {
      // Handle Firestore Timestamp object
      return new Timestamp(timestamp.seconds, timestamp.nanoseconds).toDate().toUTCString();
    } else if (typeof timestamp === 'string') {
      return new Date(timestamp).toUTCString();
    }
    return 'Invalid Date';
  }

  const getLastSeenTimestamp = () => {
    const lastMessage = messages[messages.length - 1];
    return lastMessage ? lastMessage.timestamp : null;
  }

  return (
    <div className='chat'>
      <div className='chat__header'>
        <Avatar src={`https://api.dicebear.com/9.x/pixel-art/svg?seed=${Math.floor(Math.random() * 5000)}`} />

        <div className='chat__headerInfo'>
          <h3>{chatName}</h3>
          <p>Last seen: {formatTimestamp(getLastSeenTimestamp())}</p>
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
        {messages.map((message) => (
          <p key={message.id} className={`chat__message ${message.uid === user.uid && 'chat__receiver'}`}>
            <span className='chat__name'>{message.name}</span>
            {message.message}
            <span className='chat__timestamp'>
              {formatTimestamp(message.timestamp)}
            </span>
          </p>
        ))}
      </div>

      <div className='chat__footer'>
        <IconButton>
          <InsertEmotionIcon />
        </IconButton>
        <form>
          <input value={input} onChange={e => setInput(e.target.value)} placeholder='Type a message' type='text' />
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