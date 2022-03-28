import Head from 'next/head'
import styles from '../styles/Data.module.css'


export default function Skills() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Tao Jouet</title>
                <meta name="description" content="Site de Tao Jouet" />
                {/* <link rel="icon" href="/favicon.ico" /> */}
            </Head>

            <main className={styles.main}>
                <div className={styles.card}>
                    <h1 className={styles.title}>En cours de réalisation !</h1>
                    <br></br>
                    <p>
                        L&apos;objectif de ce projet est de connecter une gateway LoRaWAN à ce site en utilisant le LNS opensource Chirpstack.
                        Je souhaiterais pouvoir monitorer mon &quot;potager&quot; : température, humidité, etc. 
                        <br/>
                        Pour cela je vais utiliser les différentes tecnologies suivantes :
                    </p>
                    <ul className={styles.ul}>
                        <li className={styles.li}>LoRaWAN : pour la transmition des données</li>
                        <li>MQTT : pour la gestion des données</li>
                        <li>Files d&apos;attente : pour éviter la perte de données</li>
                    </ul>
                </div>
            </main>
        </div>
    );
}