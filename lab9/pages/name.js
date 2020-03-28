import NameSearch from '../components/NameSearch';
import Head from 'next/head';
import Link from 'next/link';
import styles from './Styles.module.css'


class App extends React.Component {

  render() {
    return (
      <div>
        <div>
              <Head>
                  <title>Name</title>
              </Head>
              <div  className={styles.header}>
                  <p>
                      Click on the links below to filter your pokedex search!
                  </p>
                  <div className={styles.nav}>
                    <Link href = "/index"><a  className={styles.link}>Home</a></Link>
                    <Link href = "/id"><a  className={styles.link}>Id</a></Link>
                    <Link href = "/type"><a  className={styles.link}>Type</a></Link>
                  </div>
              </div>
        </div>
        <div>
          <NameSearch />
          <div id="reportingArea" className={styles.textResponse}></div>
        </div>
      </div>
    );
  }
  
}

export default App;
