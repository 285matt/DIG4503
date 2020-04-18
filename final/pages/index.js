import Head from 'next/head';
import Link from 'next/link';
import styles from './Styles.module.css'

const Home = () => {
    return(
        <div>
            <Head>
                <title>Home</title>
            </Head>
            <div className={styles.header}>
                <p>
                    Click on the links below to filter your pokedex search!
                </p>
                <div className={styles.nav}>
                    <Link href = "/id"><a className={styles.link}>Id</a></Link>
                    <Link href = "/name"><a  className={styles.link}>Name</a></Link>
                    <Link href = "/type"><a  className={styles.link}>Type</a></Link>
                </div>
            </div>
        </div>
    )
}

export default Home;