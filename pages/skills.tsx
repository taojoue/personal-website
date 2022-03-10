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
                <h1>Mes compétences</h1>

                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={8} textAlign='center'>
                            <p>xs=8</p>
                        </Grid>
                        <Grid item xs={4} textAlign='center'>
                            <p>xs=4</p>
                        </Grid>
                        <Grid item xs={4} textAlign='center'>
                            <p>xs=4</p>
                        </Grid>
                        <Grid item xs={8} textAlign='center' border-radius="10px" border="1px solid #eaeaea">
                            <p>xs=8</p>
                        </Grid>
                    </Grid>
                </Box>

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