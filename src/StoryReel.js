import React from 'react';
import Story from './Story';
import './StoryReel.css';

function StoryReel() {
   return (
      <div className='storyReel'> 
         <Story 
            image='https://cdn.pixabay.com/photo/2018/02/16/05/35/squirrel-3156987_960_720.jpg'
            profileSrc='https://cdn.pixabay.com/photo/2020/09/27/23/39/cow-5608144_960_720.jpg'
            title='Corno Manso'
         />
         <Story 
            image='https://cdn.pixabay.com/photo/2020/07/23/11/58/man-5431169_960_720.jpg'
            profileSrc='https://cdn.pixabay.com/photo/2014/06/04/16/44/calf-362170_960_720.jpg'
            title='Corno Bravo'
         />
         <Story 
            image='https://cdn.pixabay.com/photo/2020/09/13/06/58/lake-5567461_960_720.jpg'
            profileSrc='https://cdn.pixabay.com/photo/2013/10/09/02/26/beef-192976_960_720.jpg'
            title='Corno Iludido'
         />
         <Story 
            image='https://cdn.pixabay.com/photo/2018/02/16/05/35/squirrel-3156987_960_720.jpg'
            profileSrc='https://cdn.pixabay.com/photo/2014/08/23/11/33/cow-425164_960_720.jpg'
            title='Corninho'
         />
         <Story 
            image='https://cdn.pixabay.com/photo/2018/02/16/05/35/squirrel-3156987_960_720.jpg'
            profileSrc='https://cdn.pixabay.com/photo/2013/10/09/02/26/beef-192976_960_720.jpg'
            title='Daniel'
         />
      </div>
   )
}

export default StoryReel;
