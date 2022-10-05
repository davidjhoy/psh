import React from 'react'
import styles from '../styles/Events.module.scss'

const events = () => {
  return (
    <div>
        <div>Arrow Button</div>
        <div className = {styles.VideoDiv}> 
            <video  className = {styles.VideoPlayer} autoPlay playsInline loop width = "1200" height = "600" type = "video/mp4">
                <source src = "/wtw.mp4"></source>
            </video>
        </div>
        <div className = {styles.ToggleTime}>
            <div>
                This Week
            </div>
            <div>
                Today
            </div>
        </div>
    </div>
  )
}

export default events