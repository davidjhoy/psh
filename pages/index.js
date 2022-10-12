
import Link from 'next/Link';
import styles from '../styles/Home.module.scss'
import { AiOutlineArrowRight } from "react-icons/ai";



  
export default function Home() {
  
  return (
    <div className={styles.container}>
      Thank you for this opportunity!
      <Link
          href={{
            pathname: '/explore',
          }}
        >
          <a className = {styles.entryPath}>To explore page <AiOutlineArrowRight/></a> 
        </Link>
    </div>
  )
}
