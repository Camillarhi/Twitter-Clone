import { Avatar } from '@mui/material';
import React, { forwardRef } from 'react'
import './Post.css';
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';

 const Post = forwardRef(({ displayName, userName, verified, text, image, avatar },ref) => {
    return (
        <div className='post' ref={ref}>
            <div className='post-avatar'>
                <Avatar src={avatar} />
            </div>
            <div className='post-body'>
                <div className='post-header'>
                    <div className='post-headertext'>
                        <h3>
                            {displayName}<span> {verified && <VerifiedIcon className='post-badge' />}</span><span className='post-headerspecial'>
                                @{userName}</span>
                        </h3>
                    </div>
                    <div className='post-headerdescription'>
                        <p>{text}</p>
                    </div>
                </div>
                <img src={image} alt='' />
                <div className='post-footer'>
                    <ChatBubbleOutlineIcon fontSize='small' />
                    <RepeatIcon fontSize='small' />
                    <FavoriteBorderIcon fontSize='small' />
                    <ShareIcon fontSize='small' />
                </div>
            </div>
        </div>
    )
});
export default Post;