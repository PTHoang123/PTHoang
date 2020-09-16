import React, { useState } from 'react';

import "./MessageSender.css";
import { Avatar } from '@material-ui/core';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import db from './firebase';
import firebase from 'firebase';
import { useStateValue } from "./StateProvider"

function MessageSender() {
    const [{user}, dispatch] = useStateValue();
   const [input, setInput] = useState("");
   const [imageURL, setimageURL]  = useState("");
    const handleSubmit = (e) => {
     e.preventDefault();

     db.collection('posts').add({
        message: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        profilePic: user.photoURL,
        username: user.displayName,
        image: imageURL
     })
     setInput("");
     setimageURL("");
    };
    
    return (
        <div className="massageSender">
            <div className="massageSender_top">
            <Avatar src={user.photoURL}/>
            <form>
       
                <input 
                 value={input}
                 onChange={(e) => setInput(e.target.value)}
                className='massageSender_input' placeholder={ `${user.displayName} ,Bạn đang nghĩ gì thế`}/>
                <input 
                 value={imageURL}
                 onChange={(e) => setimageURL(e.target.value)}
                 className='massageSender_url'  placeholder="image URL (Optional)"/>
                
                <button onClick={handleSubmit} type='submit'> Đăng </button>
            </form>
            </div>

            <div className="massageSender_bottom">
            <div className="massageSender_option">
               <VideocamIcon style={{color: "red"}}/>
               <h3>Video trực tiếp </h3>
            </div>
            <div className="massageSender_option">
               <PhotoLibraryIcon  style={{color: "green"}}/>
               <h3>Ảnh/Video </h3>
            </div>
            <div className="massageSender_option">
               <InsertEmoticonIcon  style={{color: "orange"}}/>
               <h3>Cảm xúc/Hoạt động </h3>
            </div>
            
        </div>
        </div>
    )
}

export default MessageSender;
