import Head from 'next/head'
import Image from 'next/image'
import myAvatar from './avatar.jpg'
import styles from '../styles/Skills.module.css'
import { Box, Grid } from '@mui/material';
import { theme } from '@nextui-org/react';

import js from '../public/Images/Logos/javascript.svg'
import c from '../public/Images/Logos/c.svg'
import html from '../public/Images/Logos/html5.svg'
import ionic from '../public/Images/Logos/ionic.svg'
import css from '../public/Images/Logos/css.svg'
import python from '../public/Images/Logos/python.svg'

export default function Skills() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Tao Jouet</title>
                <meta name="description" content="Site de Tao Jouet" />
                {/* <link rel="icon" href="/favicon.ico" /> */}
            </Head>

            <main className={styles.main}>
                {/* // Left side */}
                <div className="flex flex-row">     
                    <div className={styles.card1}>
                        <Image src={html} alt="loading..." />
                    </div>
                    <div className={styles.card2}>
                        Vive le js :) 
                    </div>
                </div>

                {/* // Right side */}
                <div className="flex flex-row">     
                    <div className={styles.card2}>
                        
                    </div>
                    <div className={styles.card1}>
                        <Image src={css} alt="loading..." />
                    </div>
                </div>
                
                {/* // Left side */}
                <div className="flex flex-row">     
                    <div className={styles.card1}>
                        <Image src={js} alt="loading..." />
                    </div>
                    <div className={styles.card2}>
                        Vive le js :) 
                    </div>
                </div>

                {/* // Right side */}
                <div className="flex flex-row">     
                    <div className={styles.card2}>
                        
                    </div>
                    <div className={styles.card1}>
                        <Image src={c} alt="loading..." />
                    </div>
                </div>
                
                {/* // Left side */}
                <div className="flex flex-row">     
                    <div className={styles.card1}>
                        <Image src={ionic} alt="loading..." />
                    </div>
                    <div className={styles.card2}>
                        
                    </div>
                </div>

                {/* // Right side */}
                <div className="flex flex-row">     
                    <div className={styles.card2}>
                        
                    </div>
                    <div className={styles.card1}>
                        <Image src={python} alt="loading..." />
                    </div>
                </div>
            </main>
        </div>
    );
}