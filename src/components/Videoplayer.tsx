
import { useEffect, useRef } from 'react'
import {Video, VideoPlayerRef} from 'reactjs-media'

interface playerProps {
  tabOpen : boolean
  src : string
  poster : string
}
const VideoPlayer = ({tabOpen, src, poster}: playerProps) => {
  const playerRef = useRef <VideoPlayerRef | null>(null)
  useEffect(()=>{
    const pauseVideo = ()=>{
      if(playerRef.current && !tabOpen)
        playerRef.current.pause()
    }
    pauseVideo()
  },[tabOpen])
  return (
    <div className='w-full lg:px-10'>
      <Video
      ref={playerRef}
      src={src}
      poster={poster}
      width={10000}
      height={450}
      controls
       />
    </div>
  )
}

export default VideoPlayer
