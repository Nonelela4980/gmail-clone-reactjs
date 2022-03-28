import React from 'react';
import './email.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import AddTaskIcon from '@mui/icons-material/AddTask';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Avatar, IconButton } from '@mui/material';
import PrintIcon from '@mui/icons-material/Print';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ReplyIcon from '@mui/icons-material/Reply';
import { useNavigate } from 'react-router-dom';
function Email(props) {
    const navigate=useNavigate();
    
    return (
        <div className='email'>
            <div className="email_tools">
                <div className="email_tools_left">
                <IconButton onClick={()=>navigate(-1)}>
                    <ArrowBackIcon/>
                </IconButton>
                <IconButton>
                    <ArchiveOutlinedIcon/>
                </IconButton>

                <IconButton>
                    <ReportGmailerrorredIcon/>
                </IconButton>

                <IconButton>
                    <DeleteOutlineIcon/>
                </IconButton>

                <IconButton>
                    <MailOutlineIcon/>
                </IconButton>

                <IconButton>
                    <QueryBuilderIcon/>
                </IconButton>

                <IconButton>
                    <AddTaskIcon/>
                </IconButton>

                <IconButton>
                    <MoveToInboxIcon/>
                </IconButton>

                <IconButton>
                    <LabelOutlinedIcon/>
                </IconButton>

                <IconButton>
                    <MoreVertOutlinedIcon/>
                </IconButton>
                </div>

                <div className="email_tools_right">
                    <p>1 of 350</p>
                    <IconButton>
                        <ArrowBackIosNewOutlinedIcon/>
                    </IconButton>

                    <IconButton>
                        <ArrowForwardIosOutlinedIcon/>
                    </IconButton>

                    <IconButton>
                        <KeyboardIcon/>
                    </IconButton>

                    <IconButton>
                         <ExpandMoreIcon/>
                    </IconButton>
                </div>
            </div>

            <div className="mail_body">
                <div className="mail_body_top">
                    <h2>Subject</h2>
                    <div className="mail_body_top_icons">
                    <IconButton>
                         <PrintIcon/>
                    </IconButton>

                    <IconButton>
                         <OpenInNewIcon/>
                    </IconButton>
                    </div>
                </div>

                <div className="mail_body_middle">
                    <div className="emails_info">
                        <Avatar></Avatar>

                        <div>
                            <h4>Nonelela Cele <span>{'<nonelelacele@gmail.com>'}</span></h4>
                            <div>
                                <p>to {'ton Livin'}</p>
                                <IconButton>
                                    <ExpandMoreIcon/>
                                </IconButton>
                            </div>
                        </div>
                    </div>

                    <div className="time_info">
                        <h4>Mar 22, 2022, 5:48 AM</h4>
                        <IconButton>
                            <StarBorderIcon/>
                         </IconButton>

                         <IconButton>
                            <ReplyIcon/>
                         </IconButton>

                         <IconButton>
                            <MoreVertOutlinedIcon/>
                         </IconButton>
                    </div>
                </div>
                <div className="email_message">
                    <p>Hello world</p>
                </div>
            </div>
        </div>
    );
}
export default Email;