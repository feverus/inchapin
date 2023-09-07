'use client'

import { useEffect, useRef, useState } from 'react'
import styles from './videoWidget.module.scss'
import { VideoWidgetProps } from './videoWidget.props'
import ReactPlayer from 'react-player/youtube'
import { formatSeconds } from '@/lib/calculate'
import Image from 'next/image'
import screenfull from 'screenfull'
import { findDOMNode } from 'react-dom'

export default function VideoWidget({video = '', length = 0, preview = 'playDefaultBackground.png'}:VideoWidgetProps) {
  const [played, setPlayed] = useState(false)
  const player = useRef(null)

  const handleOutFullscreen = (event:Event) => {
    if (played) {
      screenfull.exit()
      setPlayed(false)
    }
  }

  useEffect(() => {
    if (played) {
      screenfull.request(findDOMNode(player.current) as Element|undefined).then(() => {
        setTimeout(() => {
          document.addEventListener('fullscreenchange', handleOutFullscreen)
        }, 100);  
      }).catch(error=>console.log(error))      
    }
    return () => {
      document.removeEventListener('fullscreenchange', handleOutFullscreen)
    }
  }, [played])
  
  
  return (
    <div className={styles.videoWidget}>
      <div className={styles.about}>
        <span>Видео о проекте</span>
        <span>{formatSeconds(length)}</span>
      </div>
      
      <div className={styles.line}></div>

      <button
        className={styles.playButton}
        onClick={() => setPlayed(true)}
      >
        <Image          
          src={"/images/"+preview}     
          width='241'
          height='241'
          style={{
            width: '100%',
            height: 'auto',
            maxWidth: '241px',
          }}
          alt="Произвести видео"
        />
      </button>

      {played && <ReactPlayer
        ref={player}
        url={video}
        loop={false} 
        pip={false}
        muted={true}
        playing={played}
        controls={true}
        style={{display:played?'block':'none'}}
        onEnded={() => setPlayed(false)}
      />}
    </div>
  )
}