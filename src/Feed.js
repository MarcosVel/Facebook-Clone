import React, { useEffect, useState } from 'react';
import './Feed.css';
import MessageSender from './MessageSender';
import Post from './Post';
import StoryReel from './StoryReel';
import db from './firebase';

function Feed() {

   const [ posts, setPosts ] = useState([]);

   useEffect(() => {
      db.collection('posts')
         .orderBy('timestamp', 'desc')
         .onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })))
         ))
   }, [])

   return (
      <div className='feed'>
         <StoryReel />
         <MessageSender />

         {posts.map(post => (
            <Post
               key={ post.data.id }
               profilePic={ post.data.profilePic }
               message={ post.data.message }
               timestamp={ post.data.timestamp }
               username={ post.data.username }
               image={ post.data.image }
            />
         )) }

         {/* <Post
            profilePic='https://cdn.pixabay.com/photo/2020/09/27/23/39/cow-5608144_960_720.jpg'
            message='Wow its works!'
            timestamp='this is a timestamp'
            username='boizin'
            image='https://cdn.pixabay.com/photo/2020/07/23/11/58/man-5431169_960_720.jpg'
         />
         <Post
            profilePic='https://cdn.pixabay.com/photo/2020/09/27/23/39/cow-5608144_960_720.jpg'
            message='Wow its works!'
            timestamp='this is a timestamp'
            username='boizin Vitin'
         /> */}

      </div>
   )
}

export default Feed;
