import { Avatar } from '@mui/material';
import React from 'react'
import './Post.css';
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';

export default function Post({ displayName, userName, verified, text, image, avatar }) {
    return (
        <div className='post'>
            <div className='post-avatar'>
                <Avatar src='hero.jpg' />
            </div>
            <div className='post-body'>
                <div className='post-header'>
                    <div className='post-headertext'>
                        <h3>
                            Camilla
                            <span className='post-headerspecial'>
                                <VerifiedIcon className='post-badge' />
                            
                             @camil__</span>
                        </h3>
                    </div>
                    <div className='post-headerdescription'>
                        <p>Dummy text for clone</p>
                    </div>
                </div>
                <img src='hero.jpg' alt='' />
                <div className='post-footer'>
                    <ChatBubbleOutlineIcon fontSize='small' />
                    <RepeatIcon fontSize='small' />
                    <FavoriteBorderIcon fontSize='small' />
                    <ShareIcon fontSize='small' />
                </div>
            </div>
        </div>
    )
}
