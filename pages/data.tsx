import Head from 'next/head'
import Image from 'next/image'
import myAvatar from './avatar.jpg'
import styles from '../styles/Skills.module.css'
import { Box, Grid } from '@mui/material';
import { theme } from '@nextui-org/react';

import js from '../public/Images/Logos/javascript.svg'
import c from '../public/Images/Logos/c.svg'
import html from '../public/Images/Logos/html5.svg'
import ionic from '../public/Images/Logos/ionic.png'
import css from '../public/Images/Logos/css.svg'
import python from '../public/Images/Logos/python.svg'
import docker from '../public/Images/Logos/docker.svg'
import rust from '../public/Images/Logos/rust.png'

export default function Skills() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Tao Jouet</title>
                <meta name="description" content="Site de Tao Jouet" />
                {/* <link rel="icon" href="/favicon.ico" /> */}
            </Head>

            <main className={styles.main}>
                coucou
            </main>
        </div>
    );
}