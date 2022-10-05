import React from 'react'
import styles from '../styles/Events.module.scss'
const EventCard = () => {
  return (
    <div className = {styles.EventCard}>
        EventCard
        <div>Organizer</div>
        <div>Event Info</div>
        <div className = {styles.EventFilter}></div>
    </div>
  )
}

export default EventCard