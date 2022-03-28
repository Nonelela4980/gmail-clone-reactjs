import React from 'react';
import './emailItem.css';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import DeleteIcon from '@mui/icons-material/Delete';
import ArchiveIcon from '@mui/icons-material/Archive';
import MarkAsUnreadIcon from '@mui/icons-material/MarkAsUnread';
import { IconButton } from '@mui/material';
import {Link} from 'react-router-dom';
function EmailItem({email}) {

    return (
    <Link to={'/email'}  style={{ textDecoration: 'none' }}>
        <div className='email-item'>

            <div className="item-left">
                <IconButton><CheckBoxOutlineBlankIcon/></IconButton>
                <IconButton><StarBorderIcon/></IconButton>
                <h4>{email.from}</h4>
            </div>

            <div className="item-right">
                <h4 className='message'>{email.message}</h4>
                <h4 className='time'>{email.time}</h4>
            </div>

        </div>
    </Link>
    );
}
export default EmailItem;