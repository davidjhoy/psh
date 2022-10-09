import React, { useEffect } from 'react'
import styles from '../styles/CityButton.module.scss'

const CityButton = ({text, childNumber}) => {
    
    


  return (
    
    <div className = {styles.CityButton} style = {{
      animationDelay: `${0.2 * childNumber}s`, 
      border: text != "Near Me" ?  '1pt solid #fc0' : '1pt solid #0cf' ,
      boxShadow: text != "Near Me" ? "0 0 15px -2px #fc0, 0px 0px 14px #fc0 inset" : "0 0 15px -2px #0cf, 0px 0px 14px #0cf inset",
      color: text != "Near Me" ? '#fc0' : "#0cf" }} >
   
        {text == "Near Me" ? "📍 Near Me" : text}
      
    </div>
  )
}

export default CityButton;

