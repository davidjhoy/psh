
import Link from 'next/Link';
import {useRouter} from 'next/router';
import styles from '../styles/Home.module.scss'




  
export default function Home() {

  //Use Effect Will Grab the Cities and store in state. Then we grab cities and render CityButton componenets for each. 
  const {query} = useRouter()
  query.city = ""


  
  return (
    <div className={styles.container}>
      <Link
          href={{
            pathname: '/explore',
            query: { 
              c: "popular",
              t: "",
              p: "1",
              city: ""
           },
          }}
        >
          <a>Thanks for the opportunity! To explore page</a>
        </Link>
    </div>
  )
}
