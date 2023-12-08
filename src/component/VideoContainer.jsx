import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { YOUTUBE_VIDEO_API } from '../utils/constants'
import VideoCard from './VideoCard'

const VideoContainer = () => {
  const [videos, setVideos] = useState([])
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API)
    const JsonData = await data.json()
    setVideos(JsonData.items)
  }
  useEffect(() => {
    getVideos()
  }, [])
  return (
    <div className='flex flex-wrap'>
      {
        videos.map((video) => (
          <Link key={video.id} to={`/watch?v=${video.id}`}>
            <VideoCard info={video} />
          </Link>
        ))
      }
    </div>
  )
}

export default VideoContainer