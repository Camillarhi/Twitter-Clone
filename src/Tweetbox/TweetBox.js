import { Avatar, Button } from '@mui/material';
import { collection, addDoc } from "firebase/firestore";
import React, { useState } from 'react';
import db from '../Firebase';
import './TweetBox.css';

export default function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("")
    const [imageUrl, setImageUrl] = useState("");
const sendTweet=(e)=>{
    e.preventDefault();
   const saveTweet= collection(db, 'posts')
    addDoc(saveTweet,{
        displayName: "Camil",
        userName:"Camilah__",
        verified:false,
        text:tweetMessage,
        avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj4hHytsAKGB8kDr1I2ck0YIv66g28XH1ADg&usqp=CAU",
        image:imageUrl

    })
    setImageUrl("")
    setTweetMessage("")
}

    return (
        <div className='tweetbox'>
            <form>
                <div className='tweetbox-input'>
                    <Avatar src='hero.jpg' />
                    <input
                        value={tweetMessage}
                        placeholder="What's happening?"
                        type='text'
                        onChange={(e) => setTweetMessage(e.target.value)} />
                </div>
                <input
                    value={imageUrl}
                    className='tweetbox-input-image'
                    placeholder="Optional: Enter image Url"
                    type='text'
                    onChange={(e) => setImageUrl(e.target.value)} />

                <Button type='submit' onClick={sendTweet} className='tweetbox-button'>Tweet</Button>
            </form>
        </div>
    )
}
