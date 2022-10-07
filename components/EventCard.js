import React from 'react'
import styles from '../styles/Events.module.scss'

const EventCard = ({background, groupAVI, eventName, groupName }) => {




  return (
    <div style={{backgroundImage: "url(" + background + ")"}} className = {styles.EventCard} >
        
        <img src = {groupAVI} className = {styles.groupAVI}>
        </img>
        <div className = {styles.eventCardFilter}></div>
        
        <div className = {styles.groupInfo}>
          <div className = {styles.eventDate}>Date</div>
          <div className = {styles.eventInfoColumn}>
            <div className = {styles.eventInfoTitle} >{eventName}</div>
            <div className = {styles.eventInfoSubTitle}>{groupName}</div>
          </div>
         
        </div>
       

        {/* <div className = {styles.EventFilter}></div> */}
    </div>
  )
}

export default EventCard