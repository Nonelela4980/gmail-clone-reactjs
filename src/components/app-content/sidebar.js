import React from 'react';
import './sidebar.css'
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import StarIcon from '@mui/icons-material/Star';
import SendIcon from '@mui/icons-material/Send';
import AddIcon from '@mui/icons-material/Add';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import VideocamIcon from '@mui/icons-material/Videocam';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import CreateIcon from '@mui/icons-material/Create';
import { Avatar, IconButton } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {openComposeMessage} from '../../features/composeSlice';
import { useSelector,useDispatch } from 'react-redux';
const SidebarTools=({Icon,text,number})=>(
    <div className='tool'>
        <div className="div">
        <Icon/>
        <span>{text}</span>
        </div>
        <span>{number}</span>
    </div>
)

function Sidebar() {
    const dispatch=useDispatch();
    const composeMessage=()=>{
        dispatch(openComposeMessage());
    }
    return (
        <div className='sidebar'>
            <div className="compose-button" onClick={composeMessage}>
                <CreateIcon/>
                <span>compose</span>
            </div>

            <div className="sidebar-bottom">
                <div className="sidebar-bottom-top">
                <SidebarTools Icon={InboxOutlinedIcon} text={'Inbox'} number={215}/>
                <SidebarTools Icon={StarIcon} text={'Starred'} number={215}/>
                <SidebarTools Icon={SendIcon} text={'Sent'} number={215}/>
                <SidebarTools Icon={InsertDriveFileIcon} text={'Drafts'} number={215}/>
                <SidebarTools Icon={StarIcon} text={'Starred'} number={215}/>

                <SidebarTools Icon={StarIcon} text={'Starred'} number={215}/>
                <SidebarTools Icon={StarIcon} text={'Starred'} number={215}/>
                </div>
                <div className="sidebar-bottom-bottom">
                    <h2 className='title'>Meet</h2>
                    <SidebarTools Icon={VideocamIcon} text={'New meeting'}/>
                    <SidebarTools Icon={KeyboardIcon} text={'Join meeting'}/>
                </div>
                <div className="groups">
                    <h2 className='title'>Hangout</h2>
                    <div className="person">
                        <div className="person-control">
                            <Avatar className='avatar'>N</Avatar>
                            <span>Nonelela</span>
                            <ArrowDropDownIcon className='addIcon'/>
                        </div>
                        
                        <IconButton>
                        <AddIcon/>
                        </IconButton>
                    </div>
                    
                </div>
            </div>

            
        </div>
    );
}
export default Sidebar;