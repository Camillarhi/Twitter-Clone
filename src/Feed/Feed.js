import React from 'react'
import Post from '../Post/Post'
import TweetBox from '../Tweetbox/TweetBox'
import './Feed.css'
export default function Feed() {
    return (
        <div className='feed'>
            {/* Header */}
            <div className='feed-header'>
                <h2>Home</h2>
            </div>

            {/* twetbox */}
            <TweetBox />

            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>

        </div>
    )
}
