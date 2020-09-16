import React from 'react'
import './Post.css';
import { Avatar } from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlinedIcon from '@material-ui/icons/ChatBubbleOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';



function Post({profilePic, image, username, timestamp, message}) {
    return (
        <div className="post">
        <div className= "post__top">
            <Avatar src={profilePic}
                className="post__avatar"
            />
            <div className="post__topInfo">
                <h3>{username}</h3>
                <p>{new Date(timestamp?.toDate()).toUTCString() }</p>
             </div>
             </div>

             <div className="post__bottom">
                 <p>{message}</p>
             </div>
             <div className="post__image">
                 <img src={image} alt=""/>
             </div>

             <div className="post__options">
                 <div className="post__option">
                 <ThumbUpIcon />
                 <p>Thích</p>

                 </div>
                 <div className="post__option">
                 <ChatBubbleOutlinedIcon/>
                 <p>Bình luận</p>

                 </div>
                 <div className="post__option">
                 <ShareOutlinedIcon/>
                 <p>Chia sẻ</p>

                 </div>
             </div>
        </div>
    )
}

export default Post
