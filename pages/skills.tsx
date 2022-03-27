import Head from 'next/head'
import Image from 'next/image'
import myAvatar from './avatar.jpg'
import styles from '../styles/Skills.module.css'
import { Box, Grid } from '@mui/material';
import { theme } from '@nextui-org/react';

import ts from '../public/Images/Logos/ts.svg'
import cpp from '../public/Images/Logos/cpp.svg'
import html from '../public/Images/Logos/html5.svg'
import ionic from '../public/Images/Logos/ionic.png'
import css from '../public/Images/Logos/css.svg'
import python from '../public/Images/Logos/python.svg'
import docker from '../public/Images/Logos/docker.svg'
import rust from '../public/Images/Logos/rust.png'
import angular from '../public/Images/Logos/angular.svg'
import nextjs from '../public/Images/Logos/nextjs.png'
import tailwindcss from '../public/Images/Logos/tailwindcss.svg'
import nodered from '../public/Images/Logos/nodered.svg'
import next from 'next';

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
                        <Image src={ts} alt="loading..." />
                    </div>
                    <div className={styles.card2}>

                    </div>
                </div>

                {/* // Right side */}
                <div className="flex flex-row">
                    <div className={styles.card2}>

                    </div>
                    <div className={styles.card1}>
                        <Image src={nextjs} alt="loading..." />
                    </div>
                </div>

                {/* // Left side */}
                <div className="flex flex-row">
                    <div className={styles.card1}>
                        <Image src={angular} alt="loading..." />
                    </div>
                    <div className={styles.card2}>

                    </div>
                </div>

                {/* // Right side */}
                <div className="flex flex-row">
                    <div className={styles.card2}>

                    </div>
                    <div className={styles.card1}>
                        <Image src={tailwindcss} alt="loading..." />
                    </div>
                </div>

                {/* // Left side */}
                <div className="flex flex-row">
                    <div className={styles.card1}>
                        <Image src={docker} alt="loading..." />
                    </div>
                    <div className={styles.card2}>

                    </div>
                </div>

                {/* // Right side */}
                <div className="flex flex-row">
                    <div className={styles.card2}>

                    </div>
                    <div className={styles.card1}>
                        <Image src={rust} alt="loading..." />
                    </div>
                </div>

                {/* // Left side */}
                <div className="flex flex-row">
                    <div className={styles.card1}>
                        <Image src={nodered} alt="loading..." />
                    </div>
                    <div className={styles.card2}>

                    </div>
                </div>

                {/* // Right side */}
                <div className="flex flex-row">
                    <div className={styles.card2}>

                    </div>
                    <div className={styles.card1}>
                        <Image src={ionic} alt="loading..." />
                    </div>
                </div>

                {/* // Left side */}
                <div className="flex flex-row">
                    <div className={styles.card1}>
                        <Image src={cpp} alt="loading..." />
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