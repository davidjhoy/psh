
import Link from 'next/Link';
import styles from '../styles/Home.module.scss'




  
export default function Home() {
  
  return (
    <div className={styles.container}>
      <Link
          href={{
            pathname: '/explore',
          }}
        >
          <a>Thanks for the opportunity! To explore page</a>
        </Link>
    </div>
  )
}
