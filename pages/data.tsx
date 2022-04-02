import Head from 'next/head'
import styles from '../styles/Data.module.css'


export default function Skills() {
    return (
        <div>
            <Head>
                <title>Tao Jouet</title>
                <meta name="description" content="Site de Tao Jouet" />
                {/* <link rel="icon" href="/favicon.ico" /> */}
            </Head>

            <main className={styles.main}>
                <div className='container max-w-5xl border border-gray-400 rounded-lg  text-center'>
                    <h1 className='text-2xl'>
                        En cours de réalisation !
                    </h1>
                    <br />
                    <p className='text-lg'>
                        L&apos;objectif de ce projet est de connecter une gateway LoRaWAN à ce site en utilisant le LNS opensource Chirpstack.
                        Je souhaiterais pouvoir monitorer mon &quot;potager&quot; : température, humidité, etc.
                        <br />
                        Pour cela je vais utiliser les différentes tecnologies suivantes :
                    </p>
                    <ul className='list-inside list-disc text-base'>
                        <li>LoRaWAN : pour la transmition des données</li>
                        <li>MQTT : pour la gestion des données</li>
                        <li>Files d&apos;attente : pour éviter la perte de données</li>
                    </ul>

                </div>
            </main>
        </div>
    );
}