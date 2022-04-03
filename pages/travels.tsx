import Head from 'next/head'
import styles from '../styles/Travels.module.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Travels() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Tao Jouet</title>
                <meta name="description" content="Site de Tao Jouet" />
                {/* <link rel="icon" href="/favicon.ico" /> */}
            </Head>

            <main className={styles.main}>
                <div className={styles.grid}>
                    <h1 className='text-7xl'>En construction...</h1>
                </div>
            </main>
        </div>
    );
}
