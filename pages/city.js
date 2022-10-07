import React, {useState, useEffect} from 'react'
import styles from '../styles/Events.module.scss'
import EventCard from '../components/EventCard'
import { FiArrowLeft } from "react-icons/fi";

const events = () => {
    const [events, setEvents] = useState()

    const handleEvents = (events) =>{
        setEvents(events)
    }

    useEffect(()=>{
        fetch('/v1/events')
        .then((res) => res.json())
        .then((json) => handleEvents(json))
        .catch(error => {console.log(error)})

    },[])

    const renderEvents = (events) =>{
        return(
            events.map((event)=>{
                return <EventCard key = {event._id} background={event.flyer} groupAVI = {event.groupAvi} eventName = {event.name} groupName = {event.groupName}/>
            })
        )
    }
    
  return (
    <div className = {styles.MainWrap}>
        <video  className = {styles.VideoPlayer1} autoPlay playsInline loop width = "1200" height = "600" type = "video/mp4">
                  <source src = "/wtw.mp4"></source>
        </video>
        <div className  = {styles.HeaderDiv}>
          
          <div className = {styles.BackButton}>
            <FiArrowLeft size = "30px" color = "black"/>
          </div>

          <div className = {styles.VideoDiv}> 
              <video  className = {styles.VideoPlayer2} autoPlay playsInline loop width = "1200" height = "600" type = "video/mp4">
                  <source src = "https://posh-b2.s3.us-east-2.amazonaws.com/meta+(1)_1.mp4"></source>
              </video>
          </div>
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
            {events? renderEvents(events): <h3>Loading</h3>}
        </div>
    </div>
  )
}

export default events