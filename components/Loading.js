import styles from '../styles/Events.module.scss';
import React from 'react'

const Loading = () => {
  return (
    <div className = {styles.LoadingDiv}>
        <div className = {styles.InnerLoadingWrap}>
            <div className = {styles.LoadingHeader}>Finding the best events for you...</div>
            <div>
                <div></div>
            </div>
        </div>
    </div>
  )
}

export default Loading

