import Head from 'next/head'
import Image from 'next/image'
import myAvatar from './avatar.jpg'
import styles from '../styles/Skills.module.css'
import { Box, Grid } from '@mui/material';
import { theme } from '@nextui-org/react';

export default function Skills() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Tao Jouet</title>
                <meta name="description" content="Site de Tao Jouet" />
                {/* <link rel="icon" href="/favicon.ico" /> */}
            </Head>

            <main className={styles.main}>
                <div className="flex flex-row">
                    <div className={styles.card1}>01</div>
                    <div className={styles.card2}>02</div>
                </div>

                <div className="flex flex-row">
                    <div className={styles.card2}>03</div>
                    <div className={styles.card1}>04</div>
                </div>
            </main>
        </div>
    );
}