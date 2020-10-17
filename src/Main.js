import React,{useEffect, useState} from 'react'
import Video from './Video'
import {db} from './firebase'




function Main() {
    const [videos, setVideos] = useState([])

  useEffect(() => {
    db.collection('videos').onSnapshot(snapshot =>(
      setVideos(snapshot.docs.map(doc => 
        doc.data()))
    ))
  }, [videos])

    return (
        <div>
             <div className="app__videos">
      {videos.map(
        ({ url, channel, description, song, likes, messages, shares} )=>(
     <Video
       url={url}
       channel={channel}
       description={description}
       song={song}
       likes={likes}
       messages={messages}
       shares={shares} />
      ))}
    </div> 
        </div>
    )
}

export default Main
