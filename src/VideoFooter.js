import React from 'react';
import './VideoFooter.css'
import record from './static/record.svg'
import music from './static/musical-note.svg'
import comment from './static/comment.svg'
import heart from './static/heart.png'
import arrow from './static/arrow.svg'
import { Button } from '@material-ui/core';
import AudiotrackIcon from '@material-ui/icons/Audiotrack';

import Ticker from 'react-ticker'


function VideoFooter({channel, description, song}) {
    return (
        <div className='videoFooter'>
            
           <div className='videoFooter__text'>
         
               <h3>@{channel}</h3>
               <p>{description}</p>
               <div className='videoFooter__ticker'>
             <AudiotrackIcon className='videoFooter__icon' fontSize="large"/>
              <Ticker mode='smooth' className='ticker'>
                  {({index}) => (
                      <>
                      <p>{song}</p>
                      </>
                  )}
              </Ticker>
              </div>
           </div>
           
            <img className='videoFooter__record' src={record} alt='music'/>
         
        </div>
    )
}

export default VideoFooter
