import Head from 'next/head'
import Image from 'next/image'
import mrauku from '../public/Images/Travels/mrauku.jpg'
import china from '../public/Images/Travels/china.jpg'
import bagan from '../public/Images/Travels/bagan.png'
import senegal_oriental from '../public/Images/Travels/senegal_oriental.jpg'
import saloum from '../public/Images/Travels/saloum.jpg'
import styles from '../styles/Travels.module.css'

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
                            <Image src={mrauku} alt="loading..." />
                            <div className='details'>
                                <p>J'ai pu faire pleins de rencontres exceptionnelles en Birmanie comme ce Boudha au milieu de la campgne !</p>
                            </div>
                        </div>
                    </a>

                    <a className={styles.card}>
                        <div className='frame'>
                            <Image src={china} alt="loading..." />
                            <div className='details'>
                                <p>J'ai pu faire pleins de rencontres exceptionnelles en Birmanie comme ce Boudha au milieu de la campgne !</p>
                            </div>
                        </div>
                    </a>

                    <a className={styles.card}>
                        <div className='frame'>
                            <Image src={saloum} alt="loading..." />
                            <div className='details'>
                                <p>J'ai pu faire pleins de rencontres exceptionnelles en Birmanie comme ce Boudha au milieu de la campgne !</p>
                            </div>
                        </div>
                    </a>

                    <a className={styles.card}>
                        <div className='frame'>
                            <Image src={senegal_oriental} alt="loading..." />
                            <div className='details'>
                                <p>J'ai pu faire pleins de rencontres exceptionnelles en Birmanie comme ce Boudha au milieu de la campgne !</p>
                            </div>
                        </div>
                    </a>

                    <a className={styles.card}>
                        <div className='frame'>
                            <Image src={bagan} alt="loading..." />
                            <div className='details'>
                                <p>J'ai pu faire pleins de rencontres exceptionnelles en Birmanie comme ce Boudha au milieu de la campgne !</p>
                            </div>
                        </div>
                    </a>

                    <a className={styles.card}>
                        <Carousel>
                            <div>
                                <Image src={bagan} alt="loading..." />
                                <p className="legend">Image 1</p>

                            </div>
                            <div>
                                <img src="/2.png" alt="image2" />
                                <p className="legend">Image 2</p>

                            </div>
                            <div>
                                <img src="/3.png" alt="image3" />
                                <p className="legend">Image 3</p>

                            </div>
                            <div>
                                <img src="/4.png" alt="image4" />
                                <p className="legend">Image 4</p>

                            </div>
                            <div>
                                <img src="/5.png" alt="image5" />
                                <p className="legend">Image 5</p>

                            </div>
                        </Carousel>
                    </a>
                </div>
            </main>

            <footer className={styles.footer}>
                <a href='https://www.linkedin.com/in/taojouet/'>
                    <span className={styles.logo}>
                        <Image src="/linkedin-icon-2.svg" alt="Linkedin Logo" width={108} height={24} />
                    </span>
                </a>

                <a href='mailto: taojouet@gmail.com'>
                    <span className={styles.logo}>
                        <Image src="/email-message-svgrepo-com.svg" alt="Email Logo" width={108} height={24} />
                    </span>
                </a>

                <a href='https://www.github.com/taojoue/'>
                    <span className={styles.logo}>
                        <Image src="/github-icon-1.svg" alt="GitHub Logo" width={108} height={24} />
                    </span>
                </a>
            </footer>
        </div>
    );
}
