import { Avatar } from '@material-ui/core';
import React, { useState } from 'react';
import './MessageSender.css';
import VideoCamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';


function MessageSender() {

   const [ input, setInput ] = useState('');
   const [ imageUrl, setImageUrl ] = useState('');

   const handleSubmit = e => {
      e.preventDefault();

      // some clever db stuff

      setInput('');
      setImageUrl('');
   };

   return (
      <div className='messageSender'>
         <div className='messageSender__top'>
            <Avatar />
            <form>
               <input
                  value={ input }
                  onChange={ (e) => setInput(e.target.value) }
                  className='messageSender__input'
                  placeholder={ `No que você está pensando?` }
               />
               <input
                  value={ imageUrl }
                  onChange={ (e) => setImageUrl(e.target.value) }
                  placeholder='image URL (Optional)'
               />

               <button onClick={ handleSubmit } type='submit' >Hidden submit</button>
            </form>
         </div>

         <div className='messageSender__bottom'>
            <div className='messageSender__option'>
               <VideoCamIcon style={ { color: 'red' } } />
               <h3>Vídeo ao vivo</h3>
            </div>

            <div className='messageSender__option'>
               <PhotoLibraryIcon style={ { color: 'green' } } />
               <h3>Foto/vídeo</h3>
            </div>

            <div className='messageSender__option'>
               <InsertEmoticonIcon style={ { color: 'orange' } } />
               <h3>Sentimento/atividade</h3>
            </div>
         </div>

      </div>
   )
}

export default MessageSender;
