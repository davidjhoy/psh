import React, {useState, useEffect} from 'react';
import styles from '../styles/Events.module.scss';
import EventCard from '../components/EventCard';
import Loading from '../components/Loading';
import { FiArrowLeft } from "react-icons/fi";
import { useRouter } from 'next/router';

const CityPage = ({events, togglePage, pageState, city}) => {
    const [timeFrame, setTimeFrame] = useState("Week");
    const today = new Date();
    const todayDay = today.getDay();


const renderEvents = (events) => {
        
            if (timeFrame == "Today"){
                return (
                    events[`${city}`].map((event)=>{
                       
                        const date = new Date(event.startUtc)
                        const eventDay = date.getDay()
                       
                        if (todayDay == eventDay){
                            return <EventCard key = {event._id} background={event.flyer} groupAVI = {event.groupAvi} eventName = {event.name} groupName = {event.groupName} eventDate = {event.startUtc} today = {today}/>
                        }
                        
                    })
                )
            
        //This is assuming that we are retrieving weekly events 

            }else{
                return(
                    events[`${city}`].map((event)=>{
                        const Lat = event.location.coordinates[1]
                        const Long = event.location.coordinates[0]
                        
                         
                                return <EventCard key = {event._id} background={event.flyer} groupAVI = {event.groupAvi} eventName = {event.name} groupName = {event.groupName} eventDate = {event.startUtc} today = {today}/>
                        
                            
                            
                        
                    })
                )
                
            }
        
           
            
          
}
    



   

    
  return (
    <div className = {styles.MainWrap}>
        <video  className = {styles.VideoPlayer1} autoPlay playsInline loop width = "1200" height = "600" type = "video/mp4">
                  <source src = "/wtw.mp4"></source>
        </video>
        <div className  = {styles.HeaderDiv}>
          
          <div className = {styles.BackButton} onClick = {()=> togglePage(!pageState)}>
            <FiArrowLeft size = "30px" color = "black"/>
          </div>

          <div className = {styles.VideoDiv}> 
              <video  className = {styles.VideoPlayer2} autoPlay  loop width = "1200" height = "600" type = "video/mp4" src = "https://posh-b2.s3.us-east-2.amazonaws.com/meta+(1)_1.mp4">
                  
              </video>
          </div>
        </div>

        <div className = {styles.ToggleTime}>
            <div className = {timeFrame != "Week" ? styles.TimeButtonSelected : styles.TimeButton} onClick = {()=> setTimeFrame("Week")}>
                This Week
            </div>
            <div className = {timeFrame != "Today" ?  styles.TimeButtonSelected: styles.TimeButton } onClick = {() => setTimeFrame("Today")}>
                Today
            </div>
        </div>
        
        <div className = {styles.EventGrid} >
            {events? renderEvents(events): <div></div>}
        </div>
        <Loading/>
    </div>
  )

  }
export default CityPage