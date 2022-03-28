import React from 'react';
import './mailList.css'
import CropDinIcon from '@mui/icons-material/CropDin';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RefreshIcon from '@mui/icons-material/Refresh';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import {IconButton } from '@mui/material';
import Email from './email';
import PeopleIcon from '@mui/icons-material/People';
import InboxIcon from '@mui/icons-material/Inbox';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import { borderBottom } from '@mui/system';
import { BorderStyle } from '@material-ui/icons';
import EmailItem from './emailItem';
const Socials=({Icon,text,color,selected})=>(   
    <div className={`social ${selected && "selected-solial"}`} 
    style={{
        
        color:`${selected && color}`,
        borderBottom:`3px ${selected && "solid"} ${selected && color}`
    }}
    >
    <Icon/>
    <h4>{text}</h4>
    </div>
);
function MailList() {

    const email={
        from:'Nonelela Cele',
        to:'Siziphiwe Cele',
        subject:'Win 200 ',
        message:'Hellow rands hello hello hello hello hello hellohello hellohello hellohello hellohello hellohello hello hello hellohello hellohello hellohello hellohello hellohello hellohello hellohello hellohello hellohello hellohello hellohello hellohello hello',
        time:"11:45 PM",
    }
    return (
        <div className='mail-list'>
            <div className="top">
                <div className="left">
                    <div className="select">
                    <IconButton className='select-more'>
                        <CropDinIcon/>
                    </IconButton>

                    <IconButton className='select-more'>
                        <ArrowDropDownIcon/>
                    </IconButton>
                    </div>

                    <IconButton><RefreshIcon/></IconButton>

                    <IconButton><MoreVertIcon/></IconButton>
                </div>

                <div className="right">
                    <span>1-50 of 811</span>
                <IconButton><KeyboardArrowLeftIcon/></IconButton>
                <IconButton><KeyboardArrowRightIcon/></IconButton>
                <IconButton className='select-more'><KeyboardIcon/></IconButton>
                <IconButton className='select-more'><ArrowDropDownIcon/></IconButton>
                </div>
            </div>
            <div className="emails">
                <div className="socials">
                    <Socials Icon={InboxIcon} text={'Primary'} color={'red'} selected={true}/>
                    <Socials Icon={PeopleIcon} text={'Social'} color={'blue'}/>
                    <Socials Icon={LocalOfferIcon} text={'Promotions'} color={'green'}/>
                </div>
                <div className="mailList">
                <EmailItem email={email}/>
                <EmailItem email={email}/>
                <EmailItem email={email}/>
                <EmailItem email={email}/>
                </div>
            </div>
        </div>
    );
}

export default MailList;