import React from 'react';
import './sendEmail.css';
import CloseIcon from '@mui/icons-material/Close';
import { Button, IconButton } from '@mui/material';
import FormatColorTextIcon from '@mui/icons-material/FormatColorText';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import LinkIcon from '@mui/icons-material/Link';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import AddToDriveIcon from '@mui/icons-material/AddToDrive';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import LockClockOutlinedIcon from '@mui/icons-material/LockClockOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import {useForm} from'react-hook-form';
import {closeComposeMessage} from '../../features/composeSlice';
import { useDispatch } from 'react-redux';
import {addData} from '../../firebaseConfig';
import {serverTimestamp,collection, addDoc } from 'firebase/firestore'

function SendEmail() {
    const {register,handleSubmit,watch,formState:{errors}}=useForm();
    const dispatch=useDispatch();

    const onSubmit=(formData)=>{

        addData(formData);
        dispatch(closeComposeMessage())
    }

    // const addNewEmail=async(formData)=>{
    //     console.log({            recipients:formData.recipients,
    //         subject:formData.subject,
    //         message:formData.message,
    //         timestamp: serverTimestamp()})
    //     await addDoc(collection(db, "emails"),
    //     {
    //        recipients:formData.recipients,
    //        subject:formData.subject,
    //        message:formData.message,
    //        timestamp: serverTimestamp(),
    //      });

    //      console.log('data sent to firebase')
    // }

    const closeCompose=()=>{
        dispatch(closeComposeMessage());
    }
    return (
        <div className='send_email'>
            <div className="send_email_top">
                <h4>New Message</h4>
                <IconButton onClick={closeCompose}>
                    <CloseIcon className='closeBtn'/>
                </IconButton>
            </div>
            <div className="sendMail_bottom">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input 
                type='text' placeholder='recipients' 
                {...register('reciptients',{required:true})}
                />
                <p>{errors.recipients?.message}</p>

                <input 
                type='text' placeholder='Subject' 
                {...register('subject',{required:true})}
                />
                <input
                className='message' type='text' 
                placeholder='message' 
                {...register('message',{required:true})}
                />
                <div className="sendMail_options">
               <div className="sendMail_options_left">
                <Button className='sendButton' type='submit'>Send</Button>

                <IconButton>
                    <FormatColorTextIcon/>
                </IconButton>

                <IconButton>
                    <AttachFileIcon/>
                </IconButton>

                <IconButton>
                    <LinkIcon/>
                </IconButton>

                <IconButton>
                    <InsertEmoticonIcon/>
                </IconButton>

                <IconButton>
                    <AddToDriveIcon/>
                </IconButton>

                <IconButton>
                    <InsertPhotoOutlinedIcon/>
                </IconButton>

                <IconButton>
                    <LockClockOutlinedIcon/>
                </IconButton>

                <IconButton>
                    <BorderColorOutlinedIcon/>
                </IconButton>
               </div>
               <div className="sendMail_options_right">
               <IconButton>
                    <DeleteOutlinedIcon/>
                </IconButton>
                <IconButton>
                    <MoreVertOutlinedIcon/>
                </IconButton>
               </div>
            </div>
            </form>
            </div>
        </div>
    );
}

export default SendEmail;