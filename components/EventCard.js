import React from 'react'
import styles from '../styles/Events.module.scss'

const EventCard = ({background, groupAVI, eventName, groupName, eventDate }) => {

  const date = new Date(eventDate)
  const eventDay = date.getDay()
  const today = new Date()
  const todayDay = today.getDay()

  //This assumes that the DB is only sending events taking place from today onwards
  function parseDay (day) {
    switch (day){
      case 0:
       return "Sun"
        break;
      case 1:
        return "Mon"
        break;
      case 2:
        return "Tue"
        break;
      case 3:
        return "Wed"
        break;
      case 4:
        return "Fri"
        break;
      case 5:
        return "Sat"
        break;
      case 6:
        return "Sun"
        break;
      default:
        "NA"
    }
  }

  return (
    <div style={{backgroundImage: "url(" + background + ")"}} className = {styles.EventCard} >
        
        <img src = {groupAVI} className = {styles.groupAVI}>
        </img>
        <div className = {styles.eventCardFilter}></div>
        
        <div className = {styles.groupInfo}>
          <div className = {styles.eventDate}>{eventDay == todayDay ? "TODAY" : parseDay(eventDay)}</div>
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