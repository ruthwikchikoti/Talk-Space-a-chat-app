import React, { useEffect, useState } from 'react';
import './Sidebar.css';
import { collection, onSnapshot } from 'firebase/firestore';
import db from '../../firebase.js';
import Avatar from '@mui/material/Avatar';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { IconButton } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import SidebarChat from '../SidebarChat/SidebarChat';
import { useStateValue } from '../../StateProvider';

function Sidebar() {
    const [chats, setChats] = useState([]);
    const [{ user }, dispatch] = useStateValue();

    useEffect(() => {
        const chatsCollection = collection(db, 'chats');
        const unsubscribe = onSnapshot(chatsCollection, snapshot => {
            setChats(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data(),
            })));
        });

        return () => unsubscribe();
    }, []);

    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar src={user? user.photoURL : ''} />
                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlinedIcon />
                    <input placeholder="Search or start new chat" type="text" />
                </div>
            </div>
            <div className="sidebar__chats">
                <SidebarChat addNewChat />
                {chats.map(chat => (
                    <SidebarChat key={chat.id} id={chat.id} name={chat.data.name} />
                ))}
            </div>
        </div>
    );
}

export default Sidebar;