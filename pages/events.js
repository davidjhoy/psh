import React from 'react'
import styles from '../styles/Events.module.scss'
const events = () => {
  return (
    <div>
        <div className = {styles.VideoDiv}> 
            <source className = {styles.VideoPlayer} autoplay playsinline loop src="/assets/wtw.mp4" type = "video/mp4"></source>
        </div>
        <div>Other Div</div>
    </div>
  )
}

export default events