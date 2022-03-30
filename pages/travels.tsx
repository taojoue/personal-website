import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Travels.module.css'

import mrauku from '../public/Images/Travels/mrauku.jpg'
import china from '../public/Images/Travels/china.jpg'
import baganOr from '../public/Images/Travels/baganOr.jpg'
import senegal_oriental from '../public/Images/Travels/senegal_oriental.jpg'
import saloum from '../public/Images/Travels/saloum.jpg'
import philipinneIle from '../public/Images/Travels/philipinneIle.jpg'
import saltoVolcan from '../public/Images/Travels/saltoVolcan.jpg'
import sautPyramide from '../public/Images/Travels/sautPyramide.jpg'
import tajMahal from '../public/Images/Travels/tajMahal.jpg'
import villeBordMer from '../public/Images/Travels/villeBordMer.jpg'
import carVoile from '../public/Images/Travels/charVoile.jpg'
import volcan from '../public/Images/Travels/volcan.jpg'

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

                    <a className={styles.image}>
                        <div className='frame'>
                            <Image src={mrauku} alt="loading..." />
                        </div>
                    </a>

                    <a className={styles.image}>
                        <div className='frame'>
                            <Image src={china} alt="loading china..." />
                        </div>
                    </a>

                    <a className={styles.image}>
                        <div className='frame'>
                            <Image src={saloum} alt="loading..." />
                        </div>
                    </a>

                    <a className={styles.image}>
                        <div className='frame'>
                            <Image src={senegal_oriental} alt="loading..." />
                        </div>
                    </a>

                    <a className={styles.image}>
                        <div className='frame'>
                            <Image src={saltoVolcan} alt="loading..." />
                        </div>
                    </a>

                    <a className={styles.image}>
                        <div className='frame'>
                            <Image src={villeBordMer} alt="loading..." />
                        </div>
                    </a>

                    <a className={styles.image}>
                        <div className='frame'>
                            <Image src={sautPyramide} alt="loading..." />
                        </div>
                    </a>

                    <a className={styles.image}>
                        <div className='frame'>
                            <Image src={carVoile} alt="loading..." />
                        </div>
                    </a>
                    <a className={styles.image}>
                        <div className='frame'>
                            <Image src={tajMahal} alt="loading..." />
                        </div>
                    </a>

                    <a className={styles.image}>
                        <div className='frame'>
                            <Image src={volcan} alt="loading..." />
                        </div>
                    </a>

                    <a className={styles.image}>
                        <div className='frame'>
                            <Image src={philipinneIle} alt="loading..." />
                        </div>
                    </a>
                </div>
            </main>
        </div>
    );
}
