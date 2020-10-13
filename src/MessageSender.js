import { Avatar } from '@material-ui/core';
import React, { useState } from 'react';
import './MessageSender.css';
import VideoCamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { useStateValue } from './StateProvider';
import db from './firebase';
import firebase from 'firebase';

import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

function MessageSender() {

   const [ { user }, dispatch ] = useStateValue();
   const [ input, setInput ] = useState('');
   const [ imageUrl, setImageUrl ] = useState('');
   // const [ imageLocal, setImageLocal ] = useState('');

   const handleSubmit = e => {
      e.preventDefault();

      db.collection('posts').add({
         message: input,
         timestamp: firebase.firestore.FieldValue.serverTimestamp(),
         profilePic: user.photoURL,
         username: user.displayName,
         image: imageUrl,
      })

      setInput('');
      setImageUrl('');
      // setImageLocal('');
   };

   return (
      <div className='messageSender'>
         <div className='messageSender__top'>
            <Avatar src={ user.photoURL } />
            <form>
               <input
                  value={ input }
                  onChange={ (e) => setInput(e.target.value) }
                  className='messageSender__input'
                  placeholder={ `No que você está pensando, ${ user.displayName }?` }
               />
               <input
                  value={ imageUrl }
                  onChange={ (e) => setImageUrl(e.target.value) }
                  placeholder='Gif/imagem URL (Opcional)'
               />

               {/* <div className='divBtnCam'>
                  <input 
                     accept="image/*"
                     className='inputBtnCam' 
                     id="icon-button-file"
                     type="file" 
                     value={ imageLocal }
                     onChange={ (e) => setImageLocal(e.target.files) } 
                  />
                  <label htmlFor="icon-button-file">
                     <IconButton color="primary" aria-label="upload picture" component="span">
                        <PhotoCamera />
                     </IconButton>
                  </label>
               </div> */}

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
