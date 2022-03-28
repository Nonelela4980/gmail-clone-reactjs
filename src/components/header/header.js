import { Avatar, IconButton } from '@material-ui/core';
import React from 'react';
import './header.css';
import logo from '../../assets/images/logo_gmail.png'
import MenuIcon from '@mui/icons-material/Menu';
import HelpOutlineRoundedIcon from '@mui/icons-material/HelpOutlineRounded';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import SearchIcon from '@mui/icons-material/Search';
import AppsIcon from '@mui/icons-material/Apps';
import TuneIcon from '@mui/icons-material/Tune';
/**
 * Author : Cele Nonelela 
 * 
 * Created: 14 Mar 2022 
 * 
 */

function Header() {
    return (
        <div className='header'>

        <div className="header-left">
             <IconButton>
                    <MenuIcon/>
            </IconButton>
            <div className="brand">
                    <img src={logo}/>
            </div>
        </div>

        <div className="header-right">
            <div className="search-area">
                <IconButton>
                    <SearchIcon/>
                </IconButton>
                <input type='text' name='searchText' id='searchText' placeholder='Search mail'/>
                <IconButton>
                    <TuneIcon/>
                </IconButton>
            </div>
            <div className="header-settings">
                <IconButton>
                <HelpOutlineRoundedIcon/>
                </IconButton>
                <IconButton>
                <SettingsOutlinedIcon/>
                </IconButton>
                <IconButton>
                <AppsIcon/>
                </IconButton>
                <Avatar className='avatar'> 
                    {/* <img src=''/> */}
                    N
                </Avatar>
               
            </div>
        </div>

        </div>
    );
}

export default Header;