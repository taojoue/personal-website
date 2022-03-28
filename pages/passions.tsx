import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Passions.module.css'

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Button, CardActions } from '@mui/material'

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

                    <a className={styles.card}>
                        <div className='frame'>
                            <div>
                                {/* <div style={{ position: 'relative', width: '50px', height: '50px' }}>
                                    <Image src={travelsLogo} alt="loading..." layout="fill" objectFit="cover" />
                                </div> */}
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

                    {/* <a className={styles.card}>
                        <Carousel>
                            <div>
                                <Image src={bagan} alt="loading..." />
                                <p className="legend">Image 1</p>

                            </div>
                            <div>
                                <Image src={saloum} alt="loading..." />
                                <p className="legend">Image 2</p>

                            </div>
                            <div>
                                <Image src={china} alt="loading..." />
                                <p className="legend">Image 4</p>

                            </div>
                            <div>
                                <Image src={senegal_oriental} alt="loading..." />
                                <p className="legend">Image 5</p>

                            </div>
                        </Carousel>
                    </a> */}
                </div>
            </main >
        </div >
    );
}
