import React from 'react'
import styles from '../styles/Events.module.scss'
const events = () => {
  return (
    <div>
        <div className = {styles.VideoDiv}> 
            <video className = {styles.VideoPlayer} autoplay playsinline loop src="/assets/wtw.mp4"></video>
        </div>
        <div>Other Div</div>
    </div>
  )
}

export default events