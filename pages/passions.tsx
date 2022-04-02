import Head from 'next/head'
import styles from '../styles/Passions.module.css'

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Button, CardActions } from '@mui/material'

export default function Travels() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Tao Jouet</title>
                <meta name="description" content="Site de Tao Jouet" />
            </Head>



            <main className={styles.main}>
                <div className={styles.grid}>

                    <a className={styles.card}>
                        <div className='frame'>
                            <div>
                                <h2>Les voyages !</h2>
                                <p>J&apos;ai eu la chance de faire quelques voyages dans ma vie. Venez en découvrir quelques un en image ici 😊</p>
                            </div>
                            <CardActions>
                                <Button size="small" href='/travels' target="_blank">
                                    La gallery des mes voyages !
                                </Button>
                            </CardActions>
                        </div>
                    </a>


                    <a className={styles.card}>
                        <div className='frame'>
                            <div className='details'>
                                <h2>Le sport</h2>
                                <p>Depuis petit j&apos;ai toujours été sportif et ai eu la chance de pouvoir pratiquer dans pleins de diciplines différentes. Aujourd&apos;hui je continu de faire du sport régulièrement :</p>
                                <ul className={styles.ul}>
                                    <li>Course à pied</li>
                                    <li>Escalade</li>
                                    <li>Kite-Surf</li>
                                    <li>...</li>
                                </ul>
                            </div>
                        </div>
                    </a>

                    <a className={styles.card}>
                        <div className='frame'>
                            <div className='details'>
                                <h2>Le bricolage</h2>
                                <p>J&apos;ai eu la chance d&apos;avoir un père très bricoleur qui m’a transmis cette passion. Cela m’a permis de découvrir un monde de débrouillardise et de me forger un caractère ainsi que des qualités similaires.</p>
                            </div>
                        </div>
                    </a>
                </div>
            </main >
        </div >
    );
}
