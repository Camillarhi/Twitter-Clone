import { collection, onSnapshot, query } from "firebase/firestore";
import React, { useEffect, useState } from 'react';
import db from '../Firebase';
import Post from '../Post/Post';
import TweetBox from '../Tweetbox/TweetBox';
import './Feed.css';
import FlipMove from "react-flip-move";

export default function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const q = query(collection(db, "posts"))
         onSnapshot(q, (querySnapshot) => {
            setPosts(querySnapshot.docs.map(d => d.data()));
        });
    }, [])
    return (
        <div className='feed'>
            <div className='feed-header'>
                <h2>Home</h2>
            </div>

            <TweetBox />
            <FlipMove>

                {posts.length > 0 && posts?.map(post =>
                    <Post
                        key={post.text}
                        displayName={post.displayName}
                        userName={post.userName}
                        verified={post.verified}
                        text={post.text}
                        avatar={post.avatar}
                        image={post.image} />
                )}
            </FlipMove>



        </div>
    )
}
