import React, { useEffect } from 'react'
import styles from '../styles/CityButton.module.scss'

const CityButton = ({text}) => {
    
    


  return (
    <div className = {styles.CityButton}>{text}</div>
  )
}

export default CityButton;

