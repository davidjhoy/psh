import Head from 'next/head'
import Image from 'next/image';
import CityButton from '../components/CityButton';
import Link from 'next/Link';
import {useRouter} from 'next/router';
import styles from '../styles/Home.module.scss'
import { useEffect } from 'react';

  
export default function Home() {

  //Use Effect Will Grab the Cities and store in state. Then we grab cities and render CityButton componenets for each. 
  const {query} = useRouter()
  query.c = 'popular'

  
  return (
    <div className={styles.container}>
      <Head>
        <title>wtw?</title>
        <meta name="pls hr me" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
   
        <div className = {styles.CityClassContainer}>
          <div className = {styles.CityHeader}> WHERE ARE YOU LOOKING FOR EXPERIENCES?</div>
          <div className = {styles.CityListWrap}>
            <CityButton  text = "City"/>
            <CityButton  text = "City"/>
            <CityButton  text = "City"/>
            <CityButton  text = "📍 Near Me"/>
          </div>
        </div>
    </div>
  )
}
