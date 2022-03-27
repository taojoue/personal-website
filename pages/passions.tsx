import Head from 'next/head'
import Image from 'next/image'
import travelsLogo from '../public/Images/Logos/travel.png'
import china from '../public/Images/Travels/china.jpg'
import bagan from '../public/Images/Travels/bagan.png'
import senegal_oriental from '../public/Images/Travels/senegal_oriental.jpg'
import saloum from '../public/Images/Travels/saloum.jpg'
import styles from '../styles/Passions.module.css'

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

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
                            <a href='/travels'>
                                {/* <div style={{ position: 'relative', width: '50px', height: '50px' }}>
                                    <Image src={travelsLogo} alt="loading..." layout="fill" objectFit="cover" />
                                </div> */}
                                <h2>Les voyages !</h2>
                                <p>J'ai eu la chance de faire quelques voyages dans ma vie. Venez en découvrir quelques un en image ici 😊</p>
                            </a>
                        </div>
                    </a>


                    <a className={styles.card}>
                        <div className='frame'>
                            <div className='details'>
                                <h2>Le sport</h2>
                                <p>Depuis petit j'ai toujours été sportif et ai eu la chance de pouvoir pratiquer dans pleins de diciplines différentes. Aujourd'hui je continu de faire du sport régulièrement :</p>
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
                                <p>J'ai pu faire pleins de rencontres exceptionnelles en Birmanie comme ce Boudha au milieu de la campgne !</p>
                            </div>
                        </div>
                    </a>

                    <a className={styles.card}>
                        <div className='frame'>
                            <div className='details'>
                                <p>J'ai pu faire pleins de rencontres exceptionnelles en Birmanie comme ce Boudha au milieu de la campgne !</p>
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
