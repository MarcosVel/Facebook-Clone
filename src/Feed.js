import React from 'react';
import './Feed.css';
import MessageSender from './MessageSender';
import Post from './Post';
import StoryReel from './StoryReel';

function Feed() {
   return (
      <div className='feed'>
         <StoryReel />
         <MessageSender />

         <Post
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
         />
         <Post />
            {/* message={ message }
            timestamp={ timestamp }
            username={ username }
            image={ image } */}
         <Post />
      </div>
   )
}

export default Feed;
