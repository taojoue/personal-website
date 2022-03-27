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
                        </div>
                    </a>

                    <a className={styles.card}>
                        <div className='frame'>
                            <Image src={china} alt="loading..." />
                        </div>
                    </a>

                    <a className={styles.card}>
                        <div className='frame'>
                            <Image src={saloum} alt="loading..." />
                        </div>
                    </a>

                    <a className={styles.card}>
                        <div className='frame'>
                            <Image src={senegal_oriental} alt="loading..." />
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
            </main>
        </div>
    );
}
