import { Avatar, Button } from '@mui/material'
import React from 'react'
import './TweetBox.css'
export default function TweetBox() {
    return (
        <div className='tweetbox'>
            <form>
                <div className='tweetbox-input'>
                    <Avatar src='hero.jpg' />
                    <input placeholder="What's happening?" type='text' />
                </div>
                <input className='tweetbox-input-image' placeholder="Optional: Enter image Url" type='text' />
                <Button className='tweetbox-button'>Tweet</Button>
            </form>
        </div>
    )
}
