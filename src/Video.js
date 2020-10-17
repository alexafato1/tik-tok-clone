import React,{useRef, useState} from 'react';
import './Video.css';
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';
import night_city from './static/night_city.MOV';

function Video( {
    url, channel, description, song, likes, messages, shares,
}) {
     const videoRef = useRef(null)
     const [playing, setPlaying] = useState(false)
     const onVideoPress = () => {
         if(playing){
         videoRef.current.pause();
         setPlaying(false)
        }
         else {
           videoRef.current.play();
           
           setPlaying(true)
         }
     }

    return (
        <div className='video'>
            <video className='video__player' loop ref={videoRef} src={night_city}
            onClick={onVideoPress}></video>
            <VideoFooter 
            channel={channel}  description={description} song={song}
            />
            <VideoSidebar likes={likes} messages={messages} shares={shares}/>
        </div>
    )
}

export default Video
