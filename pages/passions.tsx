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
                                <p>J&apos;ai eu la chance de faire quelques voyages dans ma vie. Venez en découvrir quelques un en images 😊</p>
                            </div>
                            <CardActions>
                                <Button size="small" href='/travels'>
                                    La gallerie des mes voyages !
                                </Button>
                            </CardActions>
                        </div>
                    </a>


                    <a className={styles.card}>
                        <div className='frame'>
                            <div className='details'>
                                <h2>Le sport</h2>
                                <p>
                                    Sportif depuis la plus tendre enfance j&apos;ai eu la chance de pouvoir pratiquer beaucoup de diciplines différentes.
                                    Je continu de faire du sport régulièrement :
                                </p>
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
                                <p>
                                    Issu d&apos;une famille de bricoleurs j&apos;ai pu évoluer très tôt dans un atelier et traviller de mes mains. Cela m’a permis de découvrir un monde de débrouillardise,
                                    de me positionner en recherche de solution techniques et d&apos;utiliser de nombreux outils.
                                </p>
                            </div>
                        </div>
                    </a>
                </div>
            </main >
        </div >
    );
}
