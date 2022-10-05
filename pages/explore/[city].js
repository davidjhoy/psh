import React from 'react'
import styles from '../../styles/Events.module.scss'
import EventCard from '../../components/EventCard'

const events = () => {
  return (
    <div className = {styles.MainWrap}>
        <div>Arrow Button</div>
        <div className = {styles.VideoDiv}> 
            <video  className = {styles.VideoPlayer} autoPlay playsInline loop width = "1200" height = "600" type = "video/mp4">
                <source src = "/wtw.mp4"></source>
            </video>
        </div>
        <div className = {styles.ToggleTime}>
            <div className = {styles.TimeButton}>
                This Week
            </div>
            <div className = {styles.TimeButton}>
                Today
            </div>
        </div>
        <div className = {styles.EventGrid} >
            <EventCard/>
        </div>
    </div>
  )
}

export default events