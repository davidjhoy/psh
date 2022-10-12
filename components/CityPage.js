import React, {useState, useEffect} from 'react';
import styles from '../styles/Events.module.scss';
import EventCard from '../components/EventCard';
import Loading from '../components/Loading';
import {useRouter} from 'next/router';
import { FiArrowLeft } from "react-icons/fi";



const CityPage = ({togglePage, pageState, events, geoOn}) => {
    const [timeFrame, setTimeFrame] = useState("Week");
    const {query} = useRouter();
    const router = useRouter();
    const today = new Date();
    const todayDay = today.getDay();


useEffect(()=>{
    return () =>{

    }
  
    
},[])
const renderEvents = () => {    
    const handleEventClick = () =>{
        router.push('https://posh.vip/explore')
    }
            
    if (timeFrame == "Today"){
        return (
            events.map((event)=>{      
            const date = new Date(event.startUtc)
            const eventDay = date.getDay()
            if (todayDay == eventDay && event != null){
                return <EventCard key = {event._id} background={event.flyer} groupAVI = {event.groupAvi} eventName = {event.name} groupName = {event.groupName} eventDate = {event.startUtc} today = {today} onClick = {handleEventClick}/>
                }    
                    })
                )
        //Aassuming that we are retrieving weekly events 
            }else{
                return(
                    events.map((event)=>{
                        if(event != null){
                        return <EventCard key = {event._id} background={event.flyer} groupAVI = {event.groupAvi} eventName = {event.name} groupName = {event.groupName} eventDate = {event.startUtc} today = {today} onClick = {handleEventClick}/>
                        }
                    })
                )
                
            }
        
}

const handleBackClick = () =>{
    router.replace({
        query: {
        c: "popular",
        t: "",
        p: "1",
        city: ""}
    });
    togglePage(!pageState)
}





  return (
    <div className = {styles.MainWrap}>
        <video  className = {styles.VideoPlayer1} autoPlay playsInline loop width = "1200" height = "600" type = "video/mp4" src = "https://posh-b2.s3.us-east-2.amazonaws.com/meta+(1).mp4">
        </video>
        <div className  = {styles.HeaderDiv}>
          
          <div className = {styles.BackButton} onClick = {()=> handleBackClick()}>
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
            {events ? renderEvents() :  <Loading message = {geoOn? "Finding events near you": "Please turn on geolocation"} />}
        </div>
       
    </div>
  )

  }
export default CityPage